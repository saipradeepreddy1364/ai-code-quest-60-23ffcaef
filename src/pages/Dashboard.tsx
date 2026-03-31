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

  // ✅ AI control
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
    } catch {
      toast.error("Failed to save code.");
    } finally {
      setIsSaving(false);
    }
  };

  if (!user) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div 
      className="h-screen bg-background"
      onMouseMove={resize}
      onMouseUp={stopResizing}
      onMouseLeave={stopResizing}
    >

      {/* HEADER (RESTORED USER DROPDOWN) */}
      <div className="flex justify-between items-center mb-3 p-4 bg-card border border-border rounded-lg">

        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu />
        </button>

        {/* 👤 USER DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 px-3 py-2 bg-primary text-white rounded-md"
          >
            <User className="h-4 w-4" />
            {user?.email}
            <ChevronDown className="h-4 w-4" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-card border rounded shadow">
              <div className="p-3 text-sm">{user.email}</div>
              <button onClick={handleLogout} className="w-full text-left px-3 py-2 text-red-500">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* DAILY */}
      <div className="bg-card border rounded p-3 mb-3">
        <p>{daily.title}</p>
      </div>

      {/* MAIN */}
      <div className="flex gap-4 h-[calc(100vh-140px)]">

        {/* COMPILER */}
        <div
          style={{ width: isAiOpen ? `calc(100% - ${aiPanelWidth}px)` : "100%" }}
        >
          <div className="h-full">
            <CodeCompiler
              onCodeChange={(code, lang) => {
                setCurrentCode(code);
                setCurrentLanguage(lang);
              }}
              onToggleAI={() => setIsAiOpen(prev => !prev)}
            />
          </div>
        </div>

        {/* AI PANEL */}
        {isAiOpen && (
          <div style={{ width: aiPanelWidth }}>
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