// src/pages/Analytics.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";
import { problems, getCategories } from "@/data/problems";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import {
  Loader2, BookOpen, Code2, BarChart2, CheckCircle2,
  ChevronLeft, Save, Copy, Trash2, Clock,
} from "lucide-react";
import { toast } from "sonner";

// ─── colours ────────────────────────────────────────────────────────────────
const DIFF_COLORS: Record<string, string> = {
  Easy:   "hsl(200, 100%, 50%)",
  Medium: "hsl(38, 92%, 50%)",
  Hard:   "hsl(0, 62%, 50%)",
};

const CAT_PIE_COLORS = [
  "#7C3AED","#2563EB","#059669","#D97706","#DC2626",
  "#0891B2","#65A30D","#EA580C","#9333EA","#0284C7",
  "#16A34A","#CA8A04","#B91C1C","#6D28D9","#0369A1",
];

const CAT_COLOR = "hsl(263, 70%, 65%)";

// ─── types ───────────────────────────────────────────────────────────────────
interface StatsData {
  total: number;
  byCategory: Record<string, number>;
  compilerRuns: number;
  solvedCount: number;
}

interface SavedCode {
  id: number;
  userEmail: string;
  code: string;
  language: string;
  savedAt: string;
}

// ─── helpers ─────────────────────────────────────────────────────────────────
const renderCustomLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, value,
}: {
  cx: number; cy: number; midAngle: number;
  innerRadius: number; outerRadius: number; value: number;
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  if (value === 0) return null;
  return (
    <text x={x} y={y} fill="white" textAnchor="middle"
      dominantBaseline="central" fontSize={11} fontWeight={600}>
      {value}
    </text>
  );
};

const tooltipStyle = {
  backgroundColor: "hsl(0,0%,11%)",
  border: "1px solid hsl(0,0%,20%)",
  borderRadius: "6px",
  color: "hsl(0,0%,88%)",
  fontSize: "12px",
};

type Tab = "overview" | "saved";

// ─── component ───────────────────────────────────────────────────────────────
export default function Analytics() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  // --- overview state ---
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);

  // --- saved codes state ---
  const [savedCodes, setSavedCodes] = useState<SavedCode[]>([]);
  const [savedLoading, setSavedLoading] = useState(false);
  const [savedFetched, setSavedFetched] = useState(false);

  // ── fetch overview stats ──────────────────────────────────────────────────
  useEffect(() => {
    const fetchStats = async () => {
      if (!user?.id) return;
      setLoading(true);
      try {
        const { data: savedData, error: savedError } = await supabase
          .from("saved_codes")
          .select("category, language, compiler_runs")
          .eq("user_id", user.id);

        if (savedError) throw savedError;

        const { data: solvedData, error: solvedError } = await supabase
          .from("user_progress")
          .select("problem_id")
          .eq("user_id", user.id)
          .eq("status", "solved");

        if (solvedError) throw solvedError;

        const byCategory: Record<string, number> = {};
        let totalRuns = 0;

        (savedData ?? []).forEach((row) => {
          if (row.category) byCategory[row.category] = (byCategory[row.category] ?? 0) + 1;
          totalRuns += row.compiler_runs ?? 0;
        });

        setStats({
          total: savedData?.length ?? 0,
          byCategory,
          compilerRuns: totalRuns,
          solvedCount: solvedData?.length ?? 0,
        });
      } catch (err) {
        console.error("Analytics fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [user?.id]);

  // ── fetch saved codes (lazy — only when tab opened) ───────────────────────
  useEffect(() => {
    if (activeTab !== "saved" || savedFetched || !user?.email) return;

    const fetchSavedCodes = async () => {
      setSavedLoading(true);
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/code/load/${encodeURIComponent(user.email!)}`
        );
        if (!res.ok) throw new Error("Failed to fetch saved codes");
        const data: SavedCode[] = await res.json();
        // Sort newest first
        setSavedCodes(data.sort((a, b) => new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime()));
        setSavedFetched(true);
      } catch {
        toast.error("Failed to load saved codes");
      } finally {
        setSavedLoading(false);
      }
    };

    fetchSavedCodes();
  }, [activeTab, savedFetched, user?.email]);

  const handleDelete = async (id: number) => {
    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/code/delete/${id}`, {
        method: "DELETE",
      });
      setSavedCodes((prev) => prev.filter((c) => c.id !== id));
      toast.success("Deleted successfully");
    } catch {
      toast.error("Failed to delete");
    }
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  // ── derived chart data ────────────────────────────────────────────────────
  const categories = getCategories();
  const totalSaved = stats?.total ?? 0;
  const categoriesCovered = Object.keys(stats?.byCategory ?? {}).length;

  const categoryData = categories.map((cat) => ({
    name: cat.length > 12 ? cat.slice(0, 12) + "…" : cat,
    fullName: cat,
    total: problems.filter((p) => p.category === cat).length,
    solved: stats?.byCategory[cat] ?? 0,
  }));

  const categorySolvedPieData = categories
    .map((cat, i) => ({
      name: cat,
      value: stats?.byCategory[cat] ?? 0,
      color: CAT_PIE_COLORS[i % CAT_PIE_COLORS.length],
    }))
    .filter((d) => d.value > 0);

  const diffData = [
    { name: "Easy",   value: problems.filter((p) => p.difficulty === "Easy").length },
    { name: "Medium", value: problems.filter((p) => p.difficulty === "Medium").length },
    { name: "Hard",   value: problems.filter((p) => p.difficulty === "Hard").length },
  ];

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* ── Back navigation ── */}
      <div className="flex items-center gap-1.5 mb-5">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          title="Go back"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>

      <h1 className="text-2xl font-semibold text-foreground mb-6">Analytics</h1>

      {/* ── Tab bar ── */}
      <div className="flex gap-1 mb-6 bg-surface border border-border rounded-lg p-1 w-fit">
        {(
          [
            { id: "overview", label: "Overview",    icon: BarChart2 },
            { id: "saved",    label: "Saved Codes", icon: Save      },
          ] as const
        ).map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === id
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>

      {/* ══════════════ OVERVIEW TAB ══════════════ */}
      {activeTab === "overview" && (
        <>
          {/* ── Summary cards ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-card border border-border rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Problems Saved</span>
              </div>
              <div className="text-3xl font-bold text-primary">
                {loading ? <Loader2 className="h-6 w-6 animate-spin" /> : totalSaved}
              </div>
              <div className="text-xs text-muted-foreground mt-1">out of {problems.length} available</div>
            </div>

            <div className="bg-card border border-border rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm text-muted-foreground">Problems Solved</span>
              </div>
              <div className="text-3xl font-bold text-green-500">
                {loading ? <Loader2 className="h-6 w-6 animate-spin" /> : (stats?.solvedCount ?? 0)}
              </div>
              <div className="text-xs text-muted-foreground mt-1">submitted successfully</div>
            </div>

            <div className="bg-card border border-border rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-4 w-4 text-foreground" />
                <span className="text-sm text-muted-foreground">Categories Covered</span>
              </div>
              <div className="text-3xl font-bold text-foreground">
                {loading ? <Loader2 className="h-6 w-6 animate-spin" /> : categoriesCovered}
              </div>
              <div className="text-xs text-muted-foreground mt-1">out of {categories.length} total</div>
            </div>

            <div className="bg-card border border-border rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <BarChart2 className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Total Problems</span>
              </div>
              <div className="text-3xl font-bold text-foreground">{problems.length}</div>
              <div className="text-xs text-muted-foreground mt-1">on the platform</div>
            </div>
          </div>

          {/* Progress bar */}
          {!loading && (
            <div className="bg-card border border-border rounded-lg p-5 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Overall Progress</span>
                <span className="text-sm text-muted-foreground">
                  {stats?.solvedCount ?? 0} solved / {totalSaved} saved / {problems.length} total
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all"
                  style={{ width: `${Math.min(100, Math.round(((stats?.solvedCount ?? 0) / problems.length) * 100))}%` }}
                />
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {Math.round(((stats?.solvedCount ?? 0) / problems.length) * 100)}% of all problems solved
              </div>
            </div>
          )}

          {/* ── Charts row 1 ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-base font-semibold text-foreground mb-1">Your Saves by Category</h2>
              <p className="text-xs text-muted-foreground mb-4">Count of problems saved per category</p>
              {loading && (
                <div className="flex items-center justify-center h-52 text-muted-foreground gap-2 text-sm">
                  <Loader2 className="h-4 w-4 animate-spin" /> Loading…
                </div>
              )}
              {!loading && totalSaved === 0 && (
                <div className="flex flex-col items-center justify-center h-52 text-muted-foreground text-sm gap-2">
                  <BookOpen className="h-8 w-8 opacity-25" />
                  No saved problems yet.
                </div>
              )}
              {!loading && totalSaved > 0 && (
                <>
                  <ResponsiveContainer width="100%" height={220}>
                    <PieChart>
                      <Pie data={categorySolvedPieData} cx="50%" cy="50%"
                        innerRadius={40} outerRadius={90} paddingAngle={2}
                        dataKey="value" labelLine={false} label={renderCustomLabel}>
                        {categorySolvedPieData.map((d, i) => (
                          <Cell key={`cat-cell-${i}`} fill={d.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={tooltipStyle}
                        formatter={(value: number, name: string) => [`${value} saved`, name]} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 mt-3">
                    {categorySolvedPieData.map((d) => (
                      <div key={d.name} className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: d.color }} />
                        <span className="text-xs text-muted-foreground">
                          {d.name}: <span className="font-semibold text-foreground">{d.value}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-base font-semibold text-foreground mb-4">Platform Difficulty Distribution</h2>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={diffData} cx="50%" cy="50%"
                    innerRadius={55} outerRadius={90} paddingAngle={3}
                    dataKey="value" labelLine={false} label={renderCustomLabel}>
                    {diffData.map((d) => (
                      <Cell key={d.name} fill={DIFF_COLORS[d.name]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={tooltipStyle} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-5 mt-2">
                {diffData.map((d) => (
                  <div key={d.name} className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: DIFF_COLORS[d.name] }} />
                    <span className="text-xs text-muted-foreground">
                      {d.name}: <span className="font-semibold text-foreground">{d.value}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Charts row 2 ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-base font-semibold text-foreground mb-4">Problems by Category (Platform)</h2>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={categoryData} layout="vertical" margin={{ left: 90 }}>
                  <XAxis type="number" tick={{ fill: "hsl(0,0%,55%)", fontSize: 10 }} />
                  <YAxis type="category" dataKey="name" tick={{ fill: "hsl(0,0%,55%)", fontSize: 10 }} width={90} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar dataKey="total" fill="hsl(200,100%,50%)" radius={[0, 4, 4, 0]} name="Total" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-base font-semibold text-foreground mb-4">Your Saves by Category (Bar)</h2>
              {loading && (
                <div className="flex items-center justify-center h-52 text-muted-foreground gap-2 text-sm">
                  <Loader2 className="h-4 w-4 animate-spin" /> Loading…
                </div>
              )}
              {!loading && totalSaved === 0 && (
                <div className="flex flex-col items-center justify-center h-52 text-muted-foreground text-sm gap-2">
                  <BookOpen className="h-8 w-8 opacity-25" />
                  No saved problems yet.
                </div>
              )}
              {!loading && totalSaved > 0 && (
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={categoryData.filter((c) => c.solved > 0)} layout="vertical" margin={{ left: 90 }}>
                    <XAxis type="number" tick={{ fill: "hsl(0,0%,55%)", fontSize: 10 }} />
                    <YAxis type="category" dataKey="name" tick={{ fill: "hsl(0,0%,55%)", fontSize: 10 }} width={90} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Bar dataKey="solved" fill={CAT_COLOR} radius={[0, 4, 4, 0]} name="Saved" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

        </>
      )}

      {/* ══════════════ SAVED CODES TAB ══════════════ */}
      {activeTab === "saved" && (
        <div>
          <div className="flex items-center gap-2 mb-5">
            <Save className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Saved Codes</h2>
            {!savedLoading && (
              <span className="text-sm text-muted-foreground">({savedCodes.length} saved)</span>
            )}
          </div>

          {savedLoading && (
            <div className="flex items-center justify-center py-20 text-muted-foreground gap-2 text-sm">
              <Loader2 className="h-5 w-5 animate-spin" /> Loading your saved codes…
            </div>
          )}

          {!savedLoading && savedCodes.length === 0 && (
            <div className="bg-card border border-border rounded-md p-12 text-center">
              <Save className="h-10 w-10 text-muted-foreground mx-auto mb-3 opacity-30" />
              <p className="text-muted-foreground text-sm">No saved codes yet.</p>
              <p className="text-xs text-muted-foreground mt-1">
                Use the Save button in the compiler to save your code here.
              </p>
            </div>
          )}

          {!savedLoading && savedCodes.length > 0 && (
            <div className="space-y-4">
              {savedCodes.map((saved, idx) => (
                <div
                  key={saved.id}
                  className="bg-card border border-border rounded-lg overflow-hidden"
                >
                  {/* ── card header ── */}
                  <div className="flex items-center justify-between px-4 py-3 bg-surface border-b border-border">
                    <div className="flex items-center gap-3">
                      {/* index badge */}
                      <span className="text-xs font-mono text-muted-foreground w-5 text-right">
                        #{idx + 1}
                      </span>

                      {/* language badge */}
                      <span className="text-xs px-2 py-0.5 bg-primary/15 text-primary rounded-full font-semibold capitalize">
                        {saved.language}
                      </span>

                      {/* timestamp */}
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {new Date(saved.savedAt).toLocaleString(undefined, {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </div>
                    </div>

                    {/* actions */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopy(saved.code)}
                        className="flex items-center gap-1 px-2.5 py-1 text-xs bg-secondary rounded-md hover:bg-surface-hover transition-colors"
                      >
                        <Copy className="h-3 w-3" /> Copy
                      </button>
                      <button
                        onClick={() => handleDelete(saved.id)}
                        className="flex items-center gap-1 px-2.5 py-1 text-xs bg-red-500/10 text-red-500 rounded-md hover:bg-red-500/20 transition-colors"
                      >
                        <Trash2 className="h-3 w-3" /> Delete
                      </button>
                    </div>
                  </div>

                  {/* ── code preview ── */}
                  <pre className="p-4 text-xs font-mono text-foreground overflow-x-auto max-h-52 bg-background leading-relaxed">
                    {saved.code}
                  </pre>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}