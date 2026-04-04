// src/pages/Analytics.tsx
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { problems, getCategories } from "@/data/problems";
import { useAuth } from "@/hooks/useAuth";
import { Loader2, BookOpen, Code2, BarChart2 } from "lucide-react";

// ── Difficulty colours ────────────────────────────────────────────────────────
const DIFF_COLORS: Record<string, string> = {
  Easy: "hsl(200, 100%, 50%)",
  Medium: "hsl(38, 92%, 50%)",
  Hard: "hsl(0, 62%, 50%)",
};

// ── Category pie colours (one per slice) ─────────────────────────────────────
const CAT_PIE_COLORS = [
  "#7C3AED", "#2563EB", "#059669", "#D97706", "#DC2626",
  "#7C3AED", "#0891B2", "#65A30D", "#EA580C", "#9333EA",
  "#0284C7", "#16A34A", "#CA8A04", "#B91C1C", "#6D28D9",
];

// ── Category bar colour ───────────────────────────────────────────────────────
const CAT_COLOR = "hsl(263, 70%, 65%)";

interface StatsData {
  total: number;
  byCategory: Record<string, number>;
  byLanguage: Record<string, number>;
}

// ── Custom label renderer for pie slices ─────────────────────────────────────
const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  name,
  value,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  name: string;
  value: number;
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  if (value === 0) return null;
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={11}
      fontWeight={600}
    >
      {value}
    </text>
  );
};

export default function Analytics() {
  const { user } = useAuth();
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);

  // ── Fetch real solved stats from Java backend ─────────────────────────────
  useEffect(() => {
    const fetchStats = async () => {
      if (!user?.email) return;
      setLoading(true);
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/codes/stats/${encodeURIComponent(
            user.email
          )}`
        );
        if (!res.ok) throw new Error();
        const data = await res.json();
        if (data.success) {
          setStats({
            total: data.total,
            byCategory: data.byCategory,
            byLanguage: data.byLanguage ?? {},
          });
        }
      } catch {
        console.error("Could not load analytics from backend.");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [user?.email]);

  // ── All problems breakdown (static, for the platform-wide charts) ─────────
  const categories = getCategories();

  const categoryData = categories.map((cat) => ({
    name: cat.length > 12 ? cat.slice(0, 12) + "…" : cat,
    fullName: cat,
    total: problems.filter((p) => p.category === cat).length,
    solved: stats?.byCategory[cat] ?? 0,
  }));

  // Pie data: user saved problems by category (only categories with >0 saves)
  const categorySolvedPieData = categories
    .map((cat, i) => ({
      name: cat,
      value: stats?.byCategory[cat] ?? 0,
      color: CAT_PIE_COLORS[i % CAT_PIE_COLORS.length],
    }))
    .filter((d) => d.value > 0);

  const diffData = [
    {
      name: "Easy",
      value: problems.filter((p) => p.difficulty === "Easy").length,
    },
    {
      name: "Medium",
      value: problems.filter((p) => p.difficulty === "Medium").length,
    },
    {
      name: "Hard",
      value: problems.filter((p) => p.difficulty === "Hard").length,
    },
  ];

  // User's saved breakdown by language (real from backend)
  const languagePieData = Object.entries(stats?.byLanguage ?? {})
    .filter(([, v]) => v > 0)
    .map(([lang, count], i) => ({
      name: lang,
      value: count,
      color: CAT_PIE_COLORS[(i + 5) % CAT_PIE_COLORS.length],
    }));

  const tooltipStyle = {
    backgroundColor: "hsl(0,0%,11%)",
    border: "1px solid hsl(0,0%,20%)",
    borderRadius: "6px",
    color: "hsl(0,0%,88%)",
    fontSize: "12px",
  };

  const totalSaved = stats?.total ?? 0;
  const categoriesCovered = Object.keys(stats?.byCategory ?? {}).length;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold text-foreground mb-6">Analytics</h1>

      {/* ── Summary cards ── */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {/* Problems saved */}
        <div className="bg-card border border-border rounded-lg p-5">
          <div className="flex items-center gap-2 mb-2">
            <Code2 className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Problems Saved</span>
          </div>
          <div className="text-3xl font-bold text-primary">
            {loading ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              totalSaved
            )}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            out of {problems.length} available
          </div>
        </div>

        {/* Categories covered */}
        <div className="bg-card border border-border rounded-lg p-5">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Categories Covered</span>
          </div>
          <div className="text-3xl font-bold text-foreground">
            {loading ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              categoriesCovered
            )}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            out of {categories.length} total
          </div>
        </div>

        {/* Platform total */}
        <div className="bg-card border border-border rounded-lg p-5">
          <div className="flex items-center gap-2 mb-2">
            <BarChart2 className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Total Problems</span>
          </div>
          <div className="text-3xl font-bold text-foreground">
            {problems.length}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            on the platform
          </div>
        </div>
      </div>

      {/* ── Charts row 1 ── */}
      <div className="grid grid-cols-2 gap-6 mb-6">

        {/* User: saved by category — PIE CHART with counts */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-base font-semibold text-foreground mb-1">
            Your Saves by Category
          </h2>
          <p className="text-xs text-muted-foreground mb-4">
            Count of problems saved per category
          </p>

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
                  <Pie
                    data={categorySolvedPieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    labelLine={false}
                    label={renderCustomLabel}
                  >
                    {categorySolvedPieData.map((d, i) => (
                      <Cell key={`cat-cell-${i}`} fill={d.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={tooltipStyle}
                    formatter={(value: number, name: string) => [
                      `${value} saved`,
                      name,
                    ]}
                  />
                </PieChart>
              </ResponsiveContainer>

              {/* Legend */}
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 mt-3">
                {categorySolvedPieData.map((d) => (
                  <div key={d.name} className="flex items-center gap-1.5">
                    <div
                      className="w-2.5 h-2.5 rounded-sm shrink-0"
                      style={{ backgroundColor: d.color }}
                    />
                    <span className="text-xs text-muted-foreground">
                      {d.name}:{" "}
                      <span className="font-semibold text-foreground">
                        {d.value}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Platform: difficulty distribution */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-base font-semibold text-foreground mb-4">
            Platform Difficulty Distribution
          </h2>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={diffData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={90}
                paddingAngle={3}
                dataKey="value"
                labelLine={false}
                label={renderCustomLabel}
              >
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
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: DIFF_COLORS[d.name] }}
                />
                <span className="text-xs text-muted-foreground">
                  {d.name}:{" "}
                  <span className="font-semibold text-foreground">
                    {d.value}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Charts row 2 ── */}
      <div className="grid grid-cols-2 gap-6 mb-6">

        {/* Platform: total problems per category */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-base font-semibold text-foreground mb-4">
            Problems by Category (Platform)
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={categoryData} layout="vertical" margin={{ left: 90 }}>
              <XAxis
                type="number"
                tick={{ fill: "hsl(0,0%,55%)", fontSize: 10 }}
              />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fill: "hsl(0,0%,55%)", fontSize: 10 }}
                width={90}
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar
                dataKey="total"
                fill="hsl(200,100%,50%)"
                radius={[0, 4, 4, 0]}
                name="Total"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* User: saved by category — bar chart */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-base font-semibold text-foreground mb-4">
            Your Saves by Category (Bar)
          </h2>

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
              <BarChart
                data={categoryData.filter((c) => c.solved > 0)}
                layout="vertical"
                margin={{ left: 90 }}
              >
                <XAxis
                  type="number"
                  tick={{ fill: "hsl(0,0%,55%)", fontSize: 10 }}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fill: "hsl(0,0%,55%)", fontSize: 10 }}
                  width={90}
                />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar
                  dataKey="solved"
                  fill={CAT_COLOR}
                  radius={[0, 4, 4, 0]}
                  name="Saved"
                />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* ── Charts row 3: Saved by Language ── */}
      {!loading && languagePieData.length > 0 && (
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-base font-semibold text-foreground mb-1">
              Your Saves by Language
            </h2>
            <p className="text-xs text-muted-foreground mb-4">
              Programming language used when saving
            </p>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={languagePieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={85}
                  paddingAngle={2}
                  dataKey="value"
                  labelLine={false}
                  label={renderCustomLabel}
                >
                  {languagePieData.map((d, i) => (
                    <Cell key={`lang-cell-${i}`} fill={d.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(value: number, name: string) => [
                    `${value} saved`,
                    name,
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 mt-3">
              {languagePieData.map((d) => (
                <div key={d.name} className="flex items-center gap-1.5">
                  <div
                    className="w-2.5 h-2.5 rounded-sm shrink-0"
                    style={{ backgroundColor: d.color }}
                  />
                  <span className="text-xs text-muted-foreground">
                    {d.name}:{" "}
                    <span className="font-semibold text-foreground">
                      {d.value}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}