// src/pages/SavedCodes.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Save, Trash2, Copy, Code2, ChevronLeft } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { toast } from "sonner";

interface SavedCode {
  id: number;
  userEmail: string;
  code: string;
  language: string;
  savedAt: string;
}

export default function SavedCodes() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [savedCodes, setSavedCodes] = useState<SavedCode[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user?.email) fetchSavedCodes();
  }, [user]);

  const fetchSavedCodes = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/code/load/${encodeURIComponent(user!.email!)}`
      );
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setSavedCodes(data);
    } catch (e) {
      toast.error("Failed to load saved codes");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/code/delete/${id}`, {
        method: "DELETE"
      });
      setSavedCodes(prev => prev.filter(c => c.id !== id));
      toast.success("Deleted successfully");
    } catch (e) {
      toast.error("Failed to delete");
    }
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

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

      <div className="flex items-center gap-2 mb-6">
        <Save className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-semibold text-foreground">Saved Codes</h1>
        <span className="ml-2 text-sm text-muted-foreground">({savedCodes.length} saved)</span>
      </div>

      {savedCodes.length === 0 ? (
        <div className="bg-card border border-border rounded-md p-8 text-center">
          <Save className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground text-sm">No saved codes yet.</p>
          <p className="text-xs text-muted-foreground mt-1">
            Use the Save button in the compiler to save your code.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {savedCodes.map((saved) => (
            <div key={saved.id} className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-surface border-b border-border">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground capitalize">{saved.language}</span>
                  <span className="text-xs text-muted-foreground">
                    · {new Date(saved.savedAt).toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(saved.code)}
                    className="flex items-center gap-1 px-2 py-1 text-xs bg-secondary rounded-md hover:bg-surface-hover"
                  >
                    <Copy className="h-3 w-3" /> Copy
                  </button>
                  <button
                    onClick={() => handleDelete(saved.id)}
                    className="flex items-center gap-1 px-2 py-1 text-xs bg-red-500/10 text-red-500 rounded-md hover:bg-red-500/20"
                  >
                    <Trash2 className="h-3 w-3" /> Delete
                  </button>
                </div>
              </div>
              <pre className="p-4 text-xs font-mono text-foreground overflow-x-auto max-h-48 bg-background">
                {saved.code}
              </pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}