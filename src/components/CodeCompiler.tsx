// src/components/CodeCompiler.tsx

import { useState, useEffect } from "react";
import { Play, RotateCcw } from "lucide-react";
import CodeEditor from "./CodeEditor";
import { runCode, languageIds } from "@/api/compiler";
import { toast } from "sonner";

type Language =
  | "java"
  | "python"
  | "cpp"
  | "c"
  | "javascript"
  | "typescript"
  | "go"
  | "rust";

const languageOptions = [
  { value: "java", label: "Java" },
  { value: "python", label: "Python" },
  { value: "cpp", label: "C++" },
  { value: "c", label: "C" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
];

const defaultCode: Record<Language, string> = {
  java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
  python: `print("Hello, World!")`,
  cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
  c: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
  javascript: `console.log("Hello, World!");`,
  typescript: `console.log("Hello, World!");`,
  go: `package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
}`,
  rust: `fn main() {
    println!("Hello, World!");
}`,
};

export default function CodeCompiler() {
  const [language, setLanguage] = useState<Language>("java");
  const [code, setCode] = useState(defaultCode.java);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  // ⭐ CTRL + ENTER RUN SHORTCUT
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "Enter" && !isRunning) {
        handleRun();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [code, language, input, isRunning]);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setCode(defaultCode[lang]);
    setOutput("");
  };

  // ⭐ PROFESSIONAL RUN FUNCTION
  const handleRun = async () => {
    if (!code.trim()) {
      toast.error("Code cannot be empty");
      return;
    }

    setIsRunning(true);
    setOutput("🚀 Executing your code...\n");

    const start = performance.now();

    try {
      const result = await runCode(code, languageIds[language], input);

      const end = performance.now();
      const execTime = ((end - start) / 1000).toFixed(2);

      if (result.stderr) {
        setOutput(`❌ Runtime Error:\n${result.stderr}`);
        toast.error("Runtime Error");
      } else if (result.compile_output) {
        setOutput(`🔧 Compilation Error:\n${result.compile_output}`);
        toast.error("Compilation Failed");
      } else {
        setOutput(
          `✅ Output:\n${result.stdout || "No Output"}\n\n⏱ Execution Time: ${execTime}s`
        );
        toast.success("Execution Successful");
      }
    } catch (error) {
      setOutput("❌ Unable to connect to compiler server");
      toast.error("Server Error");
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setCode(defaultCode[language]);
    setInput("");
    setOutput("");
    toast.success("Code Reset");
  };

  return (
    <div className="flex flex-col h-[520px] border border-border rounded-lg overflow-hidden">
      {/* ⭐ TOOLBAR */}
      <div className="flex items-center justify-between p-3 border-b border-border bg-surface">
        <div className="flex items-center gap-2">
          <select
            value={language}
            onChange={(e) =>
              handleLanguageChange(e.target.value as Language)
            }
            className="bg-background border border-border rounded-md px-3 py-1.5 text-sm"
          >
            {languageOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-secondary rounded-md"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </button>
        </div>

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

      {/* ⭐ EDITOR */}
      <div className="flex-1 min-h-0">
        <CodeEditor
          language={language}
          value={code}
          onChange={setCode}
          readOnly={isRunning}
        />
      </div>

      {/* ⭐ INPUT OUTPUT PANEL */}
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