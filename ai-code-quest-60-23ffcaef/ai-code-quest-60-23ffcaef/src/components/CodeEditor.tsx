import Editor from "@monaco-editor/react";

interface CodeEditorProps {
  language: string;
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
}

const languageMap: Record<string, string> = {
  java: "java",
  python: "python",
  cpp: "cpp",
  c: "c",
  javascript: "javascript",
  typescript: "typescript",
  go: "go",
  rust: "rust",
};

export default function CodeEditor({ language, value, onChange, readOnly = false }: CodeEditorProps) {
  return (
    <Editor
      height="100%"
      language={languageMap[language] || "javascript"}
      value={value}
      onChange={(v) => onChange(v || "")}
      theme="vs-dark"
      options={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 14,
        lineHeight: 22,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        padding: { top: 16 },
        renderLineHighlight: "gutter",
        cursorBlinking: "smooth",
        smoothScrolling: true,
        tabSize: 4,
        wordWrap: "on",
        readOnly,                      // ✅ passed to Monaco
        domReadOnly: readOnly,         // ✅ disables context menu edits too
      }}
    />
  );
}