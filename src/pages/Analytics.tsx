import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { problems, getCategories } from "@/data/problems";

export default function Analytics() {
  const categories = getCategories();

  const categoryData = categories.map((cat) => ({
    name: cat.length > 12 ? cat.slice(0, 12) + "…" : cat,
    count: problems.filter((p) => p.category === cat).length,
  }));

  const diffData = [
    { name: "Easy", value: problems.filter((p) => p.difficulty === "Easy").length },
    { name: "Medium", value: problems.filter((p) => p.difficulty === "Medium").length },
    { name: "Hard", value: problems.filter((p) => p.difficulty === "Hard").length },
  ];

  const COLORS = ["hsl(200, 100%, 50%)", "hsl(38, 92%, 50%)", "hsl(0, 62%, 50%)"];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold text-foreground mb-8">Analytics</h1>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-card border border-border rounded-md p-4">
          <div className="text-sm text-muted-foreground">Problems Solved</div>
          <div className="text-3xl font-semibold text-primary">0</div>
        </div>
        <div className="bg-card border border-border rounded-md p-4">
          <div className="text-sm text-muted-foreground">Current Streak</div>
          <div className="text-3xl font-semibold text-foreground">0 days</div>
        </div>
        <div className="bg-card border border-border rounded-md p-4">
          <div className="text-sm text-muted-foreground">Contests Participated</div>
          <div className="text-3xl font-semibold text-foreground">0</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Problems by category */}
        <div className="bg-card border border-border rounded-md p-6">
          <h2 className="text-lg font-medium text-foreground mb-4">Problems by Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData} layout="vertical" margin={{ left: 80 }}>
              <XAxis type="number" tick={{ fill: "hsl(0,0%,55%)", fontSize: 12 }} />
              <YAxis type="category" dataKey="name" tick={{ fill: "hsl(0,0%,55%)", fontSize: 11 }} width={80} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(0,0%,11%)",
                  border: "1px solid hsl(0,0%,20%)",
                  borderRadius: "4px",
                  color: "hsl(0,0%,88%)",
                }}
              />
              <Bar dataKey="count" fill="hsl(200,100%,50%)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Difficulty distribution */}
        <div className="bg-card border border-border rounded-md p-6">
          <h2 className="text-lg font-medium text-foreground mb-4">Difficulty Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={diffData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={4}
                dataKey="value"
              >
                {diffData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
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
          <div className="flex justify-center gap-6 mt-2">
            {diffData.map((d, i) => (
              <div key={d.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                <span className="text-sm text-muted-foreground">{d.name}: {d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
