// src/pages/Dashboard.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  User, ChevronDown, Menu, X, Home, BookOpen,
  Building2, GraduationCap, Brain, Cpu, Network, Database,
  PieChart, TrendingUp, Award, ChevronRight, Save, LogOut
} from "lucide-react";
import { problems, getDailyChallenge } from "@/data/problems";
import { useAuth } from "../hooks/useAuth";
import CodeCompiler from "../components/CodeCompiler";
import AIChatPanel from "../components/AIChatPanel";
import { toast } from "sonner";

export default function Dashboard() {
  console.log("✅ Dashboard rendering");

  const { user, signOut } = useAuth();
  const daily = getDailyChallenge();

  const [aiPanelWidth, setAiPanelWidth] = useState(400);
  const [isResizingPanel, setIsResizingPanel] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);

  const [currentCode, setCurrentCode] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("java");
  const [isSaving, setIsSaving] = useState(false);

  const [dsaOpen, setDsaOpen] = useState(true);
  const [placementOpen, setPlacementOpen] = useState(true);
  const [companyOpen, setCompanyOpen] = useState(true);

  useEffect(() => {
    console.log("📊 Dashboard mounted successfully");
    console.log("👤 Current user:", user?.email);
  }, [user]);

  // ── AI panel horizontal resize ──────────────────────────────────────────────
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isResizingPanel) return;
      const newWidth = window.innerWidth - e.clientX - 280;
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
    await signOut();
    window.location.href = "/login";
  };

  const handleSave = async () => {
    if (!currentCode.trim()) {
      toast.error("Nothing to save!");
      return;
    }
    setIsSaving(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/code/save`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userEmail: user?.email,
            code: currentCode,
            language: currentLanguage,
          }),
        }
      );
      if (!response.ok) throw new Error("Save failed");
      toast.success("Code saved successfully!");
    } catch {
      toast.error("Failed to save code.");
    } finally {
      setIsSaving(false);
    }
  };

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <div className="flex justify-between items-center px-4 py-3 bg-card border-b border-border shrink-0">
        {/* Hamburger */}
        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="p-2 rounded-md hover:bg-muted transition-colors"
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Save */}
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-md text-sm transition-colors"
        >
          <Save className="h-4 w-4" />
          {isSaving ? "Saving…" : "Save"}
        </button>

        {/* User dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-md text-sm"
          >
            <User className="h-4 w-4" />
            {user?.email}
            <ChevronDown className="h-4 w-4" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg z-50">
              <div className="p-3 text-sm text-muted-foreground border-b">
                {user.email}
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-3 py-2 text-red-500 hover:bg-muted transition-colors text-sm"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── DAILY CHALLENGE BANNER ─────────────────────────────────────────── */}
      <div className="px-4 py-2 bg-card border-b border-border shrink-0">
        <p className="text-sm font-medium">
          🔥 Daily Challenge:{" "}
          <span className="text-primary">{daily.title}</span>
        </p>
      </div>

      {/* ── BODY ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden">

        {/* ── SIDEBAR ──────────────────────────────────────────────────────── */}
        {sidebarOpen && (
          <aside className="w-64 shrink-0 bg-card border-r border-border flex flex-col overflow-y-auto z-40">
            <nav className="flex-1 p-3 space-y-1 text-sm">

              <Link
                to="/dashboard"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
              >
                <Home className="h-4 w-4" /> Home
              </Link>

              {/* DSA */}
              <div>
                <button
                  onClick={() => setDsaOpen((p) => !p)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-muted transition-colors font-medium"
                >
                  <span className="flex items-center gap-2">
                    <Brain className="h-4 w-4" /> DSA
                  </span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${dsaOpen ? "rotate-90" : ""}`}
                  />
                </button>
                {dsaOpen && (
                  <div className="ml-6 mt-1 space-y-1 text-muted-foreground">
                    <Link to="/problems/arrays" className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-muted hover:text-foreground transition-colors">
                      <Database className="h-3.5 w-3.5" /> Arrays
                    </Link>
                    <Link to="/problems/graphs" className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-muted hover:text-foreground transition-colors">
                      <Network className="h-3.5 w-3.5" /> Graphs
                    </Link>
                    <Link to="/problems/dp" className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-muted hover:text-foreground transition-colors">
                      <Cpu className="h-3.5 w-3.5" /> Dynamic Programming
                    </Link>
                  </div>
                )}
              </div>

              {/* Placement Prep */}
              <div>
                <button
                  onClick={() => setPlacementOpen((p) => !p)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-muted transition-colors font-medium"
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" /> Placement Prep
                  </span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${placementOpen ? "rotate-90" : ""}`}
                  />
                </button>
                {placementOpen && (
                  <div className="ml-6 mt-1 space-y-1 text-muted-foreground">
                    <Link to="/aptitude" className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-muted hover:text-foreground transition-colors">
                      <TrendingUp className="h-3.5 w-3.5" /> Aptitude
                    </Link>
                    <Link to="/mock" className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-muted hover:text-foreground transition-colors">
                      <BookOpen className="h-3.5 w-3.5" /> Mock Tests
                    </Link>
                  </div>
                )}
              </div>

              {/* Companies */}
              <div>
                <button
                  onClick={() => setCompanyOpen((p) => !p)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-muted transition-colors font-medium"
                >
                  <span className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" /> Companies
                  </span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${companyOpen ? "rotate-90" : ""}`}
                  />
                </button>
                {companyOpen && (
                  <div className="ml-6 mt-1 space-y-1 text-muted-foreground">
                    <Link to="/companies/google" className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-muted hover:text-foreground transition-colors">
                      <PieChart className="h-3.5 w-3.5" /> Google
                    </Link>
                    <Link to="/companies/amazon" className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-muted hover:text-foreground transition-colors">
                      <Award className="h-3.5 w-3.5" /> Amazon
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </aside>
        )}

        {/* ── COMPILER + AI PANEL ───────────────────────────────────────────── */}
        <div className="flex flex-1 overflow-hidden">

          {/* Compiler area */}
          <div
            className="flex-1 overflow-hidden"
            style={isAiOpen ? { width: `calc(100% - ${aiPanelWidth}px)` } : undefined}
          >
            <CodeCompiler
              onCodeChange={(code, lang) => {
                setCurrentCode(code);
                setCurrentLanguage(lang);
              }}
              onToggleAI={() => setIsAiOpen((prev) => !prev)}
            />
          </div>

          {/* Drag handle between compiler & AI panel */}
          {isAiOpen && (
            <div
              className="w-1 bg-border hover:bg-primary cursor-col-resize shrink-0"
              onMouseDown={(e) => {
                e.preventDefault();
                setIsResizingPanel(true);
              }}
            />
          )}

          {/* AI Panel */}
          {isAiOpen && (
            <div
              className="shrink-0 border-l border-border overflow-hidden"
              style={{ width: aiPanelWidth }}
            >
              <AIChatPanel isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}