import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { X, Bot, Send } from "lucide-react";
import { askAI } from "@/api/ai";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AIChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
  content?: string;
  title?: string;
  isLoading?: boolean;
}

export default function AIChatPanel({ isOpen, onClose }: AIChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await askAI(input);
      const assistantMessage: Message = { role: "assistant", content: response };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't get a response. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-l border-border bg-card w-96 flex flex-col h-full">
      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <Bot className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-foreground">AI Assistant</span>
        </div>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-muted-foreground text-sm mt-8">
            <Bot className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p>Ask me anything about your code!</p>
            <p className="text-xs mt-1">Errors, suggestions, explanations...</p>
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
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
            <div className="bg-muted rounded-lg px-3 py-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-muted-foreground">Thinking...</span>
            </div>
          </div>
        )}
      </div>

      {/* INPUT */}
      <div className="border-t border-border p-3 flex gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about your code..."
          className="flex-1 bg-background border border-border rounded-md px-3 py-2 text-sm resize-none h-10 max-h-32"
          rows={1}
        />
        <button
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="bg-primary hover:opacity-90 disabled:opacity-50 rounded-md px-3 py-2"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}