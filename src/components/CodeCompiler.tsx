// src/components/CodeCompiler.tsx

import { useRef, useState, useEffect } from "react";
import { Play, RotateCcw } from "lucide-react";
import CodeEditor from "./CodeEditor";
import { runCode, languageIds } from "@/api/compiler";
import { toast } from "sonner";

type Language = "java";

type CodeCompilerProps = {
  onCodeChange?: (code: string, lang: string) => void;
};

const defaultCode = `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`;

export default function CodeCompiler({ onCodeChange }: CodeCompilerProps) {
  const language: Language = "java";

  const containerRef = useRef<HTMLDivElement>(null);

  const [code, setCode] = useState(defaultCode);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const [activeTab, setActiveTab] = useState<"terminal" | "errors" | "problems">("terminal");

  const [isRunning, setIsRunning] = useState(false);
  const [executionTime, setExecutionTime] = useState<number | null>(null);

  const [bottomHeight, setBottomHeight] = useState(200);
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
  }, [code, input, isRunning]);

  // RUN
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
      const result = await runCode(code, languageIds["java"], input);

      const end = performance.now();
      setExecutionTime((end - start) / 1000);

      if (result.stderr) {
        setError(result.stderr);
        setActiveTab("errors");
        toast.error("Runtime Error");
      } else if (result.compile_output) {
        setError(result.compile_output);
        setActiveTab("errors");
        toast.error("Compilation Failed");
      } else {
        setOutput(result.stdout || "No Output");
        setActiveTab("terminal");
        toast.success("Execution Successful");
      }

    } catch {
      setError("Unable to connect to compiler server");
      setActiveTab("errors");
      toast.error("Server Error");
    } finally {
      setIsRunning(false);
    }
  };

  // RESET
  const handleReset = () => {
    setCode(defaultCode);
    setInput("");
    setOutput("");
    setError("");
    setExecutionTime(null);

    onCodeChange?.(defaultCode, language);
    toast.success("Code Reset");
  };

  // RESIZE
  const startResize = () => setIsResizing(true);
  const stopResize = () => setIsResizing(false);

  const handleResize = (e: any) => {
    if (isResizing && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const newHeight = rect.bottom - e.clientY;

      const min = 120;
      const max = rect.height * 0.6;

      if (newHeight > min && newHeight < max) {
        setBottomHeight(newHeight);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col h-full border border-border rounded-lg overflow-hidden"
      onMouseMove={handleResize}
      onMouseUp={stopResize}
    >

      {/* TOOLBAR */}
      <div className="flex items-center justify-between p-3 border-b border-border bg-surface">
        <div className="text-sm font-medium">Java</div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-secondary rounded-md"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </button>

          <button
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-1.5 px-4 py-1.5 text-sm rounded-md ${
              isRunning
                ? "bg-primary/60 cursor-not-allowed"
                : "bg-primary hover:opacity-90"
            }`}
          >
            <Play className="h-3.5 w-3.5" />
            {isRunning ? "Executing..." : "Run Code"}
          </button>
        </div>
      </div>

      {/* EDITOR */}
      <div className="flex-1 min-h-0">
        <CodeEditor
          language="java"
          value={code}
          onChange={(newCode: string) => {
            setCode(newCode);
            onCodeChange?.(newCode, "java");
          }}
          readOnly={isRunning}
        />
      </div>

      {/* RESIZER */}
      <div
        className="h-1 cursor-row-resize bg-border hover:bg-primary"
        onMouseDown={startResize}
      />

      {/* TERMINAL PANEL */}
      <div
        style={{ height: bottomHeight }}
        className="bg-background border-t border-border flex flex-col"
      >
        {/* TABS */}
        <div className="flex border-b border-border text-xs">
          {["terminal", "errors", "problems"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-2 ${
                activeTab === tab ? "bg-surface font-semibold" : ""
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}

          <div className="ml-auto px-4 py-2 text-green-500 text-xs">
            {executionTime !== null && `⏱ ${executionTime.toFixed(3)}s`}
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* INPUT */}
          <div className="w-1/2 border-r border-border p-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-full bg-surface border border-border rounded p-2 text-xs font-mono"
            />
          </div>

          {/* OUTPUT */}
          <div className="w-1/2 p-3 overflow-auto">
            {activeTab === "terminal" && <pre>{output}</pre>}
            {activeTab === "errors" && <pre className="text-red-500">{error}</pre>}
            {activeTab === "problems" && <p>Problem viewer here</p>}
          </div>

        </div>
      </div>
    </div>
  );
}