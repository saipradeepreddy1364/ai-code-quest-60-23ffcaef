// src/components/AppHeader.tsx
import { Link } from 'react-router-dom';
import { Menu, Code2, LogOut, User } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface AppHeaderProps {
  onMenuClick: () => void;
}

export default function AppHeader({ onMenuClick }: AppHeaderProps) {
  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    window.location.href = '/login';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-card border-b border-border h-16">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-surface-hover rounded-md transition-colors lg:hidden"
          >
            <Menu className="h-5 w-5 text-foreground" />
          </button>
          
          <Link to="/" className="flex items-center gap-2">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground hidden sm:block">CodeQuest</span>
          </Link>
        </div>

        {user ? (
          <div className="flex items-center gap-3">
            {/* User Email with Icon */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-surface rounded-md border border-border">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-foreground font-medium">
                {user.email}
              </span>
            </div>
            
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              title="Logout"
            >
              <LogOut className="h-4 w-4" />
              <span className="text-sm hidden sm:inline">Logout</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:opacity-90"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}