import { Save } from "lucide-react";

export default function SavedCodes() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Save className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-semibold text-foreground">Saved Codes</h1>
      </div>

      <div className="bg-card border border-border rounded-md p-8 text-center">
        <Save className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
        <p className="text-muted-foreground text-sm">
          No saved codes yet. Save your solutions from the problem editor.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Connect to Lovable Cloud to persist saved codes across sessions.
        </p>
      </div>
    </div>
  );
}
