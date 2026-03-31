// src/components/CodeCompiler.tsx
import { useRef, useState, useEffect } from "react";
import CodeEditor from "./CodeEditor";
import { runCode, languageIds } from "@/api/compiler";
import { toast } from "sonner";
import { Bot, Trophy, Play, Loader2, Save } from "lucide-react";

type CodeCompilerProps = {
  onCodeChange?: (code: string, lang: string) => void;
  onToggleAI?: () => void;
  userEmail?: string;
};

const defaultCode = `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`;

export default function CodeCompiler({ onCodeChange, onToggleAI, userEmail }: CodeCompilerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isResizingRef = useRef(false);

  const [code, setCode] = useState(defaultCode);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"terminal" | "errors">("terminal");
  const [isRunning, setIsRunning] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [bestTime, setBestTime] = useState<number | null>(null);
  const [showBestBadge, setShowBestBadge] = useState(false);
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
    setIsRunning(true);
    setOutput("");
    setError("");
    const start = performance.now();
    try {
      const result = await runCode(code, languageIds["java"], input);
      const elapsed = (performance.now() - start) / 1000;
      setExecutionTime(elapsed);

      const isNewBest = bestTime === null || elapsed < bestTime;
      if (isNewBest) {
        setBestTime(elapsed);
        setShowBestBadge(true);
        setTimeout(() => setShowBestBadge(false), 3000);
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

  // ✅ Save progress — now lives inside compiler toolbar, not the dashboard header
  const handleSave = async () => {
    if (!code.trim()) { toast.error("Nothing to save!"); return; }
    setIsSaving(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/code/save`, {
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

      {/* TERMINAL */}
      <div
        style={{ height: bottomHeight }}
        className="flex flex-col border-t bg-card shrink-0 overflow-hidden"
      >
        <div className="flex items-center text-xs border-b shrink-0">
          <button
            onClick={() => setActiveTab("terminal")}
            className={`px-4 py-2 transition-colors ${
              activeTab === "terminal" ? "border-b-2 border-primary text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Terminal
          </button>
          <button
            onClick={() => setActiveTab("errors")}
            className={`px-4 py-2 transition-colors ${
              activeTab === "errors" ? "border-b-2 border-red-500 text-red-500" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Errors
          </button>
          {executionTime !== null && (
            <div className="ml-auto px-3 py-2 text-xs text-green-500">
              ⏱ {executionTime.toFixed(3)}s
            </div>
          )}
        </div>

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