// src/pages/Dashboard.tsx
import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  User, ChevronDown, Menu, X, BookOpen,
  Building2, GraduationCap, Brain, Cpu, Network, Database,
  LogOut, Binary, Square, Sparkles,
  Terminal, Grid3x3, Hash, Triangle, Code, KeyRound,
  BarChart2,
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import CodeCompiler from "../components/CodeCompiler";
import AIChatPanel from "../components/AIChatPanel";
import UserPerformance from "../components/UserPerformance";
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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TOPIC_META: Record<string, { icon: any; iconColor: string; iconBg: string }> = {
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

// ─── Real SVG logos for each company ────────────────────────────────────────
const CompanyLogos: Record<string, React.FC<{ size?: number }>> = {
  Google: ({ size = 36 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      <path fill="none" d="M0 0h48v48H0z"/>
    </svg>
  ),

  Amazon: ({ size = 36 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FF9900" d="M29.8 37.4c-7.2 5.3-17.6 8.1-26.6 4.3-.6-.3-.1-.7.5-.5 7.6 4.4 17.6 3.8 24.9-.5.6-.4 1.2.3.2.7z"/>
      <path fill="#FF9900" d="M32.2 34.7c-.9-1.1-5.8-.5-8-.3-.7.1-.8-.5-.2-.9 3.9-2.7 10.3-1.9 11.1-.9.7.9-.2 7.3-3.9 10.3-.6.5-1.1.2-.8-.4.8-2.1 2.7-6.7 1.8-7.8z"/>
      <path fill="#232F3E" d="M28.7 8.2V5.9c0-.4.3-.6.6-.6h10.9c.4 0 .6.3.6.6v2c0 .3-.3.8-.8 1.4l-5.6 8c2.1-.1 4.3.3 6.2 1.3.4.2.5.6.5.9v2.4c0 .4-.4.8-.8.6-3.4-1.8-8-2-11.8.1-.4.2-.8-.2-.8-.6v-2.3c0-.4 0-1 .4-1.6l6.5-9.3h-5.6c-.3 0-.6-.3-.6-.6v.2zM12.2 21.4h-3.4c-.3 0-.6-.3-.6-.6V6c0-.4.3-.6.7-.6h3.2c.3 0 .6.3.6.6v1.9h.1c.8-2 2.4-2.9 4.4-2.9 2.1 0 3.4.9 4.3 2.9.8-2 2.7-2.9 4.7-2.9 1.4 0 3 .6 3.9 1.9 1.1 1.5.9 3.6.9 5.5v11c0 .4-.3.6-.7.6h-3.4c-.3 0-.6-.3-.6-.6V13.6c0-.7.1-2.6-.1-3.3-.3-1.2-1-1.5-2-1.5-.8 0-1.7.6-2 1.4-.3.8-.3 2.2-.3 3.4v7.1c0 .4-.3.6-.7.6h-3.4c-.3 0-.6-.3-.6-.6V13.6c0-2.3.4-5.6-2.1-5.6-2.6 0-2.5 3.3-2.5 5.6v7.2c0 .4-.3.6-.7.6H12.2zM48 12.9c0 5.6-3.2 8.9-7.9 8.9-4.5 0-7.2-3.7-7.2-8.2C32.9 8.9 36 5 40.4 5 44.9 5 48 8.7 48 12.9zm-7.9 5.5c1.1 0 2.1-.8 2.4-2 .3-1.2.3-2.4.3-3.7 0-2.9-.3-6.3-2.8-6.3-2.6 0-2.7 3.4-2.7 6.3 0 2.9.1 5.7 2.8 5.7zM4.6 21.4H1.2c-.3 0-.6-.3-.6-.6V6c0-.4.3-.6.7-.6h3.2c.3 0 .5.3.6.6v2.2h.1C6 5.9 7.3 5 9 5c1.8 0 2.9.6 3.8 2.2.8-1.6 2.2-2.2 4-2.2 1.2 0 2.5.5 3.3 1.6C21 8 21 9.8 21 11.1v9.7c0 .4-.3.6-.7.6h-3.4c-.3 0-.6-.3-.6-.6V12.5c0-.7.1-3-.1-3.7-.3-1.1-.9-1.4-1.9-1.4-.8 0-1.6.5-1.9 1.3-.3.8-.3 2.2-.3 3.3v8.8c0 .4-.3.6-.7.6H9c-.3 0-.6-.3-.6-.6v-8.2c0-2.3.4-5.6-2.1-5.6-2.6 0-2.5 3.3-2.5 5.6v8.2c0 .4-.3.6-.7.6H4.6z"/>
    </svg>
  ),

  Microsoft: ({ size = 36 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FF5722" d="M6 6h17v17H6z"/>
      <path fill="#4CAF50" d="M25 6h17v17H25z"/>
      <path fill="#FFC107" d="M25 25h17v17H25z"/>
      <path fill="#03A9F4" d="M6 25h17v17H6z"/>
    </svg>
  ),

  Meta: ({ size = 36 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="meta-grad-a" x1="14.68" y1="30.27" x2="14.68" y2="15.08" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0062e0"/>
          <stop offset="1" stopColor="#19afff"/>
        </linearGradient>
        <linearGradient id="meta-grad-b" x1="33.32" y1="30.27" x2="33.32" y2="15.08" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0062e0"/>
          <stop offset="1" stopColor="#19afff"/>
        </linearGradient>
      </defs>
      <path fill="url(#meta-grad-a)" d="M6 22.5C6 18 9.1 15 13 15c2.4 0 4.3 1 6.1 3.3L24 24l-4.9 5.7C17.3 32 15.4 33 13 33 9.1 33 6 30 6 25.5v-3z"/>
      <path fill="url(#meta-grad-b)" d="M42 22.5C42 18 38.9 15 35 15c-2.4 0-4.3 1-6.1 3.3L24 24l4.9 5.7C30.7 32 32.6 33 35 33c3.9 0 7-3 7-7.5v-3z"/>
      <path fill="#1877f2" d="M18.1 18.3C20 15.9 22 14 24 14s4 1.9 5.9 4.3L35.5 26l-5.6 6.5c-1.8 2.1-3.7 3.5-5.9 3.5s-4.1-1.4-5.9-3.5L12.5 26l5.6-7.7z"/>
    </svg>
  ),

  Flipkart: ({ size = 36 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#F7F7F7"/>
      <text x="5" y="33" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="22" fill="#2874F0">fk</text>
      <polygon points="38,14 44,20 38,26 38,22 32,22 32,18 38,18" fill="#FFD700"/>
    </svg>
  ),

  Oracle: ({ size = 36 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="24" cy="24" rx="18" ry="12" fill="none" stroke="#F80000" strokeWidth="5"/>
    </svg>
  ),

  Adobe: ({ size = 36 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,48 16,0 32,48" fill="#FF0000"/>
      <polygon points="18,48 34,0 48,48" fill="#FF0000"/>
      <rect x="10" y="30" width="28" height="5" fill="#FF0000"/>
    </svg>
  ),

  "Goldman Sachs": ({ size = 36 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="4" fill="#FFFFFF"/>
      <text x="4" y="28" fontFamily="Georgia, serif" fontWeight="700" fontSize="11" fill="#003366" letterSpacing="-0.5">GS</text>
    </svg>
  ),
};

// ─── Company card background/accent per brand ────────────────────────────────
const COMPANY_META: Record<string, { bg: string; border: string; logoBg: string }> = {
  "Google":         { bg: "#1c1c2e", border: "rgba(234,67,53,0.25)",   logoBg: "#fff"    },
  "Amazon":         { bg: "#1c1c2e", border: "rgba(255,153,0,0.25)",   logoBg: "#232F3E" },
  "Microsoft":      { bg: "#1c1c2e", border: "rgba(0,120,212,0.25)",   logoBg: "#fff"    },
  "Meta":           { bg: "#1c1c2e", border: "rgba(24,119,242,0.25)",  logoBg: "#fff"    },
  "Flipkart":       { bg: "#1c1c2e", border: "rgba(40,116,240,0.25)",  logoBg: "#fff"    },
  "Oracle":         { bg: "#1c1c2e", border: "rgba(248,0,0,0.25)",     logoBg: "#fff"    },
  "Adobe":          { bg: "#1c1c2e", border: "rgba(255,0,0,0.25)",     logoBg: "#1a1a1a" },
  "Goldman Sachs":  { bg: "#1c1c2e", border: "rgba(0,51,102,0.4)",     logoBg: "#fff"    },
};

const COMPANIES = [
  "Google", "Amazon", "Microsoft", "Meta", "Flipkart",
  "Oracle", "Adobe", "Goldman Sachs",
];

// ─── TopicCard ───────────────────────────────────────────────────────────────
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

// ─── CompanyCard ─────────────────────────────────────────────────────────────
interface CompanyCardProps {
  company: string;
  onClick: () => void;
}

function CompanyCard({ company, onClick }: CompanyCardProps) {
  const [hovered, setHovered] = useState(false);
  const meta = COMPANY_META[company] ?? { bg: "#1c1c2e", border: "rgba(255,255,255,0.07)", logoBg: "#1e1b4b" };
  const Logo = CompanyLogos[company];

  return (
    <button
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#22223a" : meta.bg,
        border: `1px solid ${hovered ? meta.border.replace("0.25", "0.55").replace("0.4", "0.7") : meta.border}`,
        borderRadius: "16px",
        padding: "20px 14px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        cursor: "pointer",
        transition: "all 0.15s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: "14px",
          background: meta.logoBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
          overflow: "hidden",
        }}
      >
        {Logo ? (
          <Logo size={38} />
        ) : (
          <Building2 style={{ width: 24, height: 24, color: "#818cf8" }} />
        )}
      </div>
      <span
        style={{
          fontSize: "13px",
          fontWeight: 700,
          color: "#e2e8f0",
          textAlign: "center",
          lineHeight: 1.3,
        }}
      >
        {company}
      </span>
    </button>
  );
}

// ─── Dashboard ───────────────────────────────────────────────────────────────
export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const [aiPanelWidth, setAiPanelWidth]       = useState(400);
  const [isResizingPanel, setIsResizingPanel] = useState(false);
  const [dropdownOpen, setDropdownOpen]       = useState(false);
  const [menuOpen, setMenuOpen]               = useState(false);
  const [isAiOpen, setIsAiOpen]               = useState(false);
  const [perfOpen, setPerfOpen]               = useState(false); // ← NEW: performance panel toggle
  const [currentCode, setCurrentCode]         = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("java");
  const [currentErrors, setCurrentErrors]     = useState("");
  const [activeTab, setActiveTab]             = useState<"dsa" | "placement" | "companies">("dsa");

  const categoryCounts = useMemo(() => getCategoryCounts(), []);

  const visibleCats = (
    activeTab === "dsa"
      ? DSA_CATEGORIES
      : activeTab === "placement"
      ? PLACEMENT_CATEGORIES
      : []
  ).filter((cat) => (categoryCounts[cat] ?? 0) > 0);

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

  // ← NEW: read full_name from Supabase auth metadata (set during signup)
  const fullName    = user?.user_metadata?.full_name as string | undefined;
  const displayName = fullName?.trim() || user?.email || "User";
  const initials    = displayName.charAt(0).toUpperCase();

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center text-sm text-muted-foreground">
        Loading...
      </div>
    );
  }

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">

      {/* ══════════════ HEADER ══════════════ */}
      <header
        className="flex justify-between items-center px-4 py-2.5 bg-card border-b border-border shrink-0"
        style={{ zIndex: 50, position: "relative" }}
      >
        {/* Hamburger only — no label beside it */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="p-2 rounded-md hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Right side: My Stats button + user dropdown */}
        <div className="flex items-center gap-2">

          {/* ← NEW: My Stats / Performance toggle button */}
          <button
            onClick={() => {
              setPerfOpen((p) => !p);
              if (isAiOpen) setIsAiOpen(false); // close AI panel when opening stats
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition-colors ${
              perfOpen
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
            title="My Performance"
          >
            <BarChart2 className="h-4 w-4" />
            <span className="hidden sm:inline">My Stats</span>
          </button>

          {/* User dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen((p) => !p)}
              className="flex items-center gap-2 px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-sm"
            >
              <User className="h-4 w-4" />
              {/* ← CHANGED: show displayName (full name or email) instead of just email */}
              <span className="max-w-[120px] truncate">{displayName}</span>
              <ChevronDown className="h-4 w-4 shrink-0" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden">
                {/* ← CHANGED: show full name + email in dropdown header */}
                <div className="px-3 py-2.5 border-b border-border">
                  {fullName && (
                    <p className="text-xs font-semibold text-foreground truncate">{fullName}</p>
                  )}
                  <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                </div>

                {/* Change Password */}
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    navigate("/change-password");
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted transition-colors"
                >
                  <KeyRound className="h-4 w-4 text-muted-foreground" />
                  Change Password
                </button>

                <div className="border-t border-border" />

                {/* Sign Out */}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-muted transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
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
          {/* Overlay header */}
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

            {/* Title */}
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

            {/* All Problems button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(false);
                navigate("/problems");
              }}
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
                { id: "dsa",       label: "All Topics",     icon: Brain },
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
                    onClick={() => {
                      setMenuOpen(false);
                      navigate(`/problems?category=${encodeURIComponent(cat)}`);
                    }}
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
                  <CompanyCard
                    key={company}
                    company={company}
                    onClick={() => {
                      setMenuOpen(false);
                      navigate(`/problems?company=${encodeURIComponent(company)}`);
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ══════════════ BODY — compiler + AI + Performance ══════════════ */}
      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-hidden">
            <CodeCompiler
              onCodeChange={(code, lang) => {
                setCurrentCode(code);
                setCurrentLanguage(lang);
              }}
              onToggleAI={() => {
                setIsAiOpen((p) => !p);
                if (perfOpen) setPerfOpen(false); // close perf panel when opening AI
              }}
              onErrorChange={(err) => setCurrentErrors(err)}
              userEmail={user.email}
            />
          </div>

          <AIChatPanel
            isOpen={isAiOpen}
            onClose={() => setIsAiOpen(false)}
            code={currentCode}
            errors={currentErrors}
          />

          {/* ← NEW: UserPerformance panel — slides in from the right */}
          {perfOpen && (
            <div
              className="shrink-0 border-l border-border overflow-y-auto bg-background"
              style={{ width: 360 }}
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card sticky top-0 z-10">
                <div className="flex items-center gap-2">
                  <BarChart2 className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">My Performance</span>
                </div>
                <button
                  onClick={() => setPerfOpen(false)}
                  className="p-1 rounded hover:bg-muted transition-colors text-muted-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* UserPerformance component renders all stats + charts */}
              <div className="p-4">
                <UserPerformance />
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}