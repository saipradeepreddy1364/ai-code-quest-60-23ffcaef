import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Trophy, Clock, ArrowRight, ChevronLeft } from "lucide-react";
import { problems } from "@/data/problems";

export default function ContestMode() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour
  const [contestProblems] = useState(() => {
    const shuffled = [...problems].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  });

  useEffect(() => {
    if (!isActive || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
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

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Trophy className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-semibold text-foreground">Contest Mode</h1>
        </div>
        {isActive && (
          <div className="flex items-center gap-2 text-primary font-mono text-lg">
            <Clock className="h-5 w-5" />
            {formatTime(timeLeft)}
          </div>
        )}
      </div>

      {!isActive ? (
        <div className="bg-card border border-border rounded-md p-8 text-center">
          <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-xl font-medium text-foreground mb-2">Ready to compete?</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Solve 4 problems in 60 minutes. Timer starts when you begin.
          </p>
          <button
            onClick={() => setIsActive(true)}
            className="px-6 py-2.5 bg-primary text-primary-foreground rounded-md text-sm hover:opacity-90 transition-opacity"
          >
            Start Contest
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {contestProblems.map((p, i) => (
            <div key={p.id} className="bg-card border border-border rounded-md p-4 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono text-muted-foreground">Q{i + 1}</span>
                  <span className="text-foreground">{p.title}</span>
                </div>
                <span className="text-sm text-muted-foreground">{p.difficulty} · {p.category}</span>
              </div>
              <Link
                to={`/problem/${p.id}`}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded text-sm hover:opacity-90 transition-opacity"
              >
                Solve <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}