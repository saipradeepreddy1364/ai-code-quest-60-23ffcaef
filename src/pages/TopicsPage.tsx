// src/pages/TopicsPage.tsx
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Database, BookOpen, PieChart, Network, Cpu, Brain,
  Award, TrendingUp, Building2, Code2, User, ChevronDown,
  LogOut, Settings, Save, KeyRound, X, Eye, EyeOff,
  Loader2, Search, Flame, Trophy
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { problems, getCompanies } from "@/data/problems";

// ── Password-change modal (same as Dashboard) ──────────────────────────────
function ChangePasswordModal({ onClose }: { onClose: () => void }) {
  const [next, setNext]       = useState("");
  const [confirm, setConfirm] = useState("");
  const [showNext, setShowNext]       = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (next !== confirm) { toast.error("Passwords do not match"); return; }
    if (next.length < 6)  { toast.error("Minimum 6 characters"); return; }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: next });
    setLoading(false);
    if (error) { toast.error(error.message); return; }
    toast.success("Password updated!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-card border border-border rounded-xl shadow-xl w-full max-w-sm p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <KeyRound className="h-4 w-4 text-primary" /> Change Password
          </div>
          <button onClick={onClose} className="p-1 rounded hover:bg-muted"><X className="h-4 w-4" /></button>
        </div>
        <div className="space-y-3">
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">New Password</label>
            <div className="relative">
              <input type={showNext ? "text" : "password"} value={next} onChange={(e) => setNext(e.target.value)}
                className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm pr-9 focus:outline-none focus:ring-1 focus:ring-primary" placeholder="••••••••" />
              <button type="button" onClick={() => setShowNext(p => !p)} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground">
                {showNext ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Confirm Password</label>
            <div className="relative">
              <input type={showConfirm ? "text" : "password"} value={confirm} onChange={(e) => setConfirm(e.target.value)}
                className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm pr-9 focus:outline-none focus:ring-1 focus:ring-primary" placeholder="••••••••" />
              <button type="button" onClick={() => setShowConfirm(p => !p)} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground">
                {showConfirm ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>
        </div>
        <button onClick={handleSubmit} disabled={loading}
          className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm disabled:opacity-60">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          {loading ? "Updating…" : "Update Password"}
        </button>
      </div>
    </div>
  );
}

// ── DSA topic cards ────────────────────────────────────────────────────────
const dsaTopics = [
  { label: "Arrays",              icon: Database,   color: "from-blue-500/20 to-blue-600/10",   border: "border-blue-500/30" },
  { label: "Strings",             icon: BookOpen,   color: "from-emerald-500/20 to-emerald-600/10", border: "border-emerald-500/30" },
  { label: "2D Arrays",           icon: PieChart,   color: "from-violet-500/20 to-violet-600/10",   border: "border-violet-500/30" },
  { label: "Linked Lists",        icon: Network,    color: "from-orange-500/20 to-orange-600/10",   border: "border-orange-500/30" },
  { label: "Trees",               icon: Cpu,        color: "from-green-500/20 to-green-600/10",     border: "border-green-500/30" },
  { label: "Graphs",              icon: Network,    color: "from-cyan-500/20 to-cyan-600/10",       border: "border-cyan-500/30" },
  { label: "Dynamic Programming", icon: Brain,      color: "from-pink-500/20 to-pink-600/10",       border: "border-pink-500/30" },
  { label: "Stacks",              icon: Database,   color: "from-yellow-500/20 to-yellow-600/10",   border: "border-yellow-500/30" },
  { label: "Queues",              icon: Database,   color: "from-red-500/20 to-red-600/10",         border: "border-red-500/30" },
  { label: "Heap",                icon: Award,      color: "from-indigo-500/20 to-indigo-600/10",   border: "border-indigo-500/30" },
  { label: "Binary Search",       icon: Brain,      color: "from-teal-500/20 to-teal-600/10",       border: "border-teal-500/30" },
  { label: "Patterns",            icon: Award,      color: "from-rose-500/20 to-rose-600/10",       border: "border-rose-500/30" },
  { label: "Numbers",             icon: TrendingUp, color: "from-amber-500/20 to-amber-600/10",     border: "border-amber-500/30" },
  { label: "DSA",                 icon: Cpu,        color: "from-lime-500/20 to-lime-600/10",       border: "border-lime-500/30" },
];

// ── Main component ─────────────────────────────────────────────────────────
export default function TopicsPage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen]           = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [search, setSearch]                       = useState("");
  const [stats, setStats] = useState({ solved: 0, saved: 0 });

  const companies = getCompanies();

  // Fetch real counts from Supabase
  useEffect(() => {
    if (!user) return;
    (async () => {
      const [{ count: solved }, { count: saved }] = await Promise.all([
        supabase.from("user_progress").select("*", { count: "exact", head: true }).eq("user_id", user.id).eq("status", "solved"),
        supabase.from("saved_codes").select("*", { count: "exact", head: true }).eq("user_id", user.id),
      ]);
      setStats({ solved: solved ?? 0, saved: saved ?? 0 });
    })();
  }, [user]);

  const handleLogout = async () => {
    setDropdownOpen(false);
    await signOut();
    navigate("/login", { replace: true });
  };

  const filteredTopics = dsaTopics.filter(t =>
    t.label.toLowerCase().includes(search.toLowerCase())
  );

  const filteredCompanies = companies.filter(c =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  if (!user) return (
    <div className="h-screen flex items-center justify-center text-sm text-muted-foreground">Loading...</div>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-3 bg-card border-b border-border shrink-0 sticky top-0 z-30">
        <button onClick={() => navigate("/dashboard")} className="flex items-center gap-2 text-sm font-semibold hover:opacity-80">
          <Code2 className="h-5 w-5 text-primary" />
          <span className="text-foreground">Code Arena</span>
        </button>

        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search topics or companies…"
            className="w-full bg-background border border-border rounded-md pl-9 pr-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="relative">
          <button onClick={() => setDropdownOpen(p => !p)}
            className="flex items-center gap-2 px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-sm">
            <User className="h-4 w-4" />
            <span className="max-w-[140px] truncate">{user.email}</span>
            <ChevronDown className="h-4 w-4 shrink-0" />
          </button>
          {dropdownOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)} />
              <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg z-50">
                <div className="p-3 text-xs text-muted-foreground border-b truncate">{user.email}</div>
                <button onClick={() => { setDropdownOpen(false); navigate("/dashboard"); }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted transition-colors">
                  <Code2 className="h-4 w-4" /> Compiler
                </button>
                <button onClick={() => { setDropdownOpen(false); navigate("/problems"); }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted transition-colors">
                  <BookOpen className="h-4 w-4" /> All Problems
                </button>
                <button onClick={() => { setDropdownOpen(false); navigate("/saved"); }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted transition-colors">
                  <Save className="h-4 w-4" /> Saved Codes
                </button>
                <button onClick={() => { setDropdownOpen(false); setShowPasswordModal(true); }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted transition-colors">
                  <Settings className="h-4 w-4" /> Settings
                </button>
                <button onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-muted transition-colors">
                  <LogOut className="h-4 w-4" /> Logout
                </button>
              </div>
            </>
          )}
        </div>
      </header>

      <main className="flex-1 px-6 py-8 max-w-7xl mx-auto w-full">

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-4">
            <div className="h-11 w-11 rounded-full bg-green-500/15 flex items-center justify-center">
              <Trophy className="h-5 w-5 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">{stats.solved}</div>
              <div className="text-xs text-muted-foreground">Problems Solved</div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-4">
            <div className="h-11 w-11 rounded-full bg-blue-500/15 flex items-center justify-center">
              <Save className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">{stats.saved}</div>
              <div className="text-xs text-muted-foreground">Codes Saved</div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-4">
            <div className="h-11 w-11 rounded-full bg-orange-500/15 flex items-center justify-center">
              <Flame className="h-5 w-5 text-orange-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">{problems.length}</div>
              <div className="text-xs text-muted-foreground">Total Problems</div>
            </div>
          </div>
        </div>

        {/* DSA Topics */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">DSA Topics</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3">
            {filteredTopics.map(({ label, icon: Icon, color, border }) => {
              const count = problems.filter(p => p.category === label).length;
              return (
                <button
                  key={label}
                  onClick={() => navigate(`/problems?category=${encodeURIComponent(label)}`)}
                  className={`bg-gradient-to-br ${color} border ${border} rounded-xl p-4 flex flex-col items-start gap-2 hover:scale-105 transition-transform text-left`}
                >
                  <Icon className="h-5 w-5 text-foreground/70" />
                  <div className="text-sm font-medium text-foreground leading-tight">{label}</div>
                  <div className="text-xs text-muted-foreground">{count} problems</div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Companies */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">Company-wise</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredCompanies.map((company) => {
              const count = problems.filter(p => p.company_tags.includes(company)).length;
              return (
                <button
                  key={company}
                  onClick={() => navigate(`/problems?company=${encodeURIComponent(company)}`)}
                  className="bg-card border border-border rounded-xl p-4 flex flex-col items-start gap-2 hover:bg-muted/50 hover:border-primary/40 transition-colors text-left"
                >
                  <Building2 className="h-5 w-5 text-primary/70" />
                  <div className="text-sm font-medium text-foreground">{company}</div>
                  <div className="text-xs text-muted-foreground">{count} problems</div>
                </button>
              );
            })}
          </div>
        </section>
      </main>

      {showPasswordModal && <ChangePasswordModal onClose={() => setShowPasswordModal(false)} />}
    </div>
  );
}