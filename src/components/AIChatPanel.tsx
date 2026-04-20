// src/components/AIChatPanel.tsx
import { useState, useRef, useEffect, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import { X, Bot, Send, Code2, AlertTriangle, GripVertical, Minus, Maximize2 } from "lucide-react";
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
  errors?: string;
  aiPanelTitle?: string;
  aiPanelContent?: string;
  aiPanelLoading?: boolean;
  autoAttachCode?: boolean;
}

const MIN_W = 320;
const MIN_H = 400;
const DEFAULT_W = 400;
const DEFAULT_H = 560;

type ResizeDir = "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw" | null;

export default function AIChatPanel({
  isOpen,
  onClose,
  code,
  problemTitle,
  errors,
  aiPanelTitle,
  aiPanelContent,
  aiPanelLoading,
  autoAttachCode,
}: AIChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput]       = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [attachCode, setAttachCode]     = useState(false);
  const [attachErrors, setAttachErrors] = useState(false);
  const [isMinimised, setIsMinimised]   = useState(false);

  // Auto-enable code attachment when triggered by Debug / Optimize / Review
  useEffect(() => {
    if (autoAttachCode) setAttachCode(true);
  }, [autoAttachCode]);

  // ── Position & size ───────────────────────────────────────────────────────
  const [pos,  setPos]  = useState(() => ({
    x: Math.max(0, window.innerWidth  - DEFAULT_W - 24),
    y: Math.max(0, window.innerHeight - DEFAULT_H - 24),
  }));
  const [size, setSize] = useState({ w: DEFAULT_W, h: DEFAULT_H });

  // ── Drag refs ─────────────────────────────────────────────────────────────
  const draggingRef  = useRef(false);
  const dragStartRef = useRef({ mx: 0, my: 0, px: 0, py: 0 });

  // ── Resize refs ───────────────────────────────────────────────────────────
  const resizeDirRef    = useRef<ResizeDir>(null);
  const resizeStartRef  = useRef({ mx: 0, my: 0, px: 0, py: 0, w: 0, h: 0 });

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // ── Global mouse move / up ────────────────────────────────────────────────
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      // drag
      if (draggingRef.current) {
        const dx = e.clientX - dragStartRef.current.mx;
        const dy = e.clientY - dragStartRef.current.my;
        setPos({
          x: Math.max(0, Math.min(window.innerWidth  - size.w, dragStartRef.current.px + dx)),
          y: Math.max(0, Math.min(window.innerHeight - 40,     dragStartRef.current.py + dy)),
        });
        return;
      }

      // resize
      const dir = resizeDirRef.current;
      if (!dir) return;

      const dx = e.clientX - resizeStartRef.current.mx;
      const dy = e.clientY - resizeStartRef.current.my;
      const { px, py, w, h } = resizeStartRef.current;

      let newW = w, newH = h, newX = px, newY = py;

      if (dir.includes("e")) newW = Math.max(MIN_W, w + dx);
      if (dir.includes("s")) newH = Math.max(MIN_H, h + dy);
      if (dir.includes("w")) { newW = Math.max(MIN_W, w - dx); newX = px + (w - newW); }
      if (dir.includes("n")) { newH = Math.max(MIN_H, h - dy); newY = py + (h - newH); }

      setSize({ w: newW, h: newH });
      setPos({ x: newX, y: newY });
    };

    const onUp = () => {
      draggingRef.current  = false;
      resizeDirRef.current = null;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup",   onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup",   onUp);
    };
  }, [size.w]);

  const startDrag = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    draggingRef.current = true;
    dragStartRef.current = { mx: e.clientX, my: e.clientY, px: pos.x, py: pos.y };
    document.body.style.userSelect = "none";
  }, [pos]);

  const startResize = useCallback((e: React.MouseEvent, dir: ResizeDir) => {
    e.preventDefault();
    e.stopPropagation();
    resizeDirRef.current = dir;
    resizeStartRef.current = { mx: e.clientX, my: e.clientY, px: pos.x, py: pos.y, w: size.w, h: size.h };
    document.body.style.userSelect = "none";

    const cursors: Record<string, string> = {
      n: "n-resize", s: "s-resize", e: "e-resize", w: "w-resize",
      ne: "ne-resize", nw: "nw-resize", se: "se-resize", sw: "sw-resize",
    };
    document.body.style.cursor = cursors[dir ?? ""] || "";
  }, [pos, size]);

  if (!isOpen) return null;

  const canSend =
    !isLoading &&
    (input.trim().length > 0 || attachCode || attachErrors);

  const handleSend = async () => {
    if (!canSend) return;

    let userText = input.trim();
    if (!userText && attachCode && !attachErrors)  userText = "Please review my code and suggest improvements.";
    else if (!userText && !attachCode && attachErrors) userText = "Please help me fix these errors.";
    else if (!userText && attachCode && attachErrors)  userText = "Please help me fix the errors in my code.";

    if (attachCode && code)
      userText = `Context — problem: "${problemTitle ?? "unknown"}"\n\`\`\`java\n${code}\n\`\`\`\n\n${userText}`;
    if (attachErrors && errors)
      userText = `${userText}\n\nErrors from output:\n\`\`\`\n${errors}\n\`\`\``;

    const displayContent =
      input.trim() ||
      (attachCode && attachErrors
        ? "Help me fix the errors in my code."
        : attachCode
        ? "Review my code and suggest improvements."
        : "Help me fix these errors.");

    const userMessage: Message = { role: "user", content: displayContent };
    const historyBeforeThisMessage = [...messages];

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await askAI(userText, historyBeforeThisMessage);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't get a response. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  // ── Resize handle style helper ────────────────────────────────────────────
  const edgeStyle = (cursor: string, style: React.CSSProperties): React.CSSProperties => ({
    position: "absolute",
    zIndex: 10,
    cursor,
    ...style,
  });

  return (
    <div
      style={{
        position:    "fixed",
        left:        pos.x,
        top:         pos.y,
        width:       size.w,
        height:      isMinimised ? 44 : size.h,
        zIndex:      9999,
        display:     "flex",
        flexDirection: "column",
        borderRadius: 12,
        overflow:    "hidden",
        boxShadow:   "0 8px 40px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.3)",
        border:      "1px solid hsl(var(--border))",
        background:  "hsl(var(--card))",
        transition:  "height 0.2s ease",
        minWidth:    MIN_W,
        minHeight:   isMinimised ? 44 : MIN_H,
      }}
    >
      {/* ── Resize handles (hidden when minimised) ── */}
      {!isMinimised && (
        <>
          {/* Edges */}
          <div style={edgeStyle("n-resize",  { top: 0, left: 8, right: 8, height: 5 })}           onMouseDown={(e) => startResize(e, "n")}  />
          <div style={edgeStyle("s-resize",  { bottom: 0, left: 8, right: 8, height: 5 })}        onMouseDown={(e) => startResize(e, "s")}  />
          <div style={edgeStyle("e-resize",  { right: 0, top: 8, bottom: 8, width: 5 })}          onMouseDown={(e) => startResize(e, "e")}  />
          <div style={edgeStyle("w-resize",  { left: 0, top: 8, bottom: 8, width: 5 })}           onMouseDown={(e) => startResize(e, "w")}  />
          {/* Corners */}
          <div style={edgeStyle("ne-resize", { top: 0, right: 0, width: 12, height: 12 })}        onMouseDown={(e) => startResize(e, "ne")} />
          <div style={edgeStyle("nw-resize", { top: 0, left: 0, width: 12, height: 12 })}         onMouseDown={(e) => startResize(e, "nw")} />
          <div style={edgeStyle("se-resize", { bottom: 0, right: 0, width: 12, height: 12 })}     onMouseDown={(e) => startResize(e, "se")} />
          <div style={edgeStyle("sw-resize", { bottom: 0, left: 0, width: 12, height: 12 })}      onMouseDown={(e) => startResize(e, "sw")} />
        </>
      )}

      {/* ══ HEADER (drag handle) ══ */}
      <div
        onMouseDown={startDrag}
        style={{ cursor: "grab", userSelect: "none" }}
        className="flex items-center justify-between px-3 py-2.5 border-b border-border shrink-0 bg-card"
      >
        <div className="flex items-center gap-2">
          <GripVertical className="h-3.5 w-3.5 text-muted-foreground/50" />
          <Bot className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-foreground">AI Assistant</span>
        </div>
        <div className="flex items-center gap-1">
          {/* Minimise */}
          <button
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => setIsMinimised((v) => !v)}
            className="flex items-center justify-center w-6 h-6 rounded hover:bg-muted transition-colors text-muted-foreground"
            title={isMinimised ? "Expand" : "Minimise"}
          >
            {isMinimised ? <Maximize2 className="h-3 w-3" /> : <Minus className="h-3 w-3" />}
          </button>
          {/* Close */}
          <button
            onMouseDown={(e) => e.stopPropagation()}
            onClick={onClose}
            className="flex items-center justify-center w-6 h-6 rounded hover:bg-muted transition-colors text-muted-foreground"
            aria-label="Close AI panel"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* ══ BODY (hidden when minimised) ══ */}
      {!isMinimised && (
        <>
          {/* AI PANEL RESULT */}
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
                  DSA, algorithms, Java, aptitude, CS concepts — anything you want to learn.
                </p>
                {(code || errors) && (
                  <p className="text-xs mt-3 text-accent">
                    💡 Use the attach buttons below to include your code or errors.
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

          {/* ATTACH BUTTONS */}
          {(code || errors) && (
            <div className="px-3 py-2 border-t border-border bg-muted/20 flex flex-col gap-1.5 shrink-0">
              <p className="text-xs text-muted-foreground font-medium mb-0.5">Attach context:</p>
              <div className="flex gap-2 flex-wrap">
                {code && (
                  <button
                    onClick={() => setAttachCode((v) => !v)}
                    className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all ${
                      attachCode
                        ? "bg-blue-500/20 border-blue-500 text-blue-400"
                        : "bg-muted border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground"
                    }`}
                  >
                    <Code2 className="h-3 w-3" />
                    {attachCode ? "Code ✓" : "Attach Code"}
                  </button>
                )}
                {errors && (
                  <button
                    onClick={() => setAttachErrors((v) => !v)}
                    className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all ${
                      attachErrors
                        ? "bg-red-500/20 border-red-500 text-red-400"
                        : "bg-muted border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground"
                    }`}
                  >
                    <AlertTriangle className="h-3 w-3" />
                    {attachErrors ? "Errors ✓" : "Attach Errors"}
                  </button>
                )}
              </div>
              {(attachCode || attachErrors) && (
                <p className="text-xs text-muted-foreground mt-0.5">
                  {attachCode && attachErrors
                    ? "Code + errors will be sent. You can send without typing."
                    : attachCode
                    ? "Code will be sent. You can send without typing."
                    : "Errors will be sent. You can send without typing."}
                </p>
              )}
            </div>
          )}

          {/* INPUT */}
          <div className="border-t border-border p-3 flex gap-2 shrink-0">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={
                attachCode || attachErrors
                  ? "Ask something or just press Send..."
                  : "Ask anything... (Enter to send)"
              }
              className="flex-1 bg-background border border-border rounded-md px-3 py-2 text-sm resize-none h-10 max-h-32 focus:outline-none focus:ring-1 focus:ring-primary"
              rows={1}
            />
            <button
              onClick={handleSend}
              disabled={!canSend}
              className={`rounded-md px-3 py-2 transition-all ${
                canSend
                  ? "bg-primary hover:opacity-90 text-primary-foreground"
                  : "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
              }`}
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}