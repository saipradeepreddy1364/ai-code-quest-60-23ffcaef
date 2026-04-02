// src/components/CodeCompiler.tsx
import { useRef, useState, useEffect } from "react";
import CodeEditor from "./CodeEditor";
import { runCode, languageIds } from "@/api/compiler";
import { parseJavaError } from "@/utils/parseJavaError";
import { toast } from "sonner";
import { Bot, Play, Loader2, Save, RotateCcw } from "lucide-react";

type CodeCompilerProps = {
  onCodeChange?: (code: string, lang: string) => void;
  onToggleAI?: () => void;
  userEmail?: string;
};

const defaultCode = `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World");
    }
}`;

export default function CodeCompiler({ onCodeChange, onToggleAI, userEmail }: CodeCompilerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isResizingRef = useRef(false);
  const abortRef = useRef<AbortController | null>(null);

  const [code, setCode] = useState(defaultCode);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"terminal" | "errors">("terminal");
  const [isRunning, setIsRunning] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [inputChanged, setInputChanged] = useState(false);
  const [bottomHeight, setBottomHeight] = useState(200);

  // Terminal resize via ref (stable listener, no stale closure)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizingRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const newHeight = rect.bottom - e.clientY;
      if (newHeight > 100 && newHeight < rect.height * 0.75) {
        setBottomHeight(newHeight);
      }
    };
    const handleMouseUp = () => { isResizingRef.current = false; };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleRun = async () => {
    if (!code.trim()) return;

    // Cancel any previous in-flight request
    abortRef.current?.abort();
    abortRef.current = new AbortController();

    setIsRunning(true);
    setOutput("");
    setError("");
    setExecutionTime(null);
    setInputChanged(false);

    const start = performance.now();
    try {
      const result = await runCode(code, languageIds["java"], input);
      const elapsed = (performance.now() - start) / 1000;
      setExecutionTime(elapsed);

      const rawError = result.stderr || result.compile_output || "";
      if (rawError && rawError.trim() !== "") {
        // ✅ parse raw Java error into friendly message
        setError(parseJavaError(rawError));
        setActiveTab("errors");
      } else {
        setOutput(result.stdout || "No Output");
        setActiveTab("terminal");
      }
    } catch {
      setError("⚠️ Could not connect to the compiler. Make sure the backend is running.");
      setActiveTab("errors");
    } finally {
      setIsRunning(false);
    }
  };

  // Refresh — stops execution and resets output/error state
  const handleRefresh = () => {
    abortRef.current?.abort();
    abortRef.current = null;
    setIsRunning(false);
    setOutput("");
    setError("");
    setExecutionTime(null);
    setInputChanged(false);
    setActiveTab("terminal");
    toast.info("Execution reset. Ready to run again.");
  };

  const handleSave = async () => {
    if (!code.trim()) { toast.error("Nothing to save!"); return; }
    setIsSaving(true);
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/codes/save`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail, code, language: "java" }),
      });
      if (!response.ok) throw new Error("Save failed");
      toast.success("Code saved successfully!");
    } catch {
      toast.error("Failed to save code.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div ref={containerRef} className="flex flex-col h-full select-none">

      {/* TOOLBAR */}
      <div className="flex justify-between items-center px-4 py-2 border-b bg-card shrink-0">
        <span className="text-sm font-semibold tracking-wide">Java</span>

        <div className="flex items-center gap-2">

          {/* Save */}
          <button
            onClick={handleSave}
            disabled={isSaving}
            title="Save code"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium bg-muted hover:bg-muted/80 transition-colors disabled:opacity-50"
          >
            <Save className="h-3.5 w-3.5" />
            {isSaving ? "Saving…" : "Save"}
          </button>

          {/* AI toggle */}
          <button
            onClick={onToggleAI}
            title="Toggle AI Assistant"
            className="flex items-center justify-center w-8 h-8 rounded-md text-purple-500 hover:bg-purple-500/10 transition-colors"
          >
            <Bot className="h-5 w-5" />
          </button>

          {/* Refresh — clears output and stops any pending run */}
          <button
            onClick={handleRefresh}
            title="Reset output"
            className="flex items-center justify-center w-8 h-8 rounded-md text-blue-400 hover:bg-blue-400/10 transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
          </button>

          {/* Run */}
          <button
            onClick={handleRun}
            disabled={isRunning}
            title="Run code"
            className="flex items-center justify-center w-8 h-8 rounded-md text-green-500 hover:bg-green-500/10 transition-colors disabled:opacity-50"
          >
            {isRunning ? <Loader2 className="h-5 w-5 animate-spin" /> : <Play className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* EDITOR */}
      <div className="flex-1 overflow-hidden">
        <CodeEditor
          language="java"
          value={code}
          onChange={(val) => {
            setCode(val);
            onCodeChange?.(val, "java");
          }}
        />
      </div>

      {/* RESIZE HANDLE */}
      <div
        className="h-1.5 bg-border hover:bg-primary/60 cursor-row-resize shrink-0 transition-colors"
        onMouseDown={(e) => { e.preventDefault(); isResizingRef.current = true; }}
      />

      {/* TERMINAL PANEL */}
      <div
        style={{ height: bottomHeight }}
        className="flex flex-col border-t bg-card shrink-0 overflow-hidden"
      >
        {/* Tab bar */}
        <div className="flex items-center text-xs border-b shrink-0">
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
              {/* Input section */}
              <div className="text-green-400 mb-1 font-semibold">Enter Input</div>
              <textarea
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  if (output || error) setInputChanged(true);
                }}
                placeholder="Type your input here…"
                className="w-full bg-black/60 text-white p-2 mb-1 rounded border border-border resize-none text-xs"
                rows={3}
              />

              {/* Warning shown when input changes after a run */}
              {inputChanged ? (
                <p className="text-yellow-400 text-xs mb-3">
                  ⚠ Input changed — click Run again to see updated output.
                </p>
              ) : (
                <div className="mb-3" />
              )}

              {/* Output section */}
              <div className="text-green-400 mb-1 font-semibold">Output</div>
              {/* ✅ select-text allows user to highlight and copy output */}
              <pre
                className="text-foreground whitespace-pre-wrap select-text cursor-text"
                style={{ userSelect: "text", WebkitUserSelect: "text" }}
              >
                {output}
              </pre>

              {/* Execution time shown below output */}
              {executionTime !== null && (
                <div className="mt-2 text-green-500 text-xs">
                  ⏱ Time taken: {executionTime.toFixed(3)}s
                </div>
              )}
            </>
          )}
          {activeTab === "errors" && (
            /* ✅ select-text allows user to highlight and copy error messages */
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
  );
}