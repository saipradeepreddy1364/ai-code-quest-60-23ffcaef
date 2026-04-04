// src/components/UserPerformance.tsx
import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Code2, Cpu, Award, Loader2, BookOpen } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { problems } from "@/data/problems";

// ── Language colour map ───────────────────────────────────────────────────────
const LANGUAGE_COLORS: Record<string, string> = {
  Python: "#3776AB",
  Java: "#007396",
  "C++": "#00599C",
  JavaScript: "#F7DF1E",
  C: "#A8B9CC",
  Go: "#00ADD8",
  Rust: "#CE422B",
  TypeScript: "#3178C6",
  Swift: "#FA7343",
  Kotlin: "#7F52FF",
};

const FALLBACK_COLORS = [
  "#7C3AED", "#2563EB", "#059669", "#D97706", "#DC2626",
  "#0891B2", "#65A30D", "#EA580C", "#9333EA", "#0284C7",
];

function getLanguageColor(lang: string, index: number): string {
  return LANGUAGE_COLORS[lang] ?? FALLBACK_COLORS[index % FALLBACK_COLORS.length];
}

// ── Types ─────────────────────────────────────────────────────────────────────
interface PerformanceData {
  total: number;
  byCategory: Record<string, number>;
  byLanguage: Record<string, number>;
  compilerRuns: number;
  streakDays: number;
}

// ── Custom inner label for pie ────────────────────────────────────────────────
const renderInnerLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  value: number;
}) => {
  if (value === 0) return null;
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
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

const tooltipStyle = {
  backgroundColor: "hsl(0,0%,11%)",
  border: "1px solid hsl(0,0%,20%)",
  borderRadius: "4px",
  color: "hsl(0,0%,88%)",
  fontSize: "12px",
};

export default function UserPerformance() {
  const { user } = useAuth();
  const [data, setData] = useState<PerformanceData | null>(null);
  const [loading, setLoading] = useState(true);

  // ── Fetch from backend ────────────────────────────────────────────────────
  useEffect(() => {
    const fetchPerformance = async () => {
      if (!user?.email) return;
      setLoading(true);
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/codes/stats/${encodeURIComponent(
            user.email
          )}`
        );
        if (!res.ok) throw new Error();
        const json = await res.json();
        if (json.success) {
          setData({
            total: json.total ?? 0,
            byCategory: json.byCategory ?? {},
            byLanguage: json.byLanguage ?? {},
            compilerRuns: json.compilerRuns ?? 0,
            streakDays: json.streakDays ?? 0,
          });
        }
      } catch {
        console.error("Could not load user performance from backend.");
      } finally {
        setLoading(false);
      }
    };
    fetchPerformance();
  }, [user?.email]);

  // ── Derived data ──────────────────────────────────────────────────────────
  const totalSaved = data?.total ?? 0;
  const totalProblems = problems.length;
  const compilerRuns = data?.compilerRuns ?? 0;
  const streakDays = data?.streakDays ?? 0;

  // Language pie data
  const languagePieData = Object.entries(data?.byLanguage ?? {})
    .filter(([, v]) => v > 0)
    .map(([lang, count], i) => ({
      name: lang,
      value: count,
      color: getLanguageColor(lang, i),
    }));

  // Category bar data (only categories with saves)
  const categoryBarData = Object.entries(data?.byCategory ?? {})
    .filter(([, v]) => v > 0)
    .sort(([, a], [, b]) => b - a)
    .map(([cat, count]) => ({ name: cat, solved: count }));

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-muted-foreground gap-2 text-sm">
        <Loader2 className="h-5 w-5 animate-spin" />
        Loading performance data…
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* ── Stats cards ── */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Code2 className="h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground">Problems Saved</span>
          </div>
          <div className="text-2xl font-semibold text-foreground">
            {totalSaved}{" "}
            <span className="text-sm text-muted-foreground">
              / {totalProblems}
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-1.5 mt-2">
            <div
              className="bg-primary h-1.5 rounded-full transition-all"
              style={{
                width: `${Math.min(
                  100,
                  Math.round((totalSaved / totalProblems) * 100)
                )}%`,
              }}
            />
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {Math.round((totalSaved / totalProblems) * 100)}% complete
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground">Compiler Runs</span>
          </div>
          <div className="text-2xl font-semibold text-foreground">
            {compilerRuns}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            total executions
          </div>
        </div>
      </div>

      {/* ── Saved by Language — Pie Chart ── */}
      <div className="bg-card border border-border rounded-lg p-4">
        <h3 className="text-sm font-medium text-foreground mb-1">
          Saved by Language
        </h3>
        <p className="text-xs text-muted-foreground mb-4">
          Count of programs saved per language
        </p>

        {languagePieData.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-40 text-muted-foreground text-sm gap-2">
            <BookOpen className="h-7 w-7 opacity-25" />
            No data yet.
          </div>
        ) : (
          <>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={languagePieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  labelLine={false}
                  label={renderInnerLabel}
                >
                  {languagePieData.map((entry, index) => (
                    <Cell key={`lang-cell-${index}`} fill={entry.color} />
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
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {languagePieData.map((item) => (
                <div key={item.name} className="flex items-center gap-1.5">
                  <div
                    className="w-2.5 h-2.5 rounded-sm"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs text-muted-foreground">
                    {item.name}:{" "}
                    <span className="font-semibold text-foreground">
                      {item.value}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ── Saved by Category — Bar Chart ── */}
      <div className="bg-card border border-border rounded-lg p-4">
        <h3 className="text-sm font-medium text-foreground mb-1">
          Saved by Category
        </h3>
        <p className="text-xs text-muted-foreground mb-4">
          Number of problems saved in each topic area
        </p>

        {categoryBarData.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-40 text-muted-foreground text-sm gap-2">
            <BookOpen className="h-7 w-7 opacity-25" />
            No data yet.
          </div>
        ) : (
          <ResponsiveContainer
            width="100%"
            height={Math.max(150, categoryBarData.length * 36 + 30)}
          >
            <BarChart
              layout="vertical"
              data={categoryBarData}
              margin={{ left: 8, right: 8 }}
            >
              <XAxis
                type="number"
                tick={{ fill: "hsl(0,0%,55%)", fontSize: 10 }}
                allowDecimals={false}
              />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fill: "hsl(0,0%,55%)", fontSize: 10 }}
                width={110}
              />
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(value: number) => [`${value} saved`, "Saved"]}
              />
              <Bar
                dataKey="solved"
                fill="hsl(263, 70%, 65%)"
                radius={[0, 4, 4, 0]}
                name="Saved"
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* ── Current Streak ── */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-4 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Award className="h-5 w-5" />
          <h3 className="font-medium">Current Streak</h3>
        </div>
        <div className="text-3xl font-bold mb-1">
          {streakDays} {streakDays === 1 ? "day" : "days"}
        </div>
        <p className="text-xs text-purple-100">
          {streakDays >= 7
            ? "Keep coding! You're on fire! 🔥"
            : streakDays > 0
            ? "Great start — keep it going! 💪"
            : "Start saving today to build your streak!"}
        </p>
      </div>
    </div>
  );
}