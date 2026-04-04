// src/components/UserMenu.tsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, BookMarked, BarChart2, ChevronDown, KeyRound } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const initials = (user.email ?? "U").charAt(0).toUpperCase();

  const handleLogout = async () => {
    setIsOpen(false);
    await signOut();
    navigate("/login", { replace: true });
  };

  return (
    <div className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen((p) => !p)}
        className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-muted transition-colors"
      >
        <div className="h-8 w-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">
          {initials}
        </div>
        <span className="text-sm text-muted-foreground max-w-[120px] truncate hidden sm:block">
          {user.email}
        </span>
        <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Click-outside overlay */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute right-0 mt-2 w-52 bg-card border border-border rounded-lg shadow-xl z-20 overflow-hidden">
            {/* Email label */}
            <div className="px-3 py-2.5 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {initials}
                </div>
                <span className="text-xs text-muted-foreground truncate">
                  {user.email}
                </span>
              </div>
            </div>

            {/* Saved Codes */}
            <Link
              to="/saved"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-foreground hover:bg-muted transition-colors"
            >
              <BookMarked className="h-4 w-4 text-indigo-400" />
              Saved Codes
            </Link>

            {/* Analytics */}
            <Link
              to="/analytics"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-foreground hover:bg-muted transition-colors"
            >
              <BarChart2 className="h-4 w-4 text-green-400" />
              Analytics
            </Link>

            {/* Change Password */}
            <Link
              to="/change-password"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-foreground hover:bg-muted transition-colors"
            >
              <KeyRound className="h-4 w-4 text-yellow-400" />
              Change Password
            </Link>

            <div className="border-t border-border" />

            {/* Sign Out */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-red-500 hover:bg-muted transition-colors"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </div>
        </>
      )}
    </div>
  );
}