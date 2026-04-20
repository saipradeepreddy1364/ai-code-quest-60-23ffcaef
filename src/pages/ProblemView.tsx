// src/pages/ProblemView.tsx
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Play, Upload, Save, Bug, Zap, Eye, MessageSquare, Loader2, RotateCcw, ChevronLeft } from "lucide-react";
import { getProblemById } from "@/data/problems";
import CodeEditor from "@/components/CodeEditor";
import AIChatPanel from "@/components/AIChatPanel";
import { runCode, languageIds } from "@/api/compiler";
import { debugCode, optimizeCode, reviewCode } from "@/api/ai";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { parseJavaError } from "@/utils/parseJavaError";

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
  const navigate = useNavigate();
  const location = useLocation();

  const language = "java";

  // ── Refs for resizable panels ──────────────────────────────────────────────
  const containerRef        = useRef<HTMLDivElement>(null);
  const isResizingBottomRef = useRef(false);
  const isResizingLeftRef   = useRef(false);
  const inputRef            = useRef<HTMLTextAreaElement>(null);
  const handleRunRef        = useRef<() => void>(() => {});

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
  const [leftWidth, setLeftWidth]         = useState(40);
  const [chatOpen, setChatOpen]           = useState(false);
  const [needsInput, setNeedsInput]       = useState(false);
  const [autoSaved, setAutoSaved]         = useState(false);
  const [hasRun, setHasRun]               = useState(false);
  const [aiPanel, setAiPanel]             = useState<{
    open: boolean;
    title: string;
    content: string;
    loading: boolean;
    autoAttachCode: boolean;
  }>({ open: false, title: "", content: "", loading: false, autoAttachCode: false });

  // ── Load saved code ────────────────────────────────────────────────────────
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
      if (fetchError) { console.error("Error loading saved code:", fetchError); return; }
      if (data?.code) setCode(data.code);
      if (data?.compiler_runs) setRunCount(data.compiler_runs);
    };
    fetchSavedCode();
  }, [user, problem?.id]);

  useEffect(() => {
    if (needsInput) {
      setActiveTab("terminal");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [needsInput]);

  // ── Resizable panels mouse handlers ───────────────────────────────────────
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      if (isResizingBottomRef.current) {
        const newHeight = rect.bottom - e.clientY;
        if (newHeight > 120 && newHeight < rect.height * 0.65)
          setBottomHeight(newHeight);
      }

      if (isResizingLeftRef.current) {
        const newPct = ((e.clientX - rect.left) / rect.width) * 100;
        if (newPct > 15 && newPct < 60)
          setLeftWidth(newPct);
      }
    };

    const handleMouseUp = () => {
      isResizingBottomRef.current = false;
      isResizingLeftRef.current   = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup",   handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup",   handleMouseUp);
    };
  }, []);

  if (!problem) {
    return <div className="p-6 text-muted-foreground">Problem not found.</div>;
  }

  // ── Auto-save ──────────────────────────────────────────────────────────────
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
      if (saveError) { console.error("Auto-save error:", saveError); return; }
      setAutoSaved(true);
      setTimeout(() => setAutoSaved(false), 2000);
    } catch (err) {
      console.error("Auto-save failed:", err);
    }
  };

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleRun = async () => {
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
      const result  = await runCode(code, languageIds["java"], stdin);
      const elapsed = (performance.now() - start) / 1000;
      setExecutionTime(elapsed);
      const rawError   = result.compile_output || result.stderr || "";
      const rawSuccess = result.stdout || "";
      if (rawError && rawError.trim() !== "") {
        setError(parseJavaError(rawError));
        setActiveTab("errors");
      } else {
        setOutput(rawSuccess || "No output");
        setActiveTab("terminal");
      }
    } catch {
      setError("⚠️ Error connecting to the code runner. Check your API configuration.");
      setActiveTab("errors");
    } finally {
      setIsRunning(false);
      setHasRun(true);
      setRunCount((prev) => {
        const newCount = prev + 1;
        autoSaveCode(code, newCount);
        return newCount;
      });
    }
  };

  // Always point to the latest handleRun closure
  handleRunRef.current = handleRun;

  // ── Ctrl+Enter → Run (capture phase fires before Monaco swallows the event)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        handleRunRef.current();
      }
    };
    window.addEventListener("keydown", onKeyDown, true); // capture = true
    return () => window.removeEventListener("keydown", onKeyDown, true);
  }, []);

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
    if (!user) { toast.error("Login to submit"); return; }
    setIsSubmitting(true);
    try {
      await supabase.from("user_progress").upsert(
        { user_id: user.id, problem_id: problem.id, status: "solved", language: "java" },
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
    setAiPanel({ open: true, title: titles[type], content: "", loading: true, autoAttachCode: true });
    setChatOpen(true);
    try {
      const fns = { debug: debugCode, optimize: optimizeCode, review: reviewCode };
      const result = await fns[type](code, problem.description, "java");
      setAiPanel((prev) => ({ ...prev, content: result, loading: false }));
    } catch {
      setAiPanel((prev) => ({ ...prev, content: "Error connecting to AI service.", loading: false }));
    }
  };

  const errorsForChat = activeTab === "errors" ? error : "";
  const aiPanelVisible = chatOpen || aiPanel.open;

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div
      ref={containerRef}
      className="flex h-[calc(100vh-3rem)] overflow-hidden"
    >

      {/* ══ LEFT PANEL — problem description ══════════════════════════════ */}
      <div
        style={{ width: `${leftWidth}%` }}
        className="flex flex-col border-r border-border overflow-hidden shrink-0"
      >
        {/* ── Back navigation bar ── */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-border bg-card shrink-0">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-7 h-7 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            title="Go back"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-xs text-muted-foreground/50">/</span>
          <button
            onClick={() => navigate("/problems")}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Problems
          </button>
          <span className="text-xs text-muted-foreground/50">/</span>
          <span className="text-xs text-foreground font-medium truncate max-w-[160px]">
            {problem.title}
          </span>
        </div>

        {/* ── Problem description (scrollable) ── */}
        <div className="flex-1 overflow-y-auto p-5 scrollbar-thin">
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

          <div className="flex flex-wrap gap-1 mb-5">
            {problem.company_tags.map((t) => (
              <span key={t} className="text-xs px-2 py-0.5 bg-secondary rounded text-muted-foreground">
                {t}
              </span>
            ))}
          </div>

          <div className="space-y-4 text-sm text-foreground leading-relaxed">
            <p>{problem.description}</p>
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Input Format</h3>
              <p>{problem.input_format}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Output Format</h3>
              <p>{problem.output_format}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Constraints</h3>
              <p className="font-mono text-xs bg-muted/40 rounded p-2">{problem.constraints}</p>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Sample Input</h3>
              <pre className="font-mono text-xs whitespace-pre-wrap text-foreground">{problem.sample_input}</pre>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Sample Output</h3>
              <pre className="font-mono text-xs whitespace-pre-wrap text-foreground">{problem.sample_output}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* ══ LEFT ↔ EDITOR RESIZE HANDLE ══════════════════════════════════ */}
      <div
        className="w-1.5 bg-border hover:bg-primary/60 cursor-col-resize shrink-0 transition-colors"
        style={{ userSelect: "none" }}
        onMouseDown={(e) => { e.preventDefault(); isResizingLeftRef.current = true; }}
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
              {isRunning ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Play className="h-3.5 w-3.5" />}
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

            {/* Debug */}
            <button
              onClick={() => handleAI("debug")}
              disabled={!hasRun}
              title={hasRun ? "AI Debug" : "Run your code first to enable AI Debug"}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-orange-400 bg-orange-400/10 hover:bg-orange-400/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-orange-400/10"
            >
              <Bug className="h-3.5 w-3.5" />
              Debug
            </button>

            {/* Optimize */}
            <button
              onClick={() => handleAI("optimize")}
              disabled={!hasRun}
              title={hasRun ? "AI Optimize" : "Run your code first to enable AI Optimize"}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-yellow-400 bg-yellow-400/10 hover:bg-yellow-400/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-yellow-400/10"
            >
              <Zap className="h-3.5 w-3.5" />
              Optimize
            </button>

            {/* Review */}
            <button
              onClick={() => handleAI("review")}
              disabled={!hasRun}
              title={hasRun ? "AI Review" : "Run your code first to enable AI Review"}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-indigo-400 bg-indigo-400/10 hover:bg-indigo-400/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-indigo-400/10"
            >
              <Eye className="h-3.5 w-3.5" />
              Review
            </button>

            <div className="w-px h-5 bg-border mx-1" />

            {/* AI Chat toggle */}
            <button
              onClick={() => setChatOpen((v) => !v)}
              title="Toggle AI Chat"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                chatOpen ? "bg-purple-500/20 text-purple-400" : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <MessageSquare className="h-3.5 w-3.5" />
              AI Chat
            </button>

            <div className="w-px h-5 bg-border mx-1" />
          </div>

          {/* Right side: auto-saved + run counter */}
          <div className="flex items-center gap-2">
            {autoSaved && (
              <span className="flex items-center gap-1 text-xs text-green-400 font-medium animate-pulse">
                <Save className="h-3 w-3" />
                Auto-saved
              </span>
            )}
            {runCount > 0 && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                <Play className="h-3 w-3" />
                {runCount} run{runCount !== 1 ? "s" : ""}
              </div>
            )}
          </div>
        </div>

        {/* ── Editor + AI Chat side by side ── */}
        <div className="flex flex-1 min-h-0">

          {/* Code editor */}
          <div className="flex-1 overflow-hidden min-w-0">
            <CodeEditor
              language="java"
              value={code}
              onChange={(val) => {
                setCode(val);
                setNeedsInput(false);
              }}
            />
          </div>

          {/* AI panel — floating resizable popup, same as Dashboard */}
          {aiPanelVisible && (
            <AIChatPanel
              isOpen={true}
              onClose={() => {
                setChatOpen(false);
                setAiPanel((prev) => ({ ...prev, open: false, autoAttachCode: false }));
              }}
              code={code}
              problemTitle={problem.title}
              errors={errorsForChat}
              aiPanelTitle={aiPanel.open ? aiPanel.title : undefined}
              aiPanelContent={aiPanel.open ? aiPanel.content : undefined}
              aiPanelLoading={aiPanel.open ? aiPanel.loading : undefined}
              autoAttachCode={aiPanel.autoAttachCode}
            />
          )}
        </div>

        {/* ── VERTICAL RESIZE HANDLE ── */}
        <div
          className="h-1.5 bg-border hover:bg-primary/60 cursor-row-resize shrink-0 transition-colors"
          style={{ userSelect: "none" }}
          onMouseDown={(e) => { e.preventDefault(); isResizingBottomRef.current = true; }}
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
                {needsInput && (
                  <p className="text-yellow-300 text-xs font-semibold mb-2 animate-pulse">
                    ⚠ This program reads from stdin — enter your input below, then click Run.
                  </p>
                )}

                <div className="text-green-400 mb-1 font-semibold">Enter Input</div>
                <textarea
                  ref={inputRef}
                  value={stdin}
                  onChange={(e) => {
                    setStdin(e.target.value);
                    if (needsInput) setNeedsInput(false);
                    if (output || error) setInputChanged(true);
                  }}
                  placeholder="Type your stdin here…"
                  className={`w-full bg-black/60 text-white p-2 mb-1 rounded border resize-none text-xs transition-colors ${
                    needsInput ? "border-yellow-400 ring-1 ring-yellow-400/50" : "border-border"
                  }`}
                  rows={3}
                />

                {inputChanged ? (
                  <p className="text-yellow-400 text-xs mb-3">
                    ⚠ Input changed — click Run again to see updated output.
                  </p>
                ) : (
                  <div className="mb-3" />
                )}

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