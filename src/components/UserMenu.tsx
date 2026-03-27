// src/components/UserMenu.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, User, ChevronDown } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-surface-hover transition-colors"
      >
        <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-medium">
          {user.email?.charAt(0).toUpperCase()}
        </div>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg z-20">
            <Link
              to="/saved"
              className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-surface-hover"
              onClick={() => setIsOpen(false)}
            >
              <User className="h-4 w-4" />
              Saved Codes
            </Link>
          </div>
        </>
      )}
    </div>
  );
}