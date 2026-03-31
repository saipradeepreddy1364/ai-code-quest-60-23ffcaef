// src/pages/Dashboard.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  User, ChevronDown, Menu, X, Home, BookOpen,
  Building2, GraduationCap, Brain, Cpu, Network, Database,
  PieChart, TrendingUp, Award, ChevronRight, LogOut, Code2
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import CodeCompiler from "../components/CodeCompiler";
import AIChatPanel from "../components/AIChatPanel";

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const [aiPanelWidth, setAiPanelWidth] = useState(400);
  const [isResizingPanel, setIsResizingPanel] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [currentCode, setCurrentCode] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("java");
  const [dsaOpen, setDsaOpen] = useState(true);
  const [placementOpen, setPlacementOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  // AI panel horizontal resize
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isResizingPanel) return;
      const newWidth = window.innerWidth - e.clientX - (sidebarOpen ? 256 : 0);
      if (newWidth >= 300 && newWidth <= 800) setAiPanelWidth(newWidth);
    };
    const onUp = () => setIsResizingPanel(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [isResizingPanel, sidebarOpen]);

  const handleLogout = async () => {
    setDropdownOpen(false);
    await signOut();
    navigate("/login", { replace: true });
  };

  // ✅ KEY FIX: use navigate() instead of <Link> so clicking nav items
  // never unmounts the auth context or triggers the login-page logout effect
  const goTo = (path: string) => {
    setSidebarOpen(false);
    navigate(path);
  };

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center text-sm text-muted-foreground">
        Loading...
      </div>
    );
  }

  const dsaTopics = [
    { label: "Arrays",              icon: Database  },
    { label: "Strings",             icon: BookOpen  },
    { label: "2D Arrays",           icon: PieChart  },
    { label: "Linked Lists",        icon: Network   },
    { label: "Trees",               icon: Cpu       },
    { label: "Graphs",              icon: Network   },
    { label: "Dynamic Programming", icon: Brain     },
    { label: "Stacks",              icon: Database  },
    { label: "Queues",              icon: Database  },
    { label: "Heap",                icon: Award     },
    { label: "Binary Search",       icon: Brain     },
    { label: "Patterns",            icon: Award     },
    { label: "Numbers",             icon: TrendingUp},
    { label: "DSA",                 icon: Cpu       },
  ];

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">

      {/* HEADER */}
      <header className="flex justify-between items-center px-4 py-2.5 bg-card border-b border-border shrink-0">
        <button
          onClick={() => setSidebarOpen((p) => !p)}
          className="p-2 rounded-md hover:bg-muted transition-colors"
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className="flex items-center gap-2 text-sm font-semibold select-none">
          <Code2 className="h-5 w-5 text-primary" />
          CodeArena
        </div>

        {/* User dropdown */}
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

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden">

        {/* SIDEBAR */}
        {sidebarOpen && (
          <aside className="w-64 shrink-0 bg-card border-r border-border flex flex-col overflow-y-auto z-40">
            <nav className="flex-1 p-3 space-y-1 text-sm">

              <button onClick={() => goTo("/dashboard")}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors text-left">
                <Home className="h-4 w-4" /> Home
              </button>

              <button onClick={() => goTo("/problems")}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors text-left">
                <BookOpen className="h-4 w-4" /> All Problems
              </button>

              {/* DSA Topics */}
              <div>
                <button
                  onClick={() => setDsaOpen((p) => !p)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-muted transition-colors font-medium"
                >
                  <span className="flex items-center gap-2"><Brain className="h-4 w-4" /> DSA Topics</span>
                  <ChevronRight className={`h-4 w-4 transition-transform ${dsaOpen ? "rotate-90" : ""}`} />
                </button>
                {dsaOpen && (
                  <div className="ml-6 mt-1 space-y-0.5 text-muted-foreground">
                    {dsaTopics.map(({ label, icon: Icon }) => (
                      <button
                        key={label}
                        onClick={() => goTo(`/problems?category=${encodeURIComponent(label)}`)}
                        className="w-full flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-muted hover:text-foreground transition-colors text-left text-xs"
                      >
                        <Icon className="h-3.5 w-3.5 shrink-0" /> {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Placement Prep */}
              <div>
                <button
                  onClick={() => setPlacementOpen((p) => !p)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-muted transition-colors font-medium"
                >
                  <span className="flex items-center gap-2"><GraduationCap className="h-4 w-4" /> Placement Prep</span>
                  <ChevronRight className={`h-4 w-4 transition-transform ${placementOpen ? "rotate-90" : ""}`} />
                </button>
                {placementOpen && (
                  <div className="ml-6 mt-1 space-y-0.5 text-muted-foreground">
                    <button onClick={() => goTo("/aptitude")} className="w-full flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-muted hover:text-foreground transition-colors text-left text-xs">
                      <TrendingUp className="h-3.5 w-3.5" /> Aptitude
                    </button>
                    <button onClick={() => goTo("/mock")} className="w-full flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-muted hover:text-foreground transition-colors text-left text-xs">
                      <BookOpen className="h-3.5 w-3.5" /> Mock Tests
                    </button>
                  </div>
                )}
              </div>

              {/* Companies */}
              <div>
                <button
                  onClick={() => setCompanyOpen((p) => !p)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-muted transition-colors font-medium"
                >
                  <span className="flex items-center gap-2"><Building2 className="h-4 w-4" /> Companies</span>
                  <ChevronRight className={`h-4 w-4 transition-transform ${companyOpen ? "rotate-90" : ""}`} />
                </button>
                {companyOpen && (
                  <div className="ml-6 mt-1 space-y-0.5 text-muted-foreground">
                    {["Google","Amazon","Microsoft","Meta","Flipkart","Oracle","Adobe","Goldman Sachs"].map((c) => (
                      <button key={c} onClick={() => goTo(`/problems?company=${encodeURIComponent(c)}`)}
                        className="w-full flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-muted hover:text-foreground transition-colors text-left text-xs">
                        <Building2 className="h-3.5 w-3.5" /> {c}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </aside>
        )}

        {/* COMPILER + AI */}
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