import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Play, Upload, Save, Bug, Zap, Eye } from "lucide-react";
import { getProblemById } from "@/data/problems";
import CodeEditor from "@/components/CodeEditor";
import AIChatPanel from "@/components/AIChatPanel";
import { runCode, languageIds } from "@/api/compiler";
import { debugCode, optimizeCode, reviewCode } from "@/api/ai";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { parseJavaError } from "@/utils/parseJavaError"; // ✅ import the parser

export default function ProblemView() {
  const { id } = useParams<{ id: string }>();
  const problem = getProblemById(Number(id));
  const { user } = useAuth();

  // ✅ Only Java
  const language = "java";

  const [code, setCode] = useState(problem?.starter_code?.java || "");
  const [stdin, setStdin] = useState("");
  const [output, setOutput] = useState("");
  const [outputType, setOutputType] = useState<"success" | "error" | "">("");  // ✅ track output type
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiPanel, setAiPanel] = useState<{
    open: boolean;
    title: string;
    content: string;
    loading: boolean;
  }>({
    open: false,
    title: "",
    content: "",
    loading: false,
  });

  // ✅ Load saved code when problem opens
  useEffect(() => {
    const fetchSavedCode = async () => {
      if (!user || !problem) return;

      const { data, error } = await supabase
        .from("saved_codes")
        .select("code")
        .eq("user_id", user.id)
        .eq("problem_id", problem.id)
        .eq("language", language)
        .maybeSingle();

      if (error) {
        console.error("Error loading saved code:", error);
        return;
      }

      if (data?.code) {
        setCode(data.code);
      }
    };

    fetchSavedCode();
  }, [user, problem?.id]);

  if (!problem) {
    return <div className="p-6 text-muted-foreground">Problem not found.</div>;
  }

  const handleRun = async () => {
    setIsRunning(true);
    setOutput("");
    setOutputType("");
    try {
      const result = await runCode(code, languageIds["java"], stdin);

      const rawError = result.compile_output || result.stderr || "";
      const rawSuccess = result.stdout || "";

      if (rawError) {
        // ✅ Parse the error into a friendly message
        setOutput(parseJavaError(rawError));
        setOutputType("error");
      } else {
        setOutput(rawSuccess || "No output");
        setOutputType("success");
      }
    } catch {
      setOutput("⚠️ Error connecting to the code runner. Check your API configuration.");
      setOutputType("error");
    }
    setIsRunning(false);
  };

  const handleSubmit = async () => {
    if (!user) {
      toast.error("Login to submit");
      return;
    }
    setIsSubmitting(true);
    try {
      await supabase.from("user_progress").upsert(
        {
          user_id: user.id,
          problem_id: problem.id,
          status: "solved",
          language: "java",
        },
        { onConflict: "user_id,problem_id" }
      );
      toast.success("Solution submitted!");
    } catch {
      toast.error("Failed to submit");
    }
    setIsSubmitting(false);
  };

  const handleSave = async () => {
    if (!user) {
      toast.error("Login to save code");
      return;
    }
    try {
      const { error } = await supabase.from("saved_codes").upsert(
        {
          user_id: user.id,
          problem_id: problem.id,
          code,
          language,
        },
        { onConflict: "user_id,problem_id,language" }
      );
      if (error) throw error;
      toast.success("Code saved!");
    } catch (err) {
      console.error("Save error:", err);
      toast.error("Failed to save");
    }
  };

  const handleAI = async (type: "debug" | "optimize" | "review") => {
    const titles = {
      debug: "AI Debug",
      optimize: "AI Optimize",
      review: "AI Review",
    };

    setAiPanel({
      open: true,
      title: titles[type],
      content: "",
      loading: true,
    });

    try {
      const fns = {
        debug: debugCode,
        optimize: optimizeCode,
        review: reviewCode,
      };

      const result = await fns[type](code, problem.description, "java");

      setAiPanel((prev) => ({
        ...prev,
        content: result,
        loading: false,
      }));
    } catch {
      setAiPanel((prev) => ({
        ...prev,
        content: "Error connecting to AI service.",
        loading: false,
      }));
    }
  };

  return (
    <div className="flex h-[calc(100vh-3rem)]">
      {/* Left panel */}
      <div className="w-2/5 border-r border-border overflow-y-auto p-6 scrollbar-thin">
        <h1 className="text-xl font-semibold text-foreground mb-1">
          {problem.title}
        </h1>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm text-muted-foreground">
            {problem.difficulty}
          </span>
          <span className="text-sm text-muted-foreground">·</span>
          <span className="text-sm text-muted-foreground">
            {problem.category}
          </span>
        </div>

        <div className="flex flex-wrap gap-1 mb-6">
          {problem.company_tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 bg-secondary rounded text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="space-y-4 text-sm text-foreground leading-relaxed">
          <p>{problem.description}</p>

          <div>
            <h3 className="font-medium text-muted-foreground mb-1">
              Input Format
            </h3>
            <p>{problem.input_format}</p>
          </div>

          <div>
            <h3 className="font-medium text-muted-foreground mb-1">
              Output Format
            </h3>
            <p>{problem.output_format}</p>
          </div>

          <div>
            <h3 className="font-medium text-muted-foreground mb-1">
              Constraints
            </h3>
            <p className="font-mono text-xs">{problem.constraints}</p>
          </div>

          <div className="bg-surface rounded-md p-4 border border-border">
            <h3 className="font-medium text-muted-foreground mb-2">
              Sample Input
            </h3>
            <pre className="font-mono text-xs whitespace-pre-wrap">
              {problem.sample_input}
            </pre>
          </div>

          <div className="bg-surface rounded-md p-4 border border-border">
            <h3 className="font-medium text-muted-foreground mb-2">
              Sample Output
            </h3>
            <pre className="font-mono text-xs whitespace-pre-wrap">
              {problem.sample_output}
            </pre>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-surface flex-wrap gap-2">

          {/* ✅ Removed language dropdown */}

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleRun}
              disabled={isRunning}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded ${
                isRunning
                  ? "bg-primary/60 text-primary-foreground cursor-not-allowed"
                  : "bg-primary text-primary-foreground hover:opacity-90"
              }`}
            >
              <Play className="h-3.5 w-3.5" />
              {isRunning ? "Running" : "Run"}
            </button>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded"
            >
              <Upload className="h-3.5 w-3.5" />
              Submit
            </button>

            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-secondary rounded"
            >
              <Save className="h-3.5 w-3.5" />
              Save
            </button>

            <div className="w-px h-6 bg-border" />

            <button
              onClick={() => handleAI("debug")}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-muted rounded"
            >
              <Bug className="h-3.5 w-3.5" />
              Debug
            </button>

            <button
              onClick={() => handleAI("optimize")}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-muted rounded"
            >
              <Zap className="h-3.5 w-3.5" />
              Optimize
            </button>

            <button
              onClick={() => handleAI("review")}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-muted rounded"
            >
              <Eye className="h-3.5 w-3.5" />
              Review
            </button>
          </div>
        </div>

        <div className="flex-1 min-h-0">
          <CodeEditor language="java" value={code} onChange={setCode} />
        </div>

        <div className="h-48 border-t border-border flex flex-col">
          <div className="px-4 py-2 border-b border-border bg-surface">
            <span className="text-xs font-medium uppercase">Output</span>
          </div>

          <div className="flex flex-1">
            <div className="w-1/3 border-r border-border p-3">
              <textarea
                value={stdin}
                onChange={(e) => setStdin(e.target.value)}
                className="w-full h-full border rounded p-2 text-xs font-mono"
                placeholder="stdin..."
              />
            </div>

            {/* ✅ Output panel — red for errors, green for success */}
            <div className="flex-1 p-3 overflow-y-auto">
              <pre
                className={`text-xs font-mono whitespace-pre-wrap h-full ${
                  outputType === "error"
                    ? "text-red-400"
                    : outputType === "success"
                    ? "text-green-400"
                    : "text-muted-foreground"
                }`}
              >
                {output || "Run your code to see output here."}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <AIChatPanel
        isOpen={aiPanel.open}
        onClose={() =>
          setAiPanel((prev) => ({ ...prev, open: false }))
        }
        content={aiPanel.content}
        title={aiPanel.title}
        isLoading={aiPanel.loading}
      />
    </div>
  );
}