// src/pages/ProblemView.tsx
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Play, Upload, Save, Bug, Zap, Eye, MessageSquare, Loader2, RotateCcw } from "lucide-react";
import { getProblemById } from "@/data/problems";
import CodeEditor from "@/components/CodeEditor";
import AIChatPanel from "@/components/AIChatPanel";
import { runCode, languageIds } from "@/api/compiler";
import { debugCode, optimizeCode, reviewCode } from "@/api/ai";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { parseJavaError } from "@/utils/parseJavaError";

/**
 * Returns true if the Java source code contains any standard input reading
 * constructs — Scanner, BufferedReader, System.in, Console, or DataInputStream.
 * Used to decide whether to prompt the user to provide stdin before running.
 */
function codeNeedsInput(src: string): boolean {
  return (
    /Scanner\s*\(/.test(src) ||
    /BufferedReader\s*\(/.test(src) ||
    /System\.in/.test(src) ||
    /Console\s*\(/.test(src) ||
    /DataInputStream\s*\(/.test(src)
  );
}

export default function ProblemView() {
  const { id } = useParams<{ id: string }>();
  const problem = getProblemById(Number(id));
  const { user } = useAuth();

  // Only Java
  const language = "java";

  // ── Refs for resizable panels ──────────────────────────────────────────────
  const containerRef        = useRef<HTMLDivElement>(null);
  const isResizingBottomRef = useRef(false);
  const isResizingLeftRef   = useRef(false);
  // Ref for the stdin textarea so we can auto-focus when input is required
  const inputRef            = useRef<HTMLTextAreaElement>(null);

  // ── State ──────────────────────────────────────────────────────────────────
  const [code, setCode]                   = useState(problem?.starter_code?.java || "");
  const [stdin, setStdin]                 = useState("");
  const [output, setOutput]               = useState("");
  const [error, setError]                 = useState("");
  const [activeTab, setActiveTab]         = useState<"terminal" | "errors">("terminal");
  const [isRunning, setIsRunning]         = useState(false);
  const [isSubmitting, setIsSubmitting]   = useState(false);
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [inputChanged, setInputChanged]   = useState(false);
  const [runCount, setRunCount]           = useState(0);
  const [bottomHeight, setBottomHeight]   = useState(220);
  const [leftWidth, setLeftWidth]         = useState(40); // percent
  const [chatOpen, setChatOpen]           = useState(false);
  // True when the compiler detected stdin is needed but none was provided yet
  const [needsInput, setNeedsInput]       = useState(false);
  // Flashes "Auto-saved" in the toolbar for 2 s after every successful run-save
  const [autoSaved, setAutoSaved]         = useState(false);
  const [aiPanel, setAiPanel]             = useState<{
    open: boolean;
    title: string;
    content: string;
    loading: boolean;
  }>({ open: false, title: "", content: "", loading: false });

  // ── Load saved code when problem opens ────────────────────────────────────
  useEffect(() => {
    const fetchSavedCode = async () => {
      if (!user || !problem) return;

      const { data, error: fetchError } = await supabase
        .from("saved_codes")
        .select("code, compiler_runs")
        .eq("user_id", user.id)
        .eq("problem_id", problem.id)
        .eq("language", language)
        .maybeSingle();

      if (fetchError) {
        console.error("Error loading saved code:", fetchError);
        return;
      }

      if (data?.code) {
        setCode(data.code);
      }
      if (data?.compiler_runs) {
        setRunCount(data.compiler_runs);
      }
    };

    fetchSavedCode();
  }, [user, problem?.id]);

  // When needsInput becomes true, switch to the terminal tab and focus stdin
  useEffect(() => {
    if (needsInput) {
      setActiveTab("terminal");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [needsInput]);

  // ── Resizable panels ───────────────────────────────────────────────────────
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isResizingBottomRef.current && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const newHeight = rect.bottom - e.clientY;
        if (newHeight > 120 && newHeight < rect.height * 0.65) {
          setBottomHeight(newHeight);
        }
      }
      if (isResizingLeftRef.current && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const newPct = ((e.clientX - rect.left) / rect.width) * 100;
        if (newPct > 20 && newPct < 60) {
          setLeftWidth(newPct);
        }
      }
    };
    const handleMouseUp = () => {
      isResizingBottomRef.current = false;
      isResizingLeftRef.current   = false;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  if (!problem) {
    return <div className="p-6 text-muted-foreground">Problem not found.</div>;
  }

  // ── Auto-save helper ───────────────────────────────────────────────────────
  // Fires silently after every run (no toast). Uses an upsert so it always
  // writes to the same row regardless of whether one already exists.
  const autoSaveCode = async (latestCode: string, latestRunCount: number) => {
    if (!user) return;
    try {
      const { error: saveError } = await supabase.from("saved_codes").upsert(
        {
          user_id: user.id,
          user_email: user.email,
          problem_id: problem.id,
          title: problem.title,
          category: problem.category,
          code: latestCode,
          language,
          compiler_runs: latestRunCount,
          saved_at: new Date().toISOString(),
        },
        { onConflict: "user_id,problem_id,language" }
      );
      if (saveError) {
        console.error("Auto-save error:", saveError);
        return;
      }
      // Flash the "Auto-saved" badge in the toolbar for 2 seconds
      setAutoSaved(true);
      setTimeout(() => setAutoSaved(false), 2000);
    } catch (err) {
      console.error("Auto-save failed:", err);
    }
  };

  // ── Handlers ──────────────────────────────────────────────────────────────

  const handleRun = async () => {
    // If the code needs input and the user hasn't provided any yet,
    // prompt them to fill in the stdin textarea instead of running immediately.
    if (codeNeedsInput(code) && !stdin.trim()) {
      setNeedsInput(true);
      toast.info("This program reads input — please enter your input below and click Run again.");
      return;
    }

    setIsRunning(true);
    setNeedsInput(false);
    setOutput("");
    setError("");
    setExecutionTime(null);
    setInputChanged(false);

    const start = performance.now();
    try {
      const result = await runCode(code, languageIds["java"], stdin);
      const elapsed = (performance.now() - start) / 1000;
      setExecutionTime(elapsed);

      const rawError = result.compile_output || result.stderr || "";
      const rawSuccess = result.stdout || "";

      if (rawError && rawError.trim() !== "") {
        // Always route errors to the Errors tab — never show them in Terminal
        setError(parseJavaError(rawError));
        setActiveTab("errors");
      } else {
        // Successful run — show output in Terminal tab only
        setOutput(rawSuccess || "No output");
        setActiveTab("terminal");
      }
    } catch {
      setError("⚠️ Error connecting to the code runner. Check your API configuration.");
      setActiveTab("errors");
    } finally {
      setIsRunning(false);
      // Increment run count and auto-save with the new count.
      // Functional updater guarantees we read the latest count;
      // `code` from the closure is always current because setCode is
      // called synchronously on every editor keystroke.
      setRunCount((prev) => {
        const newCount = prev + 1;
        autoSaveCode(code, newCount);
        return newCount;
      });
    }
  };

  const handleRefresh = () => {
    setIsRunning(false);
    setOutput("");
    setError("");
    setExecutionTime(null);
    setInputChanged(false);
    setNeedsInput(false);
    setActiveTab("terminal");
    toast.info("Execution reset. Ready to run again.");
  };

  const handleSubmit = async () => {
    if (!user) {
      toast.error("Login to submit");
      return;
    }
    setIsSubmitting(true);
    try {
      await supabase.from("user_progress").upsert(
        {
          user_id: user.id,
          problem_id: problem.id,
          status: "solved",
          language: "java",
        },
        { onConflict: "user_id,problem_id" }
      );
      toast.success("Solution submitted!");
    } catch {
      toast.error("Failed to submit");
    }
    setIsSubmitting(false);
  };

  const handleAI = async (type: "debug" | "optimize" | "review") => {
    const titles = { debug: "AI Debug", optimize: "AI Optimize", review: "AI Review" };

    setAiPanel({ open: true, title: titles[type], content: "", loading: true });
    setChatOpen(true);

    try {
      const fns = { debug: debugCode, optimize: optimizeCode, review: reviewCode };
      const result = await fns[type](code, problem.description, "java");
      setAiPanel((prev) => ({ ...prev, content: result, loading: false }));
    } catch {
      setAiPanel((prev) => ({
        ...prev,
        content: "Error connecting to AI service.",
        loading: false,
      }));
    }
  };

  const errorsForChat = activeTab === "errors" ? error : "";

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div
      ref={containerRef}
      className="flex h-[calc(100vh-3rem)] overflow-hidden select-none"
    >

      {/* ══ LEFT PANEL — problem description ══════════════════════════════ */}
      <div
        style={{ width: `${leftWidth}%` }}
        className="flex flex-col border-r border-border overflow-hidden shrink-0"
      >
        <div className="flex-1 overflow-y-auto p-5 scrollbar-thin">

          {/* Title + meta */}
          <h1 className="text-lg font-bold text-foreground mb-1 leading-snug">
            {problem.title}
          </h1>
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                problem.difficulty === "Easy"
                  ? "bg-green-500/15 text-green-400"
                  : problem.difficulty === "Medium"
                  ? "bg-yellow-500/15 text-yellow-400"
                  : "bg-red-500/15 text-red-400"
              }`}
            >
              {problem.difficulty}
            </span>
            <span className="text-xs text-muted-foreground">{problem.category}</span>
          </div>

          {/* Company tags */}
          <div className="flex flex-wrap gap-1 mb-5">
            {problem.company_tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 bg-secondary rounded text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Description sections */}
          <div className="space-y-4 text-sm text-foreground leading-relaxed">
            <p>{problem.description}</p>

            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                Input Format
              </h3>
              <p>{problem.input_format}</p>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                Output Format
              </h3>
              <p>{problem.output_format}</p>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                Constraints
              </h3>
              <p className="font-mono text-xs bg-muted/40 rounded p-2">{problem.constraints}</p>
            </div>

            <div className="bg-card rounded-lg p-4 border border-border">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Sample Input
              </h3>
              <pre className="font-mono text-xs whitespace-pre-wrap text-foreground">
                {problem.sample_input}
              </pre>
            </div>

            <div className="bg-card rounded-lg p-4 border border-border">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Sample Output
              </h3>
              <pre className="font-mono text-xs whitespace-pre-wrap text-foreground">
                {problem.sample_output}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* ══ HORIZONTAL RESIZE HANDLE ══════════════════════════════════════ */}
      <div
        className="w-1.5 bg-border hover:bg-primary/60 cursor-col-resize shrink-0 transition-colors"
        onMouseDown={(e) => {
          e.preventDefault();
          isResizingLeftRef.current = true;
        }}
      />

      {/* ══ RIGHT PANEL — editor + terminal ══════════════════════════════ */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">

        {/* ── Toolbar ── */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-card shrink-0 flex-wrap gap-2">

          <div className="flex items-center gap-1.5 flex-wrap">

            {/* Run */}
            <button
              onClick={handleRun}
              disabled={isRunning}
              title="Run code"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-green-500 bg-green-500/10 hover:bg-green-500/20 transition-colors disabled:opacity-50"
            >
              {isRunning ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Play className="h-3.5 w-3.5" />
              )}
              {isRunning ? "Running…" : "Run"}
            </button>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              title="Submit solution"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-blue-400 bg-blue-400/10 hover:bg-blue-400/20 transition-colors disabled:opacity-50"
            >
              <Upload className="h-3.5 w-3.5" />
              {isSubmitting ? "Submitting…" : "Submit"}
            </button>

            {/* Refresh */}
            <button
              onClick={handleRefresh}
              title="Reset output"
              className="flex items-center justify-center w-7 h-7 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>

            <div className="w-px h-5 bg-border mx-1" />

            {/* AI Chat toggle */}
            <button
              onClick={() => setChatOpen((v) => !v)}
              title="Toggle AI Chat"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                chatOpen
                  ? "bg-purple-500/20 text-purple-400"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <MessageSquare className="h-3.5 w-3.5" />
              AI Chat
            </button>

            <div className="w-px h-5 bg-border mx-1" />

            {/* Debug */}
            <button
              onClick={() => handleAI("debug")}
              title="AI Debug"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-semibold bg-muted text-muted-foreground hover:text-red-400 hover:bg-red-400/10 transition-colors"
            >
              <Bug className="h-3.5 w-3.5" />
              Debug
            </button>

            {/* Optimize */}
            <button
              onClick={() => handleAI("optimize")}
              title="AI Optimize"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-semibold bg-muted text-muted-foreground hover:text-yellow-400 hover:bg-yellow-400/10 transition-colors"
            >
              <Zap className="h-3.5 w-3.5" />
              Optimize
            </button>

            {/* Review */}
            <button
              onClick={() => handleAI("review")}
              title="AI Review"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-semibold bg-muted text-muted-foreground hover:text-blue-400 hover:bg-blue-400/10 transition-colors"
            >
              <Eye className="h-3.5 w-3.5" />
              Review
            </button>
          </div>

          {/* Right side of toolbar: auto-saved flash + run counter badge */}
          <div className="flex items-center gap-2">

            {/* Auto-saved flash indicator — visible for 2 s after each run */}
            {autoSaved && (
              <span className="flex items-center gap-1 text-xs text-green-400 font-medium animate-pulse">
                <Save className="h-3 w-3" />
                Auto-saved
              </span>
            )}

            {/* Run counter badge */}
            {runCount > 0 && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                <Play className="h-3 w-3" />
                {runCount} run{runCount !== 1 ? "s" : ""}
              </div>
            )}
          </div>
        </div>

        {/* ── Editor + AI chat side by side ── */}
        {/* min-h-0 is critical here: without it, flex children ignore the
            parent's constrained height and overflow instead of scrolling    */}
        <div className="flex flex-1 min-h-0">

          {/* Code editor */}
          <div className="flex-1 overflow-hidden min-w-0">
            <CodeEditor
              language="java"
              value={code}
              onChange={(val) => {
                setCode(val);
                // Clear the needsInput prompt whenever the user edits code so
                // a fresh run-check happens on the next click.
                setNeedsInput(false);
              }}
            />
          </div>

          {/* AI Chat Panel
              h-full ensures AIChatPanel knows its exact height bounds so its
              internal message list can scroll. overflow-hidden on the wrapper
              prevents the panel itself from bloating the layout.            */}
          {(chatOpen || aiPanel.open) && (
            <>
              <div className="w-1.5 bg-border hover:bg-primary/60 cursor-col-resize shrink-0 transition-colors" />
              <div
                className="w-80 border-l border-border flex flex-col shrink-0 h-full overflow-hidden"
              >
                <AIChatPanel
                  isOpen={true}
                  onClose={() => {
                    setChatOpen(false);
                    setAiPanel((prev) => ({ ...prev, open: false }));
                  }}
                  code={code}
                  problemTitle={problem.title}
                  errors={errorsForChat}
                  aiPanelTitle={aiPanel.open ? aiPanel.title : undefined}
                  aiPanelContent={aiPanel.open ? aiPanel.content : undefined}
                  aiPanelLoading={aiPanel.open ? aiPanel.loading : undefined}
                />
              </div>
            </>
          )}
        </div>

        {/* ── VERTICAL RESIZE HANDLE ── */}
        <div
          className="h-1.5 bg-border hover:bg-primary/60 cursor-row-resize shrink-0 transition-colors"
          onMouseDown={(e) => {
            e.preventDefault();
            isResizingBottomRef.current = true;
          }}
        />

        {/* ── Terminal / Errors panel ── */}
        <div
          style={{ height: bottomHeight }}
          className="flex flex-col border-t border-border bg-card shrink-0 overflow-hidden"
        >
          {/* Tab bar */}
          <div className="flex items-center text-xs border-b border-border shrink-0">
            <button
              onClick={() => setActiveTab("terminal")}
              className={`px-4 py-2 transition-colors ${
                activeTab === "terminal"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Terminal
            </button>
            <button
              onClick={() => setActiveTab("errors")}
              className={`px-4 py-2 transition-colors ${
                activeTab === "errors"
                  ? "border-b-2 border-red-500 text-red-500"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Errors
            </button>
          </div>

          <div className="flex-1 p-3 font-mono text-xs overflow-auto">

            {activeTab === "terminal" && (
              <>
                {/* Prompt banner when stdin is required but not yet provided */}
                {needsInput && (
                  <p className="text-yellow-300 text-xs font-semibold mb-2 animate-pulse">
                    ⚠ This program reads from stdin — enter your input below, then click Run.
                  </p>
                )}

                {/* Input section */}
                <div className="text-green-400 mb-1 font-semibold">Enter Input</div>
                <textarea
                  ref={inputRef}
                  value={stdin}
                  onChange={(e) => {
                    setStdin(e.target.value);
                    // Clear the needsInput prompt as soon as the user starts typing
                    if (needsInput) setNeedsInput(false);
                    if (output || error) setInputChanged(true);
                  }}
                  placeholder="Type your stdin here…"
                  className={`w-full bg-black/60 text-white p-2 mb-1 rounded border resize-none text-xs transition-colors ${
                    needsInput
                      ? "border-yellow-400 ring-1 ring-yellow-400/50"
                      : "border-border"
                  }`}
                  rows={3}
                />

                {/* Warning when input changes after a run */}
                {inputChanged ? (
                  <p className="text-yellow-400 text-xs mb-3">
                    ⚠ Input changed — click Run again to see updated output.
                  </p>
                ) : (
                  <div className="mb-3" />
                )}

                {/* Output section */}
                <div className="text-green-400 mb-1 font-semibold">Output</div>
                <pre
                  className="text-foreground whitespace-pre-wrap select-text cursor-text"
                  style={{ userSelect: "text", WebkitUserSelect: "text" }}
                >
                  {output || (
                    <span className="text-muted-foreground">
                      Run your code to see output here.
                    </span>
                  )}
                </pre>

                {/* Execution time shown below output — same as CodeCompiler */}
                {executionTime !== null && (
                  <div className="mt-2 text-green-500 text-xs">
                    ⏱ Time taken: {executionTime.toFixed(3)}s
                  </div>
                )}
              </>
            )}

            {activeTab === "errors" && (
              <pre
                className="text-red-400 whitespace-pre-wrap select-text cursor-text"
                style={{ userSelect: "text", WebkitUserSelect: "text" }}
              >
                {error || "No errors."}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}