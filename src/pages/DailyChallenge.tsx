import { Link } from "react-router-dom";
import { Flame, ArrowRight } from "lucide-react";
import { getDailyChallenge } from "@/data/problems";

export default function DailyChallenge() {
  const problem = getDailyChallenge();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Flame className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-semibold text-foreground">Daily Challenge</h1>
      </div>

      <div className="bg-card border border-border rounded-md p-6">
        <div className="mb-4">
          <h2 className="text-xl font-medium text-foreground mb-1">{problem.title}</h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{problem.difficulty}</span>
            <span>·</span>
            <span>{problem.category}</span>
          </div>
        </div>

        <p className="text-sm text-foreground leading-relaxed mb-6">{problem.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-surface rounded-md p-4 border border-border">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Sample Input</h3>
            <pre className="font-mono text-xs text-foreground">{problem.sample_input}</pre>
          </div>
          <div className="bg-surface rounded-md p-4 border border-border">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Sample Output</h3>
            <pre className="font-mono text-xs text-foreground">{problem.sample_output}</pre>
          </div>
        </div>

        <Link
          to={`/problem/${problem.id}`}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:opacity-90 transition-opacity"
        >
          Solve Now <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Streak display placeholder */}
      <div className="mt-8 bg-card border border-border rounded-md p-6">
        <h2 className="text-lg font-medium text-foreground mb-4">Your Streak</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-muted-foreground">Current Streak</div>
            <div className="text-3xl font-semibold text-primary">0 days</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Longest Streak</div>
            <div className="text-3xl font-semibold text-foreground">0 days</div>
          </div>
        </div>
      </div>
    </div>
  );
}
