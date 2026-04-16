// src/components/CodeEditor.tsx
import Editor, { OnMount } from "@monaco-editor/react";

interface CodeEditorProps {
  language: string;
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  onCtrlEnter?: () => void;
}

const languageMap: Record<string, string> = {
  java: "java",
  python: "python",
  cpp: "cpp",
  c: "c",
};

export default function CodeEditor({
  language,
  value,
  onChange,
  readOnly = false,
  onCtrlEnter,
}: CodeEditorProps) {
  // ── Register Ctrl+Enter inside Monaco so it fires even when the
  //    editor has focus and would otherwise swallow the keyboard event. ──
  const handleMount: OnMount = (editor, monaco) => {
    if (onCtrlEnter) {
      editor.addCommand(
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
        () => {
          onCtrlEnter();
        }
      );
    }
  };

  return (
    <Editor
      height="100%"
      language={languageMap[language] || "javascript"}
      value={value}
      onChange={(v) => onChange(v || "")}
      theme="vs-dark"
      onMount={handleMount}
      options={{
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
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
        readOnly,
        // better bracket colorisation & guides
        bracketPairColorization: { enabled: true },
        guides: { bracketPairs: true },
        // hide the "Open in..." context-menu entries
        contextmenu: true,
        // scroll indicator
        overviewRulerBorder: false,
        // line numbers
        lineNumbers: "on",
        lineNumbersMinChars: 3,
        // folding
        folding: true,
        // auto-close / surround
        autoClosingBrackets: "always",
        autoClosingQuotes: "always",
        autoSurround: "languageDefined",
        // suggest / intellisense
        suggestOnTriggerCharacters: true,
        quickSuggestions: { other: true, comments: false, strings: false },
        acceptSuggestionOnEnter: "on",
        // format on paste / type
        formatOnPaste: true,
        formatOnType: true,
      }}
    />
  );
}