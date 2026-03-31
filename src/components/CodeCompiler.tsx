// src/components/CodeCompiler.tsx
import { useRef, useState, useEffect } from "react";
import CodeEditor from "./CodeEditor";
import { runCode, languageIds } from "@/api/compiler";
import { toast } from "sonner";
import { Bot, Trophy, Play, Loader2 } from "lucide-react";

// ✅ Bootstrap Icons CDN required in index.html:
// <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">

type CodeCompilerProps = {
  onCodeChange?: (code: string, lang: string) => void;
  onToggleAI?: () => void;
};

const defaultCode = `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`;

export default function CodeCompiler({ onCodeChange, onToggleAI }: CodeCompilerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [code, setCode] = useState(defaultCode);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const [activeTab, setActiveTab] = useState<"terminal" | "errors">("terminal");

  const [isRunning, setIsRunning] = useState(false);
  const [executionTime, setExecutionTime] = useState<number | null>(null);

  // ── Best run tracking ───────────────────────────────────────────────────────
  const [bestTime, setBestTime] = useState<number | null>(null);
  const [showBestBadge, setShowBestBadge] = useState(false);

  // ── Terminal resize ─────────────────────────────────────────────────────────
  const [bottomHeight, setBottomHeight] = useState(200);
  const isResizingRef = useRef(false); // use ref so event listeners always see latest value

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizingRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const newHeight = rect.bottom - e.clientY;
      if (newHeight > 100 && newHeight < rect.height * 0.75) {
        setBottomHeight(newHeight);
      }
    };

    const handleMouseUp = () => {
      isResizingRef.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []); // runs once – stable because we use a ref

  // ── Run ─────────────────────────────────────────────────────────────────────
  const handleRun = async () => {
    if (!code.trim()) return;

    setIsRunning(true);
    setOutput("");
    setError("");

    const start = performance.now();

    try {
      const result = await runCode(code, languageIds["java"], input);
      const elapsed = (performance.now() - start) / 1000;
      setExecutionTime(elapsed);

      // Update best run
      const isNewBest = bestTime === null || elapsed < bestTime;
      if (isNewBest) {
        setBestTime(elapsed);
        setShowBestBadge(true);
        setTimeout(() => setShowBestBadge(false), 3000); // hide after 3 s
      }

      if (result.stderr || result.compile_output) {
        setError(result.stderr || result.compile_output);
        setActiveTab("errors");
      } else {
        setOutput(result.stdout || "No Output");
        setActiveTab("terminal");
      }
    } catch {
      setError("Server Error");
      setActiveTab("errors");
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div ref={containerRef} className="flex flex-col h-full select-none">

      {/* ── TOOLBAR ─────────────────────────────────────────────────────────── */}
      <div className="flex justify-between items-center px-4 py-2 border-b bg-card shrink-0">
        <span className="text-sm font-semibold tracking-wide">Java</span>

        <div className="flex items-center gap-3">

          {/* Best run badge */}
          {bestTime !== null && (
            <div
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-all duration-500 ${
                showBestBadge
                  ? "bg-yellow-400/20 text-yellow-400 ring-1 ring-yellow-400/50 scale-110"
                  : "bg-muted text-muted-foreground"
              }`}
              title="Your best run time"
            >
              <Trophy className="h-3 w-3" />
              {bestTime.toFixed(3)}s
            </div>
          )}

          {/* AI toggle — single icon only, no duplication */}
          <button
            onClick={onToggleAI}
            title="Toggle AI Assistant"
            className="flex items-center justify-center w-8 h-8 rounded-md text-purple-500 hover:bg-purple-500/10 transition-colors"
          >
            <Bot className="h-5 w-5" />
          </button>

          {/* Run */}
          <button
            onClick={handleRun}
            disabled={isRunning}
            title="Run code"
            className="flex items-center justify-center w-8 h-8 rounded-md text-green-500 hover:bg-green-500/10 transition-colors disabled:opacity-50"
          >
            {isRunning
              ? <Loader2 className="h-5 w-5 animate-spin" />
              : <Play className="h-5 w-5" />
            }
          </button>

        </div>
      </div>

      {/* ── EDITOR ──────────────────────────────────────────────────────────── */}
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

      {/* ── RESIZE HANDLE ───────────────────────────────────────────────────── */}
      <div
        className="h-1.5 bg-border hover:bg-primary/60 cursor-row-resize shrink-0 transition-colors"
        onMouseDown={(e) => {
          e.preventDefault();
          isResizingRef.current = true;
        }}
      />

      {/* ── TERMINAL PANEL ──────────────────────────────────────────────────── */}
      <div
        style={{ height: bottomHeight }}
        className="flex flex-col border-t bg-card shrink-0 overflow-hidden"
      >
        {/* Tabs */}
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

          {/* Execution time */}
          {executionTime !== null && (
            <div className="ml-auto px-3 py-2 text-xs text-green-500">
              ⏱ {executionTime.toFixed(3)}s
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 p-3 font-mono text-xs overflow-auto">

          {activeTab === "terminal" && (
            <>
              <div className="text-green-400 mb-1">$ stdin</div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter input here…"
                className="w-full bg-black/60 text-white p-2 mb-3 rounded border border-border resize-none text-xs"
                rows={3}
              />
              <div className="text-green-400 mb-1">$ stdout</div>
              <pre className="text-foreground whitespace-pre-wrap">{output}</pre>
            </>
          )}

          {activeTab === "errors" && (
            <pre className="text-red-400 whitespace-pre-wrap">{error || "No errors."}</pre>
          )}

        </div>
      </div>
    </div>
  );
}