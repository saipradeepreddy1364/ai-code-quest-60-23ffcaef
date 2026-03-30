// src/components/CodeCompiler.tsx

import { useState, useEffect } from "react";
import { Play, RotateCcw } from "lucide-react";
import CodeEditor from "./CodeEditor";
import { runCode, languageIds } from "@/api/compiler";
import { toast } from "sonner";

// ✅ Only Java
type Language = "java";

// ✅ Props
type CodeCompilerProps = {
  onCodeChange?: (code: string, lang: string) => void;
};

// ✅ Default Java Code
const defaultCode = `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`;

export default function CodeCompiler({ onCodeChange }: CodeCompilerProps) {
  const language: Language = "java"; // 🔒 Fixed language
  const [code, setCode] = useState(defaultCode);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  // ⭐ CTRL + ENTER RUN
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "Enter" && !isRunning) {
        handleRun();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [code, input, isRunning]);

  // ⭐ RUN FUNCTION
  const handleRun = async () => {
    if (!code.trim()) {
      toast.error("Code cannot be empty");
      return;
    }

    setIsRunning(true);
    setOutput("Executing...");

    try {
      const result = await runCode(code, languageIds["java"], input);

      if (result.stderr) {
        setOutput(`Runtime Error:\n${result.stderr}`);
        toast.error("Runtime Error");
      } else if (result.compile_output) {
        setOutput(`Compilation Error:\n${result.compile_output}`);
        toast.error("Compilation Failed");
      } else {
        setOutput(result.stdout || "No Output");
        toast.success("Execution Successful");
      }
    } catch (error) {
      setOutput("Unable to connect to compiler server");
      toast.error("Server Error");
    } finally {
      setIsRunning(false);
    }
  };

  // ⭐ RESET
  const handleReset = () => {
    setCode(defaultCode);
    setInput("");
    setOutput("");

    onCodeChange?.(defaultCode, language);
    toast.success("Code Reset");
  };

  return (
    <div className="flex flex-col h-[520px] border border-border rounded-lg overflow-hidden">
      
      {/* ⭐ TOOLBAR */}
      <div className="flex items-center justify-between p-3 border-b border-border bg-surface">
        
        {/* ✅ Only label (no dropdown) */}
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

      {/* ⭐ EDITOR */}
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

      {/* ⭐ INPUT OUTPUT */}
      <div className="h-44 border-t border-border flex">
        <div className="w-1/2 border-r border-border p-3">
          <label className="text-xs font-semibold mb-2 block">INPUT</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-28 bg-surface border border-border rounded p-2 text-xs font-mono resize-none"
            placeholder="Enter program input..."
          />
        </div>

        <div className="w-1/2 p-3">
          <label className="text-xs font-semibold mb-2 block">OUTPUT</label>
          <pre className="w-full h-28 bg-surface border border-border rounded p-2 text-xs font-mono overflow-y-auto whitespace-pre-wrap">
            {output || "Run code to see output"}
          </pre>
        </div>
      </div>
    </div>
  );
}