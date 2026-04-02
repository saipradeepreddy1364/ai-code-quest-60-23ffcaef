// src/pages/Dashboard.tsx
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  User, ChevronDown, BookOpen,
  GraduationCap, Brain, Cpu, Network, Database,
  LogOut, Binary, Square, Sparkles,
  Terminal, Grid3x3, Hash, Triangle, Code
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { problems } from "../data/problems";

// ─── helpers ────────────────────────────────────────────────────────────────

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

const SECTIONS = [
  { id: "dsa",       label: "DSA Topics",     icon: Brain,         cats: DSA_CATEGORIES },
  { id: "placement", label: "Placement Prep", icon: GraduationCap, cats: PLACEMENT_CATEGORIES },
];

// ─── TopicCard ───────────────────────────────────────────────────────────────

interface TopicCardProps {
  category: string;
  count: number;
  onClick: () => void;
}

function TopicCard({ category, count, onClick }: TopicCardProps) {
  const meta = TOPIC_META[category] ?? {
    icon: Code,
    iconColor: "#94a3b8",
    iconBg: "#1e293b",
  };
  const Icon = meta.icon;

  return (
    <div
      onClick={onClick}
      style={{
        background: "#1c1c2e",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "16px",
        padding: "20px 20px 18px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.45)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* ── Left: title + count + button ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1, minWidth: 0 }}>
        <span
          style={{
            fontWeight: 700,
            fontSize: "16px",
            color: "#f1f5f9",
            lineHeight: 1.3,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {category}
        </span>

        <span style={{ fontSize: "13px", color: "#64748b", marginBottom: "12px" }}>
          {count} {count === 1 ? "Problem" : "Problems"}
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 16px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "#e2e8f0",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            width: "fit-content",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.13)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.07)")
          }
        >
          <span style={{ fontSize: "15px" }}>🤚</span>
          Start
        </button>
      </div>

      {/* ── Right: coloured icon box ── */}
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: "14px",
          background: meta.iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          marginLeft: "16px",
          boxShadow: `0 0 24px ${meta.iconColor}33`,
        }}
      >
        <Icon
          style={{
            width: 36,
            height: 36,
            color: meta.iconColor,
            strokeWidth: 1.4,
          }}
        />
      </div>
    </div>
  );
}

// ─── Dashboard page ───────────────────────────────────────────────────────────

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("dsa");

  const categoryCounts = useMemo(() => getCategoryCounts(), []);

  const handleLogout = async () => {
    setDropdownOpen(false);
    await signOut();
    navigate("/login", { replace: true });
  };

  const goTo = (path: string) => navigate(path);

  if (!user) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          color: "#64748b",
          background: "#0d0d1a",
        }}
      >
        Loading...
      </div>
    );
  }

  const currentSection = SECTIONS.find((s) => s.id === activeSection)!;
  const visibleCats = currentSection.cats.filter((c) => (categoryCounts[c] ?? 0) > 0);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d0d1a",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ════════════════ HEADER ════════════════ */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 28px",
          background: "rgba(13,13,26,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          position: "sticky",
          top: 0,
          zIndex: 30,
        }}
      >
        {/* Logo */}
        <span
          style={{
            fontSize: "20px",
            fontWeight: 800,
            color: "#f1f5f9",
            letterSpacing: "-0.5px",
          }}
        >
          Code<span style={{ color: "#6366f1" }}>Quest</span>
        </span>

        {/* User dropdown trigger */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setDropdownOpen((p) => !p)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "7px 14px",
              background: "rgba(99,102,241,0.15)",
              border: "1px solid rgba(99,102,241,0.35)",
              borderRadius: "8px",
              color: "#a5b4fc",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            <User style={{ width: 16, height: 16 }} />
            <span
              style={{
                maxWidth: "140px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {user.email}
            </span>
            <ChevronDown style={{ width: 16, height: 16, flexShrink: 0 }} />
          </button>

          {/* Dropdown menu */}
          {dropdownOpen && (
            <div
              style={{
                position: "absolute",
                right: 0,
                marginTop: "8px",
                width: "220px",
                background: "#1c1c2e",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.55)",
                zIndex: 50,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "10px 14px",
                  fontSize: "12px",
                  color: "#475569",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {user.email}
              </div>

              <button
                onClick={() => { setDropdownOpen(false); goTo("/problems"); }}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 14px",
                  fontSize: "14px",
                  color: "#e2e8f0",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background = "transparent")
                }
              >
                <BookOpen style={{ width: 16, height: 16, color: "#6366f1" }} />
                All Problems
              </button>

              <button
                onClick={handleLogout}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 14px",
                  fontSize: "14px",
                  color: "#f87171",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background = "transparent")
                }
              >
                <LogOut style={{ width: 16, height: 16 }} />
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {/* ════════════════ HERO ════════════════ */}
      <div
        style={{
          textAlign: "center",
          paddingTop: "52px",
          paddingBottom: "8px",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#6366f1",
            margin: "0 0 10px",
          }}
        >
          Practice Platform
        </p>
        <h1
          style={{
            fontSize: "clamp(22px, 4vw, 34px)",
            fontWeight: 800,
            color: "#f1f5f9",
            margin: "0 0 10px",
            letterSpacing: "-0.5px",
          }}
        >
          Turn practice into progress
        </h1>
        <p style={{ fontSize: "14px", color: "#475569", margin: 0 }}>
          {problems.length} problems across {Object.keys(categoryCounts).length} topics
        </p>
      </div>

      {/* ════════════════ SECTION TABS ════════════════ */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          padding: "28px 16px 20px",
        }}
      >
        {SECTIONS.map((s) => {
          const Icon = s.icon;
          const active = s.id === activeSection;
          return (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 24px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                border: "none",
                transition: "all 0.2s ease",
                background: active
                  ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                  : "rgba(255,255,255,0.05)",
                color: active ? "#fff" : "#94a3b8",
                boxShadow: active ? "0 4px 20px rgba(99,102,241,0.4)" : "none",
              }}
            >
              <Icon style={{ width: 16, height: 16 }} />
              {s.label}
            </button>
          );
        })}
      </div>

      {/* ════════════════ CARDS GRID ════════════════ */}
      <main
        style={{
          flex: 1,
          maxWidth: "980px",
          width: "100%",
          margin: "0 auto",
          padding: "0 20px 56px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))",
            gap: "16px",
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

        {visibleCats.length === 0 && (
          <div
            style={{
              textAlign: "center",
              paddingTop: "80px",
              fontSize: "14px",
              color: "#334155",
            }}
          >
            No topics available yet.
          </div>
        )}
      </main>
    </div>
  );
}