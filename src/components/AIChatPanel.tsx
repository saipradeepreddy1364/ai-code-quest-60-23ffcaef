import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { X, Bot } from "lucide-react";

interface AIChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
  title: string;
  isLoading: boolean;
}

export default function AIChatPanel({ isOpen, onClose, content, title, isLoading }: AIChatPanelProps) {
  if (!isOpen) return null;

  return (
    <div className="border-l border-border bg-card w-96 flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <Bot className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-foreground">{title}</span>
        </div>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
        {isLoading ? (
          <div className="flex items-center gap-2 text-accent">
            <div className="w-2 h-2 rounded-full bg-accent ai-pulse" />
            <span className="text-sm">Analyzing...</span>
          </div>
        ) : (
          <div className="prose prose-sm prose-invert max-w-none text-foreground">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
