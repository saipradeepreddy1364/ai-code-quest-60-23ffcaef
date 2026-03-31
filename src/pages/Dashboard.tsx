// src/pages/Dashboard.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Code2, Flame, Trophy, BarChart3, ArrowRight, Bot,
  User, LogOut, ChevronDown, Menu, X, Home, BookOpen, 
  Building2, GraduationCap, Brain, Cpu, Network, Database,
  PieChart, TrendingUp, Award, ChevronRight, Save
} from "lucide-react";
import { problems, getDailyChallenge } from "@/data/problems";
import { useAuth } from "../hooks/useAuth";
import CodeCompiler from "../components/CodeCompiler";
import AIChatPanel from "../components/AIChatPanel";
import { toast } from "sonner";

export default function Dashboard() {
  console.log('✅ Dashboard rendering');
  
  const { user, signOut } = useAuth();
  const daily = getDailyChallenge();
  const totalProblems = problems.length;

  const [aiPanelWidth, setAiPanelWidth] = useState(400);
  const [isResizing, setIsResizing] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ✅ NEW: control AI open/close
  const [isAiOpen, setIsAiOpen] = useState(false);

  const [currentCode, setCurrentCode] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("java");
  const [isSaving, setIsSaving] = useState(false);
  
  const [dsaOpen, setDsaOpen] = useState(true);
  const [placementOpen, setPlacementOpen] = useState(true);
  const [companyOpen, setCompanyOpen] = useState(true);

  useEffect(() => {
    console.log('📊 Dashboard mounted successfully');
    console.log('👤 Current user:', user?.email);
    return () => {
      console.log('📊 Dashboard unmounting');
    };
  }, [user]);

  const startResizing = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  };

  const stopResizing = () => setIsResizing(false);

  const resize = (e: React.MouseEvent) => {
    if (isResizing) {
      const newWidth = window.innerWidth - e.clientX - 280;
      if (newWidth >= 300 && newWidth <= 800) {
        setAiPanelWidth(newWidth);
      }
    }
  };

  const handleLogout = async () => {
    console.log('🚪 Logging out...');
    await signOut();
    window.location.href = '/login';
  };

  const handleSave = async () => {
    if (!currentCode.trim()) {
      toast.error("Nothing to save!");
      return;
    }
    setIsSaving(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/code/save`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userEmail: user?.email,
          code: currentCode,
          language: currentLanguage,
        })
      });
      if (!response.ok) throw new Error("Save failed");
      toast.success("Code saved successfully!");
    } catch (e) {
      toast.error("Failed to save code. Try again.");
    } finally {
      setIsSaving(false);
    }
  };

  // ================= UI =================

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-foreground">Loading Dashboard...</h2>
          <p className="text-muted-foreground mt-2">Please wait while we set up your workspace</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="h-screen bg-background"
      onMouseMove={resize}
      onMouseUp={stopResizing}
      onMouseLeave={stopResizing}
    >

      {/* Header */}
      <div className="flex justify-between items-center mb-3 p-4 bg-card border border-border rounded-lg">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex items-center gap-2 px-3 py-2 bg-surface hover:bg-surface-hover rounded-lg transition-colors"
        >
          <Menu className="h-5 w-5 text-foreground" />
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${sidebarOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* ✅ AI OPEN BUTTON */}
        <button
          onClick={() => setIsAiOpen(true)}
          className="flex items-center gap-2 px-3 py-2 bg-primary text-white rounded-md"
        >
          <Bot className="h-4 w-4" />
          AI
        </button>

        <button onClick={handleLogout}>
          <LogOut />
        </button>
      </div>

      {/* Daily Challenge (reduced height) */}
      <div className="bg-card border border-border rounded-lg p-3 mb-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">{daily.title}</p>
            <p className="text-xs text-muted-foreground">
              {daily.category} · {daily.difficulty}
            </p>
          </div>
          <Link to={`/problem/${daily.id}`} className="text-sm text-primary">
            Solve
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-4 h-[calc(100vh-140px)]">

        {/* Compiler */}
        <div
          className="transition-all duration-300 ease-in-out"
          style={{ width: isAiOpen ? `calc(100% - ${aiPanelWidth}px)` : "100%" }}
        >
          <div className="bg-card border border-border rounded-lg overflow-hidden h-full">
            
            <div className="p-4 border-b border-border bg-surface flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                <h2 className="font-medium text-foreground">Code Compiler</h2>
              </div>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-secondary rounded-md"
              >
                <Save className="h-4 w-4" />
                {isSaving ? "Saving..." : "Save"}
              </button>
            </div>

            <CodeCompiler onCodeChange={(code, lang) => {
              setCurrentCode(code);
              setCurrentLanguage(lang);
            }} />
          </div>
        </div>

        {/* ✅ AI PANEL (ONLY WHEN OPEN) */}
        {isAiOpen && (
          <div
            className="relative bg-card border border-border rounded-lg overflow-hidden"
            style={{ width: aiPanelWidth }}
          >
            <div
              className="absolute left-0 top-0 w-1 h-full cursor-col-resize"
              onMouseDown={startResizing}
            />

            <AIChatPanel
              isOpen={isAiOpen}
              onClose={() => setIsAiOpen(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}