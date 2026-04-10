// src/components/CodeCompiler.tsx
import { useRef, useState, useEffect } from "react";
import CodeEditor from "./CodeEditor";
import { runCode, languageIds } from "@/api/compiler";
import { parseJavaError } from "@/utils/parseJavaError";
import { toast } from "sonner";
import { Bot, Play, Loader2, RotateCcw } from "lucide-react";

type CodeCompilerProps = {
  onCodeChange?: (code: string, lang: string) => void;
  onToggleAI?: () => void;
  onErrorChange?: (error: string) => void;
  userEmail?: string;
};

const defaultCode = `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World");
    }
}`;

function codeNeedsInput(src: string): boolean {
  return (
    /Scanner\s*\(/.test(src) ||
    /BufferedReader\s*\(/.test(src) ||
    /System\.in/.test(src) ||
    /Console\s*\(/.test(src) ||
    /DataInputStream\s*\(/.test(src)
  );
}

export default function CodeCompiler({
  onCodeChange,
  onToggleAI,
  onErrorChange,
  userEmail,
}: CodeCompilerProps) {
  const containerRef      = useRef<HTMLDivElement>(null);
  const isResizingHRef    = useRef(false); // horizontal split (editor ↔ right panel)
  const isResizingVRef    = useRef(false); // vertical split (input ↔ output)
  const abortRef          = useRef<AbortController | null>(null);
  const inputRef          = useRef<HTMLTextAreaElement>(null);

  const [code, setCode]                   = useState(defaultCode);
  const [input, setInput]                 = useState("");
  const [output, setOutput]               = useState("");
  const [error, setError]                 = useState("");
  const [isRunning, setIsRunning]         = useState(false);
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [inputChanged, setInputChanged]   = useState(false);
  const [needsInput, setNeedsInput]       = useState(false);

  // ── Layout state ────────────────────────────────────────────────────────────
  // editorWidthPct: percentage of total width given to the code editor (left half)
  // inputHeightPct: percentage of right-panel height given to the input section
  const [editorWidthPct, setEditorWidthPct] = useState(60);
  const [inputHeightPct, setInputHeightPct] = useState(40);

  // Notify parent of initial code
  useEffect(() => {
    onCodeChange?.(defaultCode, "java");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => { onErrorChange?.(error); }, [error]);

  useEffect(() => {
    if (needsInput) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [needsInput]);

  // ── Mouse-move handler for BOTH resize bars ──────────────────────────────
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      if (isResizingHRef.current) {
        // Horizontal: editor width as % of total container width
        const pct = ((e.clientX - rect.left) / rect.width) * 100;
        if (pct > 20 && pct < 80) setEditorWidthPct(pct);
      }

      if (isResizingVRef.current) {
        // Vertical: input height as % of right-panel height
        // right panel starts at editorWidthPct% of total width
        const rightPanelTop = rect.top;
        const rightPanelH   = rect.height;
        const pct = ((e.clientY - rightPanelTop) / rightPanelH) * 100;
        if (pct > 15 && pct < 85) setInputHeightPct(pct);
      }
    };
    const handleMouseUp = () => {
      isResizingHRef.current = false;
      isResizingVRef.current = false;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup",  handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup",  handleMouseUp);
    };
  }, []);

  const handleRun = async () => {
    if (!code.trim()) return;
    if (codeNeedsInput(code) && !input.trim()) {
      setNeedsInput(true);
      toast.info("This program reads input — please enter your input and click Run again.");
      return;
    }
    abortRef.current?.abort();
    abortRef.current = new AbortController();
    setIsRunning(true);
    setNeedsInput(false);
    setOutput("");
    setError("");
    setExecutionTime(null);
    setInputChanged(false);
    const start = performance.now();
    try {
      const result  = await runCode(code, languageIds["java"], input);
      const elapsed = (performance.now() - start) / 1000;
      setExecutionTime(elapsed);
      const rawError = result.stderr || result.compile_output || "";
      if (rawError && rawError.trim() !== "") {
        setError(parseJavaError(rawError));
      } else {
        setOutput(result.stdout || "No Output");
      }
    } catch {
      setError("⚠️ Could not connect to the compiler. Make sure the backend is running.");
    } finally {
      setIsRunning(false);
    }
  };

  const handleRefresh = () => {
    abortRef.current?.abort();
    abortRef.current = null;
    setIsRunning(false);
    setOutput("");
    setError("");
    setExecutionTime(null);
    setInputChanged(false);
    setNeedsInput(false);
    toast.info("Execution reset. Ready to run again.");
  };

  return (
    <div
      ref={containerRef}
      className="flex h-full select-none overflow-hidden"
      style={{ cursor: isResizingHRef.current ? "col-resize" : "default" }}
    >
      {/* ══════════════ LEFT — Code Editor ══════════════ */}
      <div
        className="flex flex-col h-full overflow-hidden"
        style={{ width: `${editorWidthPct}%`, minWidth: 0 }}
      >
        {/* Toolbar */}
        <div className="flex justify-between items-center px-4 py-2 border-b bg-card shrink-0">
          <span className="text-sm font-semibold tracking-wide">Java</span>
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleAI}
              title="Toggle AI Assistant"
              className="flex items-center justify-center w-8 h-8 rounded-md text-purple-500 hover:bg-purple-500/10 transition-colors"
            >
              <Bot className="h-5 w-5" />
            </button>
            <button
              onClick={handleRefresh}
              title="Reset output"
              className="flex items-center justify-center w-8 h-8 rounded-md text-blue-400 hover:bg-blue-400/10 transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
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

        {/* Monaco editor fills remaining height */}
        <div className="flex-1 overflow-hidden">
          <CodeEditor
            language="java"
            value={code}
            onChange={(val) => {
              setCode(val);
              setNeedsInput(false);
              onCodeChange?.(val, "java");
            }}
          />
        </div>
      </div>

      {/* ══════════════ HORIZONTAL RESIZE HANDLE ══════════════ */}
      <div
        className="w-1.5 bg-border hover:bg-primary/60 cursor-col-resize shrink-0 transition-colors"
        onMouseDown={(e) => { e.preventDefault(); isResizingHRef.current = true; }}
      />

      {/* ══════════════ RIGHT — Input (top) + Output (bottom) ══════════════ */}
      <div
        className="flex flex-col h-full overflow-hidden bg-card"
        style={{ flex: 1, minWidth: 0 }}
      >
        {/* ── TOP: Input section ── */}
        <div
          className="flex flex-col overflow-hidden border-b border-border"
          style={{ height: `${inputHeightPct}%`, minHeight: 0 }}
        >
          {/* Input header */}
          <div className="flex items-center justify-between px-3 py-2 border-b bg-card shrink-0">
            <span className="text-xs font-semibold text-green-400">Input (stdin)</span>
            {needsInput && (
              <span className="text-xs text-yellow-400 font-semibold animate-pulse">
                ⚠ Enter input then click Run
              </span>
            )}
          </div>

          {/* Input textarea */}
          <div className="flex-1 overflow-hidden p-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                if (needsInput) setNeedsInput(false);
                if (output || error) setInputChanged(true);
              }}
              placeholder="Type your input here…"
              className={`w-full h-full bg-black/50 text-white p-2 rounded border resize-none text-xs font-mono transition-colors outline-none ${
                needsInput
                  ? "border-yellow-400 ring-1 ring-yellow-400/50"
                  : "border-border focus:border-primary/50"
              }`}
            />
          </div>

          {inputChanged && (
            <p className="text-yellow-400 text-xs px-3 pb-2 shrink-0">
              ⚠ Input changed — click Run again to see updated output.
            </p>
          )}
        </div>

        {/* ══════════════ VERTICAL RESIZE HANDLE ══════════════ */}
        <div
          className="h-1.5 bg-border hover:bg-primary/60 cursor-row-resize shrink-0 transition-colors"
          onMouseDown={(e) => { e.preventDefault(); isResizingVRef.current = true; }}
        />

        {/* ── BOTTOM: Output / Errors section ── */}
        <div
          className="flex flex-col overflow-hidden"
          style={{ flex: 1, minHeight: 0 }}
        >
          {/* Output header */}
          <div className="flex items-center justify-between px-3 py-2 border-b bg-card shrink-0">
            <span className="text-xs font-semibold text-blue-400">Output</span>
            {executionTime !== null && (
              <span className="text-xs text-green-500 font-mono">
                ⏱ {executionTime.toFixed(3)}s
              </span>
            )}
          </div>

          {/* Output content */}
          <div className="flex-1 overflow-auto p-3 font-mono text-xs">
            {isRunning ? (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="h-3 w-3 animate-spin" />
                Running…
              </div>
            ) : error ? (
              <pre
                className="text-red-400 whitespace-pre-wrap select-text cursor-text"
                style={{ userSelect: "text", WebkitUserSelect: "text" }}
              >
                {error}
              </pre>
            ) : output ? (
              <pre
                className="text-foreground whitespace-pre-wrap select-text cursor-text"
                style={{ userSelect: "text", WebkitUserSelect: "text" }}
              >
                {output}
              </pre>
            ) : (
              <span className="text-muted-foreground">
                Run your code to see output here.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}