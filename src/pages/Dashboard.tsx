// src/pages/Dashboard.tsx
import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  User, ChevronDown, Menu, X, Home, BookOpen,
  Building2, GraduationCap, Brain, Cpu, Network, Database,
  LogOut, Binary, Square, Sparkles,
  Terminal, Grid3x3, Hash, Triangle, Code
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import CodeCompiler from "../components/CodeCompiler";
import AIChatPanel from "../components/AIChatPanel";
import { problems } from "../data/problems";

// ─── category count helper ───────────────────────────────────────────────────
const getCategoryCounts = () => {
  const counts: Record<string, number> = {};
  problems.forEach((p) => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });
  return counts;
};

// ─── icon + colour map ───────────────────────────────────────────────────────
const TOPIC_META: Record<
  string,
  { icon: React.ElementType; iconColor: string; iconBg: string }
> = {
  "Arrays":               { icon: Database,   iconColor: "#60a5fa", iconBg: "#1e3a5f" },
  "Strings":              { icon: Code,       iconColor: "#4ade80", iconBg: "#14532d" },
  "Linked Lists":         { icon: Cpu,        iconColor: "#c084fc", iconBg: "#3b0764" },
  "Dynamic Programming":  { icon: Brain,      iconColor: "#f87171", iconBg: "#450a0a" },
  "Trees":                { icon: Network,    iconColor: "#34d399", iconBg: "#064e3b" },
  "Graphs":               { icon: Network,    iconColor: "#2dd4bf", iconBg: "#042f2e" },
  "Binary Search":        { icon: Binary,     iconColor: "#818cf8", iconBg: "#1e1b4b" },
  "Stacks":               { icon: Square,     iconColor: "#fbbf24", iconBg: "#451a03" },
  "Hashing":              { icon: Hash,       iconColor: "#fb7185", iconBg: "#4c0519" },
  "Greedy":               { icon: Sparkles,   iconColor: "#22d3ee", iconBg: "#083344" },
  "Backtracking":         { icon: Terminal,   iconColor: "#fb923c", iconBg: "#431407" },
  "Sliding Window":       { icon: Grid3x3,    iconColor: "#38bdf8", iconBg: "#082f49" },
  "Heap":                 { icon: Database,   iconColor: "#a3e635", iconBg: "#1a2e05" },
  "Queues":               { icon: Square,     iconColor: "#e879f9", iconBg: "#4a044e" },
  "Two Pointers":         { icon: Grid3x3,    iconColor: "#a78bfa", iconBg: "#2e1065" },
  "Bit Manipulation":     { icon: Binary,     iconColor: "#94a3b8", iconBg: "#1e293b" },
  "Patterns":             { icon: Triangle,   iconColor: "#f472b6", iconBg: "#500724" },
  "Numbers":              { icon: Hash,       iconColor: "#64748b", iconBg: "#1e293b" },
  "DSA":                  { icon: Code,       iconColor: "#60a5fa", iconBg: "#1e3a5f" },
  "Aptitude":             { icon: Brain,      iconColor: "#818cf8", iconBg: "#1e1b4b" },
  "Logical Reasoning":    { icon: Sparkles,   iconColor: "#c084fc", iconBg: "#3b0764" },
  "Technical":            { icon: Terminal,   iconColor: "#4ade80", iconBg: "#14532d" },
  "DBMS":                 { icon: Database,   iconColor: "#60a5fa", iconBg: "#1e3a5f" },
  "Operating Systems":    { icon: Cpu,        iconColor: "#f87171", iconBg: "#450a0a" },
  "Computer Networks":    { icon: Network,    iconColor: "#2dd4bf", iconBg: "#042f2e" },
  "OOP":                  { icon: Code,       iconColor: "#fbbf24", iconBg: "#451a03" },
};

const DSA_CATEGORIES = [
  "Arrays", "Strings", "Linked Lists", "Dynamic Programming", "Trees", "Graphs",
  "Binary Search", "Stacks", "Hashing", "Greedy", "Backtracking", "Sliding Window",
  "Heap", "Queues", "Two Pointers", "Bit Manipulation", "Patterns", "Numbers", "DSA",
];

const PLACEMENT_CATEGORIES = [
  "Aptitude", "Logical Reasoning", "Technical", "DBMS",
  "Operating Systems", "Computer Networks", "OOP",
];

const COMPANIES = [
  "Google", "Amazon", "Microsoft", "Meta", "Flipkart",
  "Oracle", "Adobe", "Goldman Sachs",
];

// ─── TopicCard (full-size, matches screenshot) ───────────────────────────────
interface TopicCardProps {
  category: string;
  count: number;
  onClick: () => void;
}

function TopicCard({ category, count, onClick }: TopicCardProps) {
  const meta = TOPIC_META[category] ?? { icon: Code, iconColor: "#94a3b8", iconBg: "#1e293b" };
  const Icon = meta.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#22223a" : "#1c1c2e",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "16px",
        padding: "20px 20px 16px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        transition: "background 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.45)" : "none",
      }}
    >
      {/* Left: title + count + button */}
      <div style={{ display: "flex", flexDirection: "column", gap: "3px", flex: 1, minWidth: 0 }}>
        <span
          style={{
            fontWeight: 700,
            fontSize: "15px",
            color: "#f1f5f9",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.3,
          }}
        >
          {category}
        </span>
        <span style={{ fontSize: "13px", color: "#64748b", marginBottom: "10px" }}>
          {count} {count === 1 ? "Problem" : "Problems"}
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); onClick(); }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "5px 14px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "#e2e8f0",
            fontSize: "12px",
            fontWeight: 600,
            cursor: "pointer",
            width: "fit-content",
          }}
        >
          <span style={{ fontSize: "14px" }}>🤚</span>
          Start
        </button>
      </div>

      {/* Right: icon box */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "14px",
          background: meta.iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          marginLeft: "16px",
          boxShadow: `0 0 20px ${meta.iconColor}33`,
        }}
      >
        <Icon style={{ width: 32, height: 32, color: meta.iconColor, strokeWidth: 1.4 }} />
      </div>
    </div>
  );
}

// ─── Dashboard ───────────────────────────────────────────────────────────────
export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const [aiPanelWidth, setAiPanelWidth] = useState(400);
  const [isResizingPanel, setIsResizingPanel] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [currentCode, setCurrentCode] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("java");
  const [activeTab, setActiveTab] = useState<"dsa" | "placement" | "companies">("dsa");

  const categoryCounts = useMemo(() => getCategoryCounts(), []);

  // AI panel horizontal resize
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isResizingPanel) return;
      const newWidth = window.innerWidth - e.clientX;
      if (newWidth >= 300 && newWidth <= 800) setAiPanelWidth(newWidth);
    };
    const onUp = () => setIsResizingPanel(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [isResizingPanel]);

  const handleLogout = async () => {
    setDropdownOpen(false);
    await signOut();
    navigate("/login", { replace: true });
  };

  const goTo = (path: string) => {
    setMenuOpen(false);
    navigate(path);
  };

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center text-sm text-muted-foreground">
        Loading...
      </div>
    );
  }

  const visibleCats =
    activeTab === "dsa"
      ? DSA_CATEGORIES.filter((c) => (categoryCounts[c] ?? 0) > 0)
      : activeTab === "placement"
      ? PLACEMENT_CATEGORIES.filter((c) => (categoryCounts[c] ?? 0) > 0)
      : [];

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">

      {/* ══════════════ HEADER ══════════════ */}
      <header className="flex justify-between items-center px-4 py-2.5 bg-card border-b border-border shrink-0" style={{ zIndex: 50, position: "relative" }}>
        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="p-2 rounded-md hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className="relative">
          <button
            onClick={() => setDropdownOpen((p) => !p)}
            className="flex items-center gap-2 px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-sm"
          >
            <User className="h-4 w-4" />
            <span className="max-w-[120px] truncate">{user.email}</span>
            <ChevronDown className="h-4 w-4 shrink-0" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg z-50">
              <div className="p-3 text-xs text-muted-foreground border-b truncate">{user.email}</div>
              <button
                onClick={() => { setDropdownOpen(false); goTo("/problems"); }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted transition-colors"
              >
                <BookOpen className="h-4 w-4" /> All Problems
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-muted transition-colors"
              >
                <LogOut className="h-4 w-4" /> Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {/* ══════════════ FULL-SCREEN MENU OVERLAY ══════════════ */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "#0d0d1a",
            zIndex: 40,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Overlay header — mirrors main header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 16px",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              flexShrink: 0,
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                borderRadius: "8px",
                background: "rgba(255,255,255,0.05)",
                border: "none",
                cursor: "pointer",
                color: "#94a3b8",
              }}
            >
              <X style={{ width: 18, height: 18 }} />
            </button>

            {/* Title + subtitle */}
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "#6366f1",
                  margin: 0,
                }}
              >
                Practice Platform
              </p>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: 800,
                  color: "#f1f5f9",
                  margin: 0,
                }}
              >
                Turn practice into progress
              </h2>
            </div>

            {/* All Problems shortcut */}
            <button
              onClick={() => goTo("/problems")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 14px",
                borderRadius: "8px",
                background: "rgba(99,102,241,0.15)",
                border: "1px solid rgba(99,102,241,0.3)",
                color: "#a5b4fc",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              <BookOpen style={{ width: 14, height: 14 }} />
              All Problems
            </button>
          </div>

          {/* Tab pills */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              padding: "16px 20px 12px",
              flexShrink: 0,
            }}
          >
            {(
              [
                { id: "dsa",       label: "DSA Topics",     icon: Brain },
                { id: "placement", label: "Placement Prep", icon: GraduationCap },
                { id: "companies", label: "Companies",      icon: Building2 },
              ] as const
            ).map(({ id, label, icon: Icon }) => {
              const active = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                    padding: "9px 22px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    border: "none",
                    transition: "all 0.15s",
                    background: active
                      ? "linear-gradient(135deg,#6366f1,#8b5cf6)"
                      : "rgba(255,255,255,0.05)",
                    color: active ? "#fff" : "#64748b",
                    boxShadow: active ? "0 4px 16px rgba(99,102,241,0.4)" : "none",
                  }}
                >
                  <Icon style={{ width: 15, height: 15 }} />
                  {label}
                </button>
              );
            })}
          </div>

          {/* Scrollable card grid */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "4px 24px 32px",
            }}
          >
            {activeTab !== "companies" ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                  gap: "14px",
                  maxWidth: "1100px",
                  margin: "0 auto",
                }}
              >
                {visibleCats.map((cat) => (
                  <TopicCard
                    key={cat}
                    category={cat}
                    count={categoryCounts[cat] ?? 0}
                    onClick={() => goTo(`/problems?category=${encodeURIComponent(cat)}`)}
                  />
                ))}
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                  gap: "14px",
                  maxWidth: "900px",
                  margin: "0 auto",
                }}
              >
                {COMPANIES.map((company) => (
                  <button
                    key={company}
                    onClick={() => goTo(`/problems?company=${encodeURIComponent(company)}`)}
                    style={{
                      background: "#1c1c2e",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "16px",
                      padding: "20px 14px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "10px",
                      cursor: "pointer",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.background = "#22223a")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.background = "#1c1c2e")
                    }
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "12px",
                        background: "#1e1b4b",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Building2 style={{ width: 24, height: 24, color: "#818cf8" }} />
                    </div>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#e2e8f0", textAlign: "center" }}>
                      {company}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ══════════════ BODY — compiler + AI, always mounted ══════════════ */}
      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-hidden">
            <CodeCompiler
              onCodeChange={(code, lang) => { setCurrentCode(code); setCurrentLanguage(lang); }}
              onToggleAI={() => setIsAiOpen((p) => !p)}
              userEmail={user.email}
            />
          </div>

          {isAiOpen && (
            <div
              className="w-1.5 bg-border hover:bg-primary cursor-col-resize shrink-0 transition-colors"
              onMouseDown={(e) => { e.preventDefault(); setIsResizingPanel(true); }}
            />
          )}

          {isAiOpen && (
            <div className="shrink-0 border-l border-border overflow-hidden" style={{ width: aiPanelWidth }}>
              <AIChatPanel isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
            </div>
          )}
        </div>
      </div>

    </div>
  );
}