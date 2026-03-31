import { useRef, useState, useEffect } from "react";
import CodeEditor from "./CodeEditor";
import { runCode, languageIds } from "@/api/compiler";
import { toast } from "sonner";

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

  const [bottomHeight, setBottomHeight] = useState(200);
  const [isResizing, setIsResizing] = useState(false);

  // 🔥 GLOBAL RESIZE FIX
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const newHeight = rect.bottom - e.clientY;

      if (newHeight > 120 && newHeight < rect.height * 0.7) {
        setBottomHeight(newHeight);
      }
    };

    const handleMouseUp = () => setIsResizing(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  // RUN
  const handleRun = async () => {
    if (!code.trim()) return;

    setIsRunning(true);
    setOutput("");
    setError("");

    const start = performance.now();

    try {
      const result = await runCode(code, languageIds["java"], input);

      const end = performance.now();
      setExecutionTime((end - start) / 1000);

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

  const handleReset = () => {
    setCode(defaultCode);
    setInput("");
    setOutput("");
    setError("");
    setExecutionTime(null);
    onCodeChange?.(defaultCode, "java");
  };

  return (
    <div ref={containerRef} className="flex flex-col h-full">

      {/* 🔝 TOOLBAR */}
      <div className="flex justify-between items-center p-3 border-b bg-surface">

        <span className="text-sm font-medium">Java</span>

        <div className="flex gap-3">

          {/* 🤖 AI */}
          <button onClick={onToggleAI} className="text-purple-500 text-lg">
            <i className="bi bi-robot"></i>
          </button>

          {/* 🔄 RESET */}
          <button onClick={handleReset} className="text-yellow-500 text-lg">
            <i className="bi bi-arrow-clockwise"></i>
          </button>

          {/* ▶ RUN */}
          <button onClick={handleRun} className="text-green-500 text-lg">
            <i className={`bi ${isRunning ? "bi-hourglass-split" : "bi-play-fill"}`}></i>
          </button>

        </div>
      </div>

      {/* 🧠 EDITOR */}
      <div className="flex-1">
        <CodeEditor
          language="java"
          value={code}
          onChange={(val) => {
            setCode(val);
            onCodeChange?.(val, "java");
          }}
        />
      </div>

      {/* 🔻 RESIZER */}
      <div
        className="h-1 bg-border hover:bg-primary cursor-row-resize"
        onMouseDown={() => setIsResizing(true)}
      />

      {/* 💻 TERMINAL */}
      <div style={{ height: bottomHeight }} className="flex flex-col border-t">

        {/* TABS */}
        <div className="flex text-xs border-b">
          <button onClick={() => setActiveTab("terminal")} className="px-3 py-2">Terminal</button>
          <button onClick={() => setActiveTab("errors")} className="px-3 py-2 text-red-500">Errors</button>

          <div className="ml-auto px-3 py-2 text-green-500">
            {executionTime && `⏱ ${executionTime.toFixed(3)}s`}
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 p-2 font-mono text-xs overflow-auto">

          {activeTab === "terminal" && (
            <>
              <div className="text-green-400">$ Input</div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full bg-black text-white p-2 mb-2"
              />

              <div className="text-green-400">$ Output</div>
              <pre>{output}</pre>
            </>
          )}

          {activeTab === "errors" && (
            <pre className="text-red-500">{error}</pre>
          )}

        </div>
      </div>
    </div>
  );
}