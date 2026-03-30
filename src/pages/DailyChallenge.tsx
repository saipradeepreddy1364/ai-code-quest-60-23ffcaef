// src/pages/DailyChallenge.tsx

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Flame,
  ArrowRight,
  User,
  LogOut,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { getDailyChallenge } from "@/data/problems";
import { useAuth } from "../hooks/useAuth";

export default function DailyChallenge() {
  const problem = getDailyChallenge();
  const { user, signOut } = useAuth();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await signOut();
    window.location.href = "/login";
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">

      {/* ✅ HEADER (Dashboard style) */}
      <div className="flex justify-between items-center mb-6 p-4 bg-card border border-border rounded-lg">
        
        {/* LEFT → MENU BUTTON */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex items-center gap-2 px-3 py-2 bg-surface hover:bg-surface-hover rounded-lg transition-colors"
        >
          <Menu className="h-5 w-5" />
          <ChevronDown className={`h-4 w-4 ${sidebarOpen ? "rotate-180" : ""}`} />
        </button>

        {/* RIGHT → USER INFO (NO DROPDOWN) */}
        <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md">
          <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
          <span className="text-sm font-medium">{user?.email}</span>

          <button
            onClick={handleLogout}
            className="ml-2 hover:bg-white/20 p-1 rounded"
            title="Logout"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* ✅ SIDEBAR */}
      <div
        className={`fixed left-0 top-0 h-full w-72 bg-card border-r transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <div className="p-4 flex justify-between border-b">
          <h2 className="font-semibold">Menu</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <X />
          </button>
        </div>

        <div className="p-4 space-y-2">
          <Link to="/dashboard" className="block p-2 hover:bg-surface rounded">
            Dashboard
          </Link>
          <Link to="/problems" className="block p-2 hover:bg-surface rounded">
            Problems
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ✅ MAIN CONTENT */}
      <div className={`p-6 transition-all ${sidebarOpen ? "ml-72" : ""}`}>
        <div className="max-w-3xl mx-auto">

          {/* TITLE */}
          <div className="flex items-center gap-2 mb-6">
            <Flame className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-semibold">Daily Challenge</h1>
          </div>

          {/* PROBLEM CARD */}
          <div className="bg-card border rounded-md p-6">
            <h2 className="text-xl font-medium mb-2">{problem.title}</h2>

            <div className="text-sm text-muted-foreground mb-4">
              {problem.difficulty} · {problem.category}
            </div>

            <p className="text-sm mb-6">{problem.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-surface p-3 border rounded">
                <p className="text-xs mb-2">Input</p>
                <pre className="text-xs">{problem.sample_input}</pre>
              </div>

              <div className="bg-surface p-3 border rounded">
                <p className="text-xs mb-2">Output</p>
                <pre className="text-xs">{problem.sample_output}</pre>
              </div>
            </div>

            <Link
              to={`/problem/${problem.id}`}
              className="px-4 py-2 bg-primary text-white rounded-md flex items-center gap-2 w-fit"
            >
              Solve Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}