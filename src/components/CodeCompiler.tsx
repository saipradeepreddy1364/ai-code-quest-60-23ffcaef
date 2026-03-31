// src/components/CodeCompiler.tsx

import { useRef, useState, useEffect } from "react";
import { Play, RotateCcw } from "lucide-react";
import CodeEditor from "./CodeEditor";
import { runCode, languageIds } from "@/api/compiler";
import { toast } from "sonner";

type Language = "java";

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
  const [terminalInput, setTerminalInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const [activeTab, setActiveTab] = useState<"terminal" | "errors">("terminal");

  const [isRunning, setIsRunning] = useState(false);
  const [executionTime, setExecutionTime] = useState<number | null>(null);

  const [bottomHeight, setBottomHeight] = useState(180);
  const [isResizing, setIsResizing] = useState(false);

  // CTRL + ENTER
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "Enter" && !isRunning) {
        handleRun();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [code, terminalInput, isRunning]);

  const handleRun = async () => {
    if (!code.trim()) {
      toast.error("Code cannot be empty");
      return;
    }

    setIsRunning(true);
    setOutput("");
    setError("");
    setExecutionTime(null);

    const start = performance.now();

    try {
      const result = await runCode(code, languageIds["java"], terminalInput);

      const end = performance.now();
      setExecutionTime((end - start) / 1000);

      if (result.stderr) {
        setError(result.stderr);
        setActiveTab("errors");
      } else if (result.compile_output) {
        setError(result.compile_output);
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
    setTerminalInput("");
    setOutput("");
    setError("");
    setExecutionTime(null);
    onCodeChange?.(defaultCode, "java");
  };

  const handleResize = (e: any) => {
    if (isResizing && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const newHeight = rect.bottom - e.clientY;

      if (newHeight > 120 && newHeight < rect.height * 0.6) {
        setBottomHeight(newHeight);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col h-full"
      onMouseMove={handleResize}
      onMouseUp={() => setIsResizing(false)}
    >

      {/* TOOLBAR */}
      <div className="flex justify-between p-3 border-b bg-surface">
        <div>Java</div>

        <div className="flex gap-2">

          {/* AI BUTTON */}
          <button
            onClick={onToggleAI}
            className="px-3 py-1 bg-purple-600 text-white rounded"
          >
            AI
          </button>

          <button onClick={handleReset} className="px-3 py-1 bg-gray-500 text-white rounded">
            Reset
          </button>

          <button onClick={handleRun} className="px-3 py-1 bg-green-600 text-white rounded">
            {isRunning ? "Running..." : "Run"}
          </button>

        </div>
      </div>

      {/* EDITOR */}
      <div className="flex-1">
        <CodeEditor
          language="java"
          value={code}
          onChange={(c) => {
            setCode(c);
            onCodeChange?.(c, "java");
          }}
        />
      </div>

      {/* RESIZER */}
      <div className="h-1 bg-border cursor-row-resize" onMouseDown={() => setIsResizing(true)} />

      {/* TERMINAL */}
      <div style={{ height: bottomHeight }} className="border-t flex flex-col">

        {/* TABS */}
        <div className="flex text-xs border-b">
          <button onClick={() => setActiveTab("terminal")} className="px-3 py-2">Terminal</button>
          <button onClick={() => setActiveTab("errors")} className="px-3 py-2 text-red-500">Errors</button>

          <div className="ml-auto px-3 py-2 text-green-500">
            {executionTime && `⏱ ${executionTime.toFixed(3)}s`}
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 p-2 text-xs font-mono overflow-auto">

          {activeTab === "terminal" && (
            <>
              <div className="mb-2 text-green-400">$ Input:</div>
              <textarea
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                className="w-full bg-black text-white p-2 mb-2"
              />

              <div className="text-green-400">$ Output:</div>
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