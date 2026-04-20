// src/components/UserPerformance.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from "recharts";
import {
  Code2, BookOpen, Loader2, ChevronDown, ChevronUp,
  Copy, Clock, ExternalLink, Trash2,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { problems } from "@/data/problems";
import { toast } from "sonner";

// ── Types ─────────────────────────────────────────────────────────────────────
interface SavedCodeRow {
  problem_id: number;
  title: string;
  category: string;
  code: string;
  language: string;
  saved_at: string;
  compiler_runs: number;
}

// ── Tooltip style ─────────────────────────────────────────────────────────────
const tooltipStyle = {
  backgroundColor: "hsl(0,0%,11%)",
  border: "1px solid hsl(0,0%,20%)",
  borderRadius: "4px",
  color: "hsl(0,0%,88%)",
  fontSize: "12px",
};

export default function UserPerformance() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [savedCodes, setSavedCodes] = useState<SavedCodeRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // ── Fetch saved codes from Supabase by user_email ─────────────────────────
  useEffect(() => {
    const fetch = async () => {
      if (!user?.email) return;
      setLoading(true);
      try {
        const { data, error } = await (supabase as any)
          .from("saved_codes")
          .select("problem_id, title, category, code, language, saved_at, compiler_runs")
          .eq("user_email", user.email)
          .order("saved_at", { ascending: false });

        if (error) throw error;
        setSavedCodes((data ?? []) as SavedCodeRow[]);
      } catch (err) {
        console.error("UserPerformance fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [user?.email]);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied!");
  };

  const handleRemove = async (problemId: number) => {
    if (!user?.email) return;
    try {
      const { error } = await (supabase as any)
        .from("saved_codes")
        .delete()
        .eq("user_email", user.email)
        .eq("problem_id", problemId);
      if (error) throw error;
      setSavedCodes((prev) => prev.filter((r) => r.problem_id !== problemId));
      if (expandedId === problemId) setExpandedId(null);
      toast.success("Removed from saved codes.");
    } catch (err) {
      console.error("Remove error:", err);
      toast.error("Failed to remove. Please try again.");
    }
  };

  // ── Derived data ──────────────────────────────────────────────────────────
  const totalSaved = savedCodes.length;
  const totalProblems = problems.length;

  const byCategoryMap: Record<string, number> = {};
  savedCodes.forEach((r) => {
    if (r.category) byCategoryMap[r.category] = (byCategoryMap[r.category] ?? 0) + 1;
  });

  const categoryBarData = Object.entries(byCategoryMap)
    .sort(([, a], [, b]) => b - a)
    .map(([cat, count]) => ({ name: cat, saved: count }));

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-muted-foreground gap-2 text-sm">
        <Loader2 className="h-5 w-5 animate-spin" />
        Loading…
      </div>
    );
  }

  return (
    <div className="space-y-5">

      {/* ── Problems Saved card ── */}
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Code2 className="h-4 w-4 text-primary" />
          <span className="text-xs text-muted-foreground">Problems Saved</span>
        </div>
        <div className="text-2xl font-semibold text-foreground">
          {totalSaved}{" "}
          <span className="text-sm text-muted-foreground">/ {totalProblems}</span>
        </div>
        <div className="w-full bg-muted rounded-full h-1.5 mt-2">
          <div
            className="bg-primary h-1.5 rounded-full transition-all"
            style={{
              width: `${Math.min(100, Math.round((totalSaved / totalProblems) * 100))}%`,
            }}
          />
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          {Math.round((totalSaved / totalProblems) * 100)}% complete
        </div>
      </div>

      {/* ── Saved by Category — Bar Chart ── */}
      {categoryBarData.length > 0 && (
        <div className="bg-card border border-border rounded-lg p-4">
          <h3 className="text-sm font-medium text-foreground mb-1">Saved by Category</h3>
          <p className="text-xs text-muted-foreground mb-3">
            Number of problems saved per topic
          </p>
          <ResponsiveContainer
            width="100%"
            height={Math.max(120, categoryBarData.length * 32 + 20)}
          >
            <BarChart layout="vertical" data={categoryBarData} margin={{ left: 4, right: 8 }}>
              <XAxis
                type="number"
                tick={{ fill: "hsl(0,0%,55%)", fontSize: 10 }}
                allowDecimals={false}
              />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fill: "hsl(0,0%,55%)", fontSize: 10 }}
                width={100}
              />
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(v: number) => [`${v} saved`, "Saved"]}
              />
              <Bar dataKey="saved" fill="hsl(263, 70%, 65%)" radius={[0, 4, 4, 0]} name="Saved" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* ── Saved Codes list ── */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <h3 className="text-sm font-medium text-foreground">Saved Codes</h3>
          {totalSaved > 0 && (
            <span className="text-xs px-2 py-0.5 bg-primary/15 text-primary rounded-full">
              {totalSaved}
            </span>
          )}
        </div>

        {totalSaved === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-muted-foreground text-xs gap-2">
            <BookOpen className="h-7 w-7 opacity-25" />
            No saved problems yet.
            <span className="text-center leading-relaxed px-4">
              Run your code in any Problem page — it auto-saves here.
            </span>
          </div>
        ) : (
          <div className="divide-y divide-border max-h-[420px] overflow-y-auto">
            {savedCodes.map((item) => {
              const isOpen = expandedId === item.problem_id;
              return (
                <div key={item.problem_id}>
                  {/* Row */}
                  <div className="flex items-center gap-2 px-3 py-2.5 hover:bg-surface/50 transition-colors">
                    {/* Problem ID */}
                    <span className="text-[10px] font-mono text-muted-foreground w-6 shrink-0">
                      #{item.problem_id}
                    </span>

                    {/* Title */}
                    <button
                      onClick={() => navigate(`/problem/${item.problem_id}`)}
                      className="flex-1 text-xs text-foreground hover:text-primary text-left font-medium leading-tight truncate min-w-0"
                      title={item.title}
                    >
                      {item.title}
                    </button>

                    {/* Actions */}
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => navigate(`/problem/${item.problem_id}`)}
                        title="Open problem"
                        className="p-1 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => handleRemove(item.problem_id)}
                        title="Remove from saved"
                        className="p-1 text-muted-foreground hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => setExpandedId(isOpen ? null : item.problem_id)}
                        className={`flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] transition-colors ${
                          isOpen
                            ? "bg-primary/20 text-primary"
                            : "bg-muted text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {isOpen ? (
                          <ChevronUp className="h-3 w-3" />
                        ) : (
                          <ChevronDown className="h-3 w-3" />
                        )}
                        Code
                      </button>
                    </div>
                  </div>

                  {/* Expanded code */}
                  {isOpen && (
                    <div className="border-t border-border bg-background">
                      {/* Code header */}
                      <div className="flex items-center justify-between px-3 py-1.5 bg-surface/60">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] px-1.5 py-0.5 bg-primary/10 text-primary rounded-full capitalize font-medium">
                            {item.language}
                          </span>
                          <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                            <Clock className="h-2.5 w-2.5" />
                            {new Date(item.saved_at).toLocaleDateString(undefined, {
                              day: "numeric",
                              month: "short",
                            })}
                          </div>
                          {item.compiler_runs > 0 && (
                            <span className="text-[10px] text-muted-foreground">
                              {item.compiler_runs} run{item.compiler_runs !== 1 ? "s" : ""}
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => handleCopy(item.code)}
                          className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Copy className="h-2.5 w-2.5" />
                          Copy
                        </button>
                      </div>
                      {/* Code block */}
                      <pre className="px-3 py-2 text-[10px] font-mono text-foreground overflow-x-auto max-h-48 leading-relaxed">
                        {item.code}
                      </pre>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}