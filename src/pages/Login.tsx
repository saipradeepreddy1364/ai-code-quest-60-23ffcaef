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
    /*
     * The SVG viewBox is 1400 × 900.
     * The cutout window sits at x=455 y=195 w=490 h=510 rx=22
     * As percentages of the viewBox:
     *   left   = 455/1400  = 32.5%
     *   top    = 195/900   = 21.667%
     *   width  = 490/1400  = 35%
     *   height = 510/900   = 56.667%
     * We pin the card with absolute positioning to those exact coordinates
     * so it lands perfectly inside the SVG's transparent cutout.
     */
    <div
      className="relative overflow-hidden"
      style={{ width: "100vw", height: "100vh" }}
    >
      {/* ── Full-screen SVG background stretched to match viewport ── */}
      <img
        src="/tech_login_background_v2.svg"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill", // stretch to fill exactly — preserves coordinate mapping
        }}
      />

      {/* ── Login card — absolutely positioned to match the SVG cutout ── */}
      <div
        style={{
          position: "absolute",
          left: "32.5%",
          top: "21.667%",
          width: "35%",
          height: "56.667%",
          borderRadius: "22px",          // matches rx="22" in SVG
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(16px, 2.5vw, 36px)",
          // Transparent bg — the SVG cutout already shows dark background
          background: "rgba(5, 7, 20, 0.55)",
          backdropFilter: "blur(2px)",
          border: "1.5px solid rgba(99, 102, 241, 0.25)",
          overflow: "auto",
        }}
      >
        {/* Logo and Title */}
        <div style={{ textAlign: "center", marginBottom: "clamp(12px, 2vh, 28px)" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "clamp(44px, 4vw, 60px)",
              height: "clamp(44px, 4vw, 60px)",
              background: "linear-gradient(135deg, #3b82f6, #6366f1)",
              borderRadius: "14px",
              marginBottom: "clamp(8px, 1vh, 16px)",
              boxShadow: "0 0 24px rgba(99,102,241,0.4)",
            }}
          >
            <LogIn style={{ width: "clamp(20px, 2vw, 28px)", height: "clamp(20px, 2vw, 28px)", color: "white" }} />
          </div>
          <h1 style={{ fontSize: "clamp(16px, 1.6vw, 22px)", fontWeight: 700, color: "white", margin: 0 }}>
            Welcome Back
          </h1>
          <p style={{ color: "#a5b4fc", marginTop: "4px", fontSize: "clamp(11px, 1vw, 14px)" }}>
            Sign in to continue coding
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "clamp(10px, 1.5vh, 18px)" }}>

          {/* Email */}
          <div>
            <label style={{ display: "block", fontSize: "clamp(10px, 0.85vw, 13px)", fontWeight: 500, color: "#c7d2fe", marginBottom: "6px" }}>
              Email Address
            </label>
            <div style={{ position: "relative" }}>
              <Mail style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", width: "16px", height: "16px", color: "#818cf8" }} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                style={{
                  width: "100%",
                  paddingLeft: "34px",
                  paddingRight: "12px",
                  paddingTop: "clamp(7px, 1vh, 11px)",
                  paddingBottom: "clamp(7px, 1vh, 11px)",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(99,102,241,0.3)",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "clamp(11px, 0.9vw, 14px)",
                  outline: "none",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.border = "1px solid rgba(99,102,241,0.8)")}
                onBlur={(e) => (e.target.style.border = "1px solid rgba(99,102,241,0.3)")}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label style={{ display: "block", fontSize: "clamp(10px, 0.85vw, 13px)", fontWeight: 500, color: "#c7d2fe", marginBottom: "6px" }}>
              Password
            </label>
            <div style={{ position: "relative" }}>
              <Lock style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", width: "16px", height: "16px", color: "#818cf8" }} />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{
                  width: "100%",
                  paddingLeft: "34px",
                  paddingRight: "40px",
                  paddingTop: "clamp(7px, 1vh, 11px)",
                  paddingBottom: "clamp(7px, 1vh, 11px)",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(99,102,241,0.3)",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "clamp(11px, 0.9vw, 14px)",
                  outline: "none",
                  boxSizing: "border-box",
                  letterSpacing: showPassword ? "normal" : "0.15em",
                  fontFamily: showPassword ? "inherit" : "Verdana, sans-serif",
                }}
                onFocus={(e) => (e.target.style.border = "1px solid rgba(99,102,241,0.8)")}
                onBlur={(e) => (e.target.style.border = "1px solid rgba(99,102,241,0.3)")}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                tabIndex={-1}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#818cf8",
                  padding: 0,
                  display: "flex",
                }}
              >
                {showPassword ? <EyeOff style={{ width: "16px", height: "16px" }} /> : <Eye style={{ width: "16px", height: "16px" }} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "clamp(8px, 1.2vh, 13px)",
              background: loading ? "rgba(99,102,241,0.4)" : "linear-gradient(135deg, #3b82f6, #6366f1)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "clamp(12px, 1vw, 15px)",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
              transition: "all 0.2s",
              boxShadow: "0 4px 15px rgba(99,102,241,0.3)",
              marginTop: "4px",
            }}
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "clamp(10px, 1.5vh, 20px)", color: "#a5b4fc", fontSize: "clamp(11px, 0.9vw, 13px)" }}>
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{ color: "white", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}