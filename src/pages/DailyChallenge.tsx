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

  const [dropdownOpen, setDropdownOpen] = useState(false);
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
      
      {/* ✅ HEADER (same as Dashboard) */}
      <div className="flex justify-between items-center mb-6 p-4 bg-card border border-border rounded-lg">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex items-center gap-2 px-3 py-2 bg-surface rounded-lg"
        >
          <Menu className="h-5 w-5" />
          <ChevronDown className={`h-4 w-4 ${sidebarOpen ? "rotate-180" : ""}`} />
        </button>

        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-3 px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            <User className="h-4 w-4" />
            <span>{user?.email}</span>
            <ChevronDown className="h-4 w-4" />
          </button>

          {dropdownOpen && (
            <>
              <div className="fixed inset-0" onClick={() => setDropdownOpen(false)} />
              <div className="absolute right-0 mt-2 w-60 bg-card border rounded-lg shadow-lg z-50">
                <div className="p-3 border-b">
                  <p className="text-sm">{user?.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ✅ SIDEBAR (minimal version) */}
      <div
        className={`fixed left-0 top-0 h-full w-72 bg-card border-r transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform`}
      >
        <div className="p-4 flex justify-between">
          <h2 className="font-semibold">Menu</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <X />
          </button>
        </div>

        <div className="p-4 space-y-2">
          <Link to="/" className="block p-2 hover:bg-surface rounded">
            Home
          </Link>
          <Link to="/dashboard" className="block p-2 hover:bg-surface rounded">
            Dashboard
          </Link>
          <Link to="/problems" className="block p-2 hover:bg-surface rounded">
            Problems
          </Link>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ✅ MAIN CONTENT */}
      <div className={`p-6 transition-all ${sidebarOpen ? "ml-72" : ""}`}>
        
        <div className="max-w-3xl mx-auto">
          
          {/* Title */}
          <div className="flex items-center gap-2 mb-6">
            <Flame className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-semibold">Daily Challenge</h1>
          </div>

          {/* Problem Card */}
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