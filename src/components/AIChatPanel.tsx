// src/components/AIChatPanel.tsx
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { X, Bot, Send, Code2 } from "lucide-react";
import { askAI } from "@/api/ai";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AIChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
  code?: string;
  problemTitle?: string;
  /** When set, shows a one-off AI result (Debug / Optimize / Review) at the top */
  aiPanelTitle?: string;
  aiPanelContent?: string;
  aiPanelLoading?: boolean;
}

export default function AIChatPanel({
  isOpen,
  onClose,
  code,
  problemTitle,
  aiPanelTitle,
  aiPanelContent,
  aiPanelLoading,
}: AIChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [attachCode, setAttachCode] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  if (!isOpen) return null;

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = attachCode && code
      ? `Context — problem: "${problemTitle ?? "unknown"}"\n\`\`\`java\n${code}\n\`\`\`\n\n${input.trim()}`
      : input.trim();

    const userMessage: Message = { role: "user", content: input.trim() };
    const historyBeforeThisMessage = [...messages];

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await askAI(userText);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    } catch (error) {
      console.error("AI chat error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't get a response. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-l border-border bg-card flex flex-col h-full w-full">

      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
        <div className="flex items-center gap-2">
          <Bot className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-foreground">AI Assistant</span>
        </div>
        <button
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close AI panel"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* AI PANEL RESULT (Debug / Optimize / Review) */}
      {(aiPanelTitle || aiPanelLoading) && (
        <div className="border-b border-border bg-muted/40 px-4 py-3 shrink-0">
          <p className="text-xs font-semibold text-accent mb-1">{aiPanelTitle}</p>
          {aiPanelLoading ? (
            <div className="flex items-center gap-1.5 py-1">
              <div className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          ) : (
            <div className="prose prose-sm prose-invert max-w-none text-sm">
              <ReactMarkdown>{aiPanelContent ?? ""}</ReactMarkdown>
            </div>
          )}
        </div>
      )}

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-muted-foreground text-sm mt-8 px-2">
            <Bot className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p className="font-medium text-foreground">Ask me anything!</p>
            <p className="text-xs mt-2 leading-relaxed">
              DSA concepts, Java syntax, time complexity, algorithms — anything you want to learn or understand.
            </p>
            {code && (
              <p className="text-xs mt-3 text-accent">
                💡 Toggle "Attach code" below to include your editor code in questions.
              </p>
            )}
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                msg.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground"
              }`}
            >
              {msg.role === "assistant" ? (
                <div className="prose prose-sm prose-invert max-w-none">
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              ) : (
                msg.content
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-lg px-3 py-2 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* CODE ATTACH TOGGLE */}
      {code && (
        <div className="px-3 py-2 border-t border-border bg-surface flex items-center gap-2 shrink-0">
          <button
            onClick={() => setAttachCode((v) => !v)}
            className={`flex items-center gap-1.5 text-xs px-2 py-1 rounded transition-colors ${
              attachCode
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            <Code2 className="h-3 w-3" />
            {attachCode ? "Code attached ✓" : "Attach code"}
          </button>
          <span className="text-xs text-muted-foreground">
            {attachCode
              ? "Your editor code will be sent with your next message."
              : "Send your current code as context."}
          </span>
        </div>
      )}

      {/* INPUT */}
      <div className="border-t border-border p-3 flex gap-2 shrink-0">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything... (Enter to send)"
          className="flex-1 bg-background border border-border rounded-md px-3 py-2 text-sm resize-none h-10 max-h-32 focus:outline-none focus:ring-1 focus:ring-primary"
          rows={1}
        />
        <button
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="bg-primary hover:opacity-90 disabled:opacity-50 rounded-md px-3 py-2 transition-opacity"
          aria-label="Send message"
        >
          <Send className="h-4 w-4 text-primary-foreground" />
        </button>
      </div>
    </div>
  );
}