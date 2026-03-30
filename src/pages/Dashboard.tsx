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
  const [currentCode, setCurrentCode] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("java");
  const [isSaving, setIsSaving] = useState(false);
  
  // Sidebar dropdown states
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

  // Categories data
  const categories = [
    { name: 'Arrays', count: 42, icon: Database },
    { name: 'Strings', count: 37, icon: Code2 },
    { name: 'Linked Lists', count: 36, icon: Cpu },
    { name: 'Dynamic Programming', count: 37, icon: Brain },
    { name: 'Trees', count: 36, icon: Network },
    { name: 'Graphs', count: 35, icon: Network },
    { name: 'Binary Search', count: 35, icon: Code2 },
    { name: 'Stacks', count: 34, icon: Code2 },
    { name: 'Hashing', count: 34, icon: Database },
    { name: 'Greedy', count: 34, icon: Brain },
  ];

  const placementCategories = [
    { name: 'Aptitude', count: 34, icon: Brain },
    { name: 'Logical Reasoning', count: 34, icon: Brain },
    { name: 'Technical', count: 50, icon: Code2 },
    { name: 'DBMS', count: 34, icon: Database },
    { name: 'Operating Systems', count: 34, icon: Cpu },
    { name: 'Computer Networks', count: 34, icon: Network },
    { name: 'OOP', count: 34, icon: Code2 },
  ];

  const companies = [
    { name: 'Google', count: 120, icon: Building2 },
    { name: 'Amazon', count: 150, icon: Building2 },
    { name: 'Microsoft', count: 100, icon: Building2 },
    { name: 'Facebook', count: 80, icon: Building2 },
    { name: 'Apple', count: 70, icon: Building2 },
    { name: 'TCS', count: 200, icon: Building2 },
    { name: 'Infosys', count: 180, icon: Building2 },
    { name: 'Wipro', count: 160, icon: Building2 },
  ];

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
      className="h-full min-h-screen bg-background"
      onMouseMove={resize}
      onMouseUp={stopResizing}
      onMouseLeave={stopResizing}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6 p-4 bg-card border border-border rounded-lg">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex items-center gap-2 px-3 py-2 bg-surface hover:bg-surface-hover rounded-lg transition-colors"
        >
          <Menu className="h-5 w-5 text-foreground" />
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${sidebarOpen ? 'rotate-180' : ''}`} />
          <span className="text-sm font-medium text-foreground hidden sm:block">Menu</span>
        </button>

        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-all shadow-md"
          >
            <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-medium">{user?.email || 'User'}</span>
            <ChevronDown className="h-4 w-4" />
          </button>

          {dropdownOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)} />
              <div className="absolute right-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg z-50">
                <div className="p-3 border-b border-border">
                  <p className="text-xs text-muted-foreground">Signed in as</p>
                  <p className="text-sm font-medium text-foreground truncate">{user?.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors rounded-b-lg"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Sidebar — unchanged */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-card border-r border-border transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 border-b border-border flex justify-between items-center">
          <h2 className="text-lg font-semibold text-foreground">Navigation</h2>
          <button onClick={() => setSidebarOpen(false)} className="p-2 hover:bg-surface-hover rounded-md transition-colors">
            <X className="h-5 w-5 text-foreground" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <Link to="/" className="flex items-center gap-3 px-3 py-2 text-foreground hover:bg-surface-hover rounded-md transition-colors">
              <Home className="h-5 w-5" /><span>Home</span>
            </Link>
            <Link to="/problems" className="flex items-center gap-3 px-3 py-2 text-foreground hover:bg-surface-hover rounded-md transition-colors">
              <BookOpen className="h-5 w-5" /><span>All Problems</span>
            </Link>
            <Link to="/analytics" className="flex items-center gap-3 px-3 py-2 text-foreground hover:bg-surface-hover rounded-md transition-colors">
              <PieChart className="h-5 w-5" /><span>Analytics</span>
            </Link>
            {/* ✅ Added Saved Codes link */}
            <Link to="/saved-codes" className="flex items-center gap-3 px-3 py-2 text-foreground hover:bg-surface-hover rounded-md transition-colors">
              <Save className="h-5 w-5" /><span>Saved Codes</span>
            </Link>
          </div>

          <div className="border border-border rounded-lg">
            <button onClick={() => setDsaOpen(!dsaOpen)} className="w-full flex items-center justify-between p-3 bg-surface-hover rounded-t-lg">
              <div className="flex items-center gap-2"><Brain className="h-4 w-4 text-primary" /><span className="font-medium text-foreground">DSA Problems</span></div>
              {dsaOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>
            {dsaOpen && (
              <div className="p-2 space-y-1 max-h-60 overflow-y-auto">
                {categories.map((cat) => (
                  <Link key={cat.name} to={`/problems?category=${encodeURIComponent(cat.name)}`} className="flex items-center justify-between p-2 rounded-md hover:bg-surface-hover text-foreground">
                    <div className="flex items-center gap-2"><cat.icon className="h-4 w-4" /><span className="text-sm">{cat.name}</span></div>
                    <span className="text-xs bg-muted px-2 py-1 rounded-full">{cat.count}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="border border-border rounded-lg">
            <button onClick={() => setPlacementOpen(!placementOpen)} className="w-full flex items-center justify-between p-3 bg-surface-hover rounded-t-lg">
              <div className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-primary" /><span className="font-medium text-foreground">Placement</span></div>
              {placementOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>
            {placementOpen && (
              <div className="p-2 space-y-1 max-h-60 overflow-y-auto">
                {placementCategories.map((cat) => (
                  <Link key={cat.name} to={`/problems?placement=${encodeURIComponent(cat.name)}`} className="flex items-center justify-between p-2 rounded-md hover:bg-surface-hover text-foreground">
                    <div className="flex items-center gap-2"><cat.icon className="h-4 w-4" /><span className="text-sm">{cat.name}</span></div>
                    <span className="text-xs bg-muted px-2 py-1 rounded-full">{cat.count}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="border border-border rounded-lg">
            <button onClick={() => setCompanyOpen(!companyOpen)} className="w-full flex items-center justify-between p-3 bg-surface-hover rounded-t-lg">
              <div className="flex items-center gap-2"><Building2 className="h-4 w-4 text-primary" /><span className="font-medium text-foreground">Company-wise</span></div>
              {companyOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>
            {companyOpen && (
              <div className="p-2 space-y-1 max-h-60 overflow-y-auto">
                {companies.map((company) => (
                  <Link key={company.name} to={`/problems?company=${encodeURIComponent(company.name)}`} className="flex items-center justify-between p-2 rounded-md hover:bg-surface-hover text-foreground">
                    <div className="flex items-center gap-2"><company.icon className="h-4 w-4" /><span className="text-sm">{company.name}</span></div>
                    <span className="text-xs bg-muted px-2 py-1 rounded-full">{company.count}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="border border-border rounded-lg p-3">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="font-medium text-foreground">Your Stats</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Problems Solved</span>
                <span className="text-foreground font-medium">0 / {totalProblems}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Success Rate</span>
                <span className="text-foreground font-medium">0%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Current Streak</span>
                <span className="text-foreground font-medium flex items-center gap-1">
                  <Award className="h-4 w-4 text-yellow-500" />0 days
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-30" onClick={() => setSidebarOpen(false)} />}

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-80' : ''}`}>
        {/* Daily Challenge */}
        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-medium text-foreground">Daily Challenge</h2>
            </div>
            <Link to={`/problem/${daily.id}`} className="text-sm text-primary hover:underline flex items-center gap-1">
              View all <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-foreground font-medium">{daily.title}</p>
              <p className="text-sm text-muted-foreground">{daily.category} · {daily.difficulty}</p>
            </div>
            <Link to={`/problem/${daily.id}`} className="flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:opacity-90">
              Solve <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Compiler + AI Panel */}
        <div className="flex gap-4">
          <div className="transition-all duration-300 ease-in-out" style={{ width: `calc(100% - ${aiPanelWidth + 16}px)` }}>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              {/* ✅ Header: removed Run button, Save button now works */}
              <div className="p-4 border-b border-border bg-surface flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  <h2 className="font-medium text-foreground">Code Compiler</h2>
                </div>
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-surface-hover transition-colors disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  {isSaving ? "Saving..." : "Save"}
                </button>
              </div>
              {/* ✅ CodeCompiler now reports code changes up */}
              <CodeCompiler onCodeChange={(code, lang) => {
                setCurrentCode(code);
                setCurrentLanguage(lang);
              }} />
            </div>
          </div>

          {/* AI Panel — unchanged */}
          <div className="relative bg-card border border-border rounded-lg overflow-hidden" style={{ width: aiPanelWidth }}>
            <div className="absolute left-0 top-0 w-1 h-full cursor-col-resize hover:bg-primary/50 active:bg-primary transition-colors z-10" onMouseDown={startResizing} />
            <div className="h-full flex flex-col">
              <div className="p-3 border-b border-border bg-surface flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-primary" />
                  <h3 className="font-medium text-foreground">AI Assistant</h3>
                </div>
              </div>
              <div className="flex-1 overflow-hidden">
                <AIChatPanel isOpen={true} onClose={() => {}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}