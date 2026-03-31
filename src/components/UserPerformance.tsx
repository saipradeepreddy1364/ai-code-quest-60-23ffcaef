// src/components/UserPerformance.tsx
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Code2, Cpu, Award } from "lucide-react";

// Mock data - replace with real data from your backend
const compilerUsageData = [
  { name: "Python", value: 45 },
  { name: "Java", value: 30 },
  { name: "C++", value: 15 },
  { name: "JavaScript", value: 10 },
];

const languageStatsData = [
  { name: "Python", solved: 25, color: "#3776AB" },
  { name: "Java", solved: 18, color: "#007396" },
  { name: "C++", solved: 12, color: "#00599C" },
  { name: "JavaScript", solved: 8, color: "#F7DF1E" },
];

const COLORS = ["#3776AB", "#007396", "#00599C", "#F7DF1E", "#FF6B6B"];

export default function UserPerformance() {
  const totalSolved = 63; // Mock data
  const totalProblems = 700;
  const compilerCalls = 156; // Mock data

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Code2 className="h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground">Problems Solved</span>
          </div>
          <div className="text-2xl font-semibold text-foreground">
            {totalSolved} <span className="text-sm text-muted-foreground">/ {totalProblems}</span>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground">Compiler Runs</span>
          </div>
          <div className="text-2xl font-semibold text-foreground">{compilerCalls}</div>
        </div>
      </div>

      {/* Compiler Usage by Language - Pie Chart */}
      <div className="bg-card border border-border rounded-lg p-4">
        <h3 className="text-sm font-medium text-foreground mb-4">Compiler Usage by Language</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={compilerUsageData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {compilerUsageData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0,0%,11%)",
                border: "1px solid hsl(0,0%,20%)",
                borderRadius: "4px",
                color: "hsl(0,0%,88%)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {compilerUsageData.map((item, i) => (
            <div key={item.name} className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i] }} />
              <span className="text-xs text-muted-foreground">{item.name}: {item.value}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Problems Solved by Language */}
      <div className="bg-card border border-border rounded-lg p-4">
        <h3 className="text-sm font-medium text-foreground mb-4">Solved by Language</h3>
        <ResponsiveContainer width="100%" height={150}>
          <BarChart layout="vertical" data={languageStatsData} margin={{ left: 50 }}>
            <XAxis type="number" tick={{ fill: "hsl(0,0%,55%)", fontSize: 10 }} />
            <YAxis 
              type="category" 
              dataKey="name" 
              tick={{ fill: "hsl(0,0%,55%)", fontSize: 10 }}
              width={50}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0,0%,11%)",
                border: "1px solid hsl(0,0%,20%)",
                borderRadius: "4px",
                color: "hsl(0,0%,88%)",
              }}
            />
            <Bar dataKey="solved" radius={[0, 4, 4, 0]}>
              {languageStatsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Achievement Badge */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-4 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Award className="h-5 w-5" />
          <h3 className="font-medium">Current Streak</h3>
        </div>
        <div className="text-3xl font-bold mb-1">7 days</div>
        <p className="text-xs text-purple-100">Keep coding! You're on fire! 🔥</p>
      </div>
    </div>
  );
