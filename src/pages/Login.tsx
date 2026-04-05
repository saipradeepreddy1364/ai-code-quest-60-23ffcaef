// src/pages/Login.tsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const clearSession = async () => {
      await supabase.auth.signOut();
      console.log("✅ Session cleared - Login page ready");
    };
    clearSession();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await signIn(email, password);
      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Logged in successfully!");
        navigate("/dashboard", { replace: true });
      }
    } catch {
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center overflow-hidden relative"
    >
      {/* ── Full-screen background image ── */}
      <img
        src="/tech_login_background_v2.svg"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* ── Login card — merged/blended look ── */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div
          style={{
            background: "rgba(5, 7, 20, 0.45)",   // matches SVG bg #050714 almost exactly
            backdropFilter: "blur(0px)",            // NO blur = seamless merge, not glassy
            border: "1px solid rgba(99, 102, 241, 0.2)",  // very faint indigo — just enough to define edges
            borderRadius: "18px",
            padding: "36px 32px",
            boxShadow: "0 0 60px rgba(99, 102, 241, 0.08), inset 0 0 40px rgba(5,7,20,0.6)",
          }}
        >
          {/* Logo and Title */}
          <div className="text-center mb-7">
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                boxShadow: "0 0 28px rgba(99,102,241,0.45)",
              }}
            >
              <LogIn className="h-7 w-7 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
            <p className="mt-1 text-sm" style={{ color: "#a5b4fc" }}>
              Sign in to continue coding
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "#c7d2fe" }}>
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4"
                  style={{ color: "#818cf8" }}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg text-sm text-white placeholder-indigo-400 outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(99,102,241,0.25)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(99,102,241,0.7)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(99,102,241,0.25)")}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "#c7d2fe" }}>
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4"
                  style={{ color: "#818cf8" }}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-9 pr-10 py-2.5 rounded-lg text-sm text-white placeholder-indigo-400 outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(99,102,241,0.25)",
                    letterSpacing: showPassword ? "normal" : "0.15em",
                    fontFamily: showPassword ? "inherit" : "Verdana, sans-serif",
                    color: "#ffffff",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(99,102,241,0.7)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(99,102,241,0.25)")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                  style={{ color: "#818cf8", background: "none", border: "none", cursor: "pointer", display: "flex" }}
                >
                  {showPassword
                    ? <EyeOff className="h-4 w-4" />
                    : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-lg font-semibold text-sm text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
                marginTop: "4px",
              }}
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>

          <p className="text-center mt-5 text-xs" style={{ color: "#a5b4fc" }}>
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold underline underline-offset-2 text-white hover:text-indigo-300 transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}