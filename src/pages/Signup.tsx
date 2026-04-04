// src/pages/Signup.tsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export default function Signup() {
  const [fullName, setFullName]   = useState("");
  const [email, setEmail]         = useState("");
  const [password, setPassword]   = useState("");
  const [loading, setLoading]     = useState(false);
  const [needsConfirmation, setNeedsConfirmation] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await signUp(email, password);

      if (error) {
        if (error.message.includes("email to confirm")) {
          setNeedsConfirmation(true);
          toast.success("Please check your email to confirm your account");
        } else {
          toast.error(error.message);
        }
        return;
      }

      // Save full name into user metadata + profiles table if user was created
      if (data?.user) {
        // Update auth metadata with full_name
        await supabase.auth.updateUser({
          data: { full_name: fullName.trim() },
        });

        // Also upsert into a profiles table if it exists (safe — won't crash if table absent)
        try {
          await supabase
            .from("profiles")
            .upsert({ id: data.user.id, full_name: fullName.trim(), email });
        } catch {
          // silently ignore if profiles table doesn't exist
        }
      }

      toast.success("Account created! You can now login.");
      navigate("/login");
    } catch {
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (needsConfirmation) {
    return (
      <div className="min-h-[calc(100vh-3rem)] flex items-center justify-center">
        <div className="w-full max-w-md bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-2">Check Your Email</h2>
          <p className="text-muted-foreground mb-6">
            We've sent a confirmation link to <strong>{email}</strong>.
            Please check your email and click the link to confirm your account.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-3rem)] flex items-center justify-center">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <UserPlus className="h-5 w-5 text-primary" />
          <h1 className="text-xl font-semibold text-foreground">Sign Up</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="text-sm text-muted-foreground block mb-1">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              className="w-full bg-surface border border-border rounded-md px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-muted-foreground block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface border border-border rounded-md px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-muted-foreground block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface border border-border rounded-md px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              required
              minLength={6}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-primary text-primary-foreground rounded-md text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-muted-foreground text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}