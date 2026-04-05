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

/**
 * Returns true if the Java source code contains any standard input reading
 * constructs — Scanner, BufferedReader, System.in, Console, or DataInputStream.
 * Used to decide whether to prompt the user to provide stdin before running.
 */
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
  const containerRef  = useRef<HTMLDivElement>(null);
  const isResizingRef = useRef(false);
  const abortRef      = useRef<AbortController | null>(null);
  // Ref for the stdin textarea so we can auto-focus it when input is needed
  const inputRef      = useRef<HTMLTextAreaElement>(null);

  const [code, setCode]                   = useState(defaultCode);
  const [input, setInput]                 = useState("");
  const [output, setOutput]               = useState("");
  const [error, setError]                 = useState("");
  const [activeTab, setActiveTab]         = useState<"terminal" | "errors">("terminal");
  const [isRunning, setIsRunning]         = useState(false);
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [inputChanged, setInputChanged]   = useState(false);
  const [bottomHeight, setBottomHeight]   = useState(200);
  // True when a successful (no-error) compile detected that stdin is required
  // but the user hasn't provided any yet — prompts them to fill the input box.
  const [needsInput, setNeedsInput]       = useState(false);

  // Notify parent of the initial default code on mount so Dashboard always
  // has the current code even before the user makes any edits.
  useEffect(() => {
    onCodeChange?.(defaultCode, "java");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Notify parent whenever the error state changes so Dashboard can pass it
  // down to AIChatPanel as the `errors` prop.
  useEffect(() => {
    onErrorChange?.(error);
  }, [error]);

  // When needsInput becomes true, switch to terminal tab and focus the textarea
  useEffect(() => {
    if (needsInput) {
      setActiveTab("terminal");
      // Small timeout so the tab switch renders before we try to focus
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [needsInput]);

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
    const handleMouseUp = () => {
      isResizingRef.current = false;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleRun = async () => {
    if (!code.trim()) return;

    // If the code needs input and the user hasn't provided any yet,
    // prompt them to fill in the input textarea instead of running immediately.
    if (codeNeedsInput(code) && !input.trim()) {
      setNeedsInput(true);
      toast.info("This program reads input — please enter your input below and click Run again.");
      return;
    }

    // Cancel any previous in-flight request
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
      const result = await runCode(code, languageIds["java"], input);
      const elapsed = (performance.now() - start) / 1000;
      setExecutionTime(elapsed);

      const rawError = result.stderr || result.compile_output || "";
      if (rawError && rawError.trim() !== "") {
        // Parse raw Java error into a friendly message
        const parsedError = parseJavaError(rawError);
        setError(parsedError);
        // Always route errors to the Errors tab — never show them in Terminal
        setActiveTab("errors");
      } else {
        // Successful run — show output in Terminal tab only
        setOutput(result.stdout || "No Output");
        setActiveTab("terminal");
      }
    } catch {
      const fallbackError =
        "⚠️ Could not connect to the compiler. Make sure the backend is running.";
      setError(fallbackError);
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
    setNeedsInput(false);
    setActiveTab("terminal");
    toast.info("Execution reset. Ready to run again.");
  };

  return (
    <div ref={containerRef} className="flex flex-col h-full select-none">

      {/* TOOLBAR */}
      <div className="flex justify-between items-center px-4 py-2 border-b bg-card shrink-0">
        <span className="text-sm font-semibold tracking-wide">Java</span>

        <div className="flex items-center gap-2">

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
            {isRunning ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Play className="h-5 w-5" />
            )}
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
            // Clear the needsInput prompt whenever the user edits code so a
            // fresh run-check happens on the next click.
            setNeedsInput(false);
            onCodeChange?.(val, "java");
          }}
        />
      </div>

      {/* RESIZE HANDLE */}
      <div
        className="h-1.5 bg-border hover:bg-primary/60 cursor-row-resize shrink-0 transition-colors"
        onMouseDown={(e) => {
          e.preventDefault();
          isResizingRef.current = true;
        }}
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

          {/* Execution time badge — shown in the tab bar on both tabs */}
          {executionTime !== null && (
            <span className="ml-auto mr-3 text-xs text-green-500 font-mono">
              ⏱ {executionTime.toFixed(3)}s
            </span>
          )}
        </div>

        <div className="flex-1 p-3 font-mono text-xs overflow-auto">
          {activeTab === "terminal" && (
            <>
              {/* Prompt banner when stdin is required but not yet provided */}
              {needsInput && (
                <p className="text-yellow-300 text-xs font-semibold mb-2 animate-pulse">
                  ⚠ This program reads from stdin — enter your input below, then click Run.
                </p>
              )}

              {/* Input section */}
              <div className="text-green-400 mb-1 font-semibold">Enter Input</div>
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  // Clear the needsInput prompt as soon as the user starts typing
                  if (needsInput) setNeedsInput(false);
                  if (output || error) setInputChanged(true);
                }}
                placeholder="Type your input here…"
                className={`w-full bg-black/60 text-white p-2 mb-1 rounded border resize-none text-xs transition-colors ${
                  needsInput
                    ? "border-yellow-400 ring-1 ring-yellow-400/50"
                    : "border-border"
                }`}
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
              {/* select-text allows user to highlight and copy output */}
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
            </>
          )}

          {activeTab === "errors" && (
            /* select-text allows user to highlight and copy error messages */
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