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
      className="relative overflow-hidden"
      style={{ width: "100vw", height: "100vh" }}
    >
      {/* Full-screen SVG — stretched with objectFit:fill so % coords map 1:1 */}
      <img
        src="/tech_login_background_v2.svg"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill",
        }}
      />

      {/*
        SVG cutout: x=455 y=195 w=490 h=510 rx=22  inside viewBox 1400×900
        left   = 455/1400 = 32.5%
        top    = 195/900  = 21.667%
        width  = 490/1400 = 35%
        height = 510/900  = 56.667%
      */}
      <div
        style={{
          position: "absolute",
          left: "32.5%",
          top: "21.667%",
          width: "35%",
          height: "56.667%",
          borderRadius: "22px",
          boxSizing: "border-box",
          overflow: "hidden",           // NO scrollbar ever
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0",
          background: "transparent",   // SVG cutout is already the "window"
          border: "none",              // SVG already draws the glowing border
        }}
      >
        {/* Inner content — sized to fit snugly */}
        <div style={{ width: "100%", padding: "4% 8%", boxSizing: "border-box" }}>

          {/* Logo and Title */}
          <div style={{ textAlign: "center", marginBottom: "3%" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "clamp(40px, 5vw, 56px)",
                height: "clamp(40px, 5vw, 56px)",
                background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                borderRadius: "12px",
                marginBottom: "2%",
                boxShadow: "0 0 20px rgba(99,102,241,0.5)",
              }}
            >
              <LogIn style={{ width: "clamp(18px, 2vw, 26px)", height: "clamp(18px, 2vw, 26px)", color: "white" }} />
            </div>
            <h1
              style={{
                fontSize: "clamp(15px, 1.8vw, 22px)",
                fontWeight: 700,
                color: "white",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Welcome Back
            </h1>
            <p style={{ color: "#a5b4fc", marginTop: "2%", fontSize: "clamp(10px, 1vw, 13px)", marginBottom: 0 }}>
              Sign in to continue coding
            </p>
          </div>

          {/* Form */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(8px, 1.8vh, 14px)" }}>

            {/* Email */}
            <div>
              <label style={{ display: "block", fontSize: "clamp(9px, 0.8vw, 12px)", fontWeight: 500, color: "#c7d2fe", marginBottom: "4px" }}>
                Email Address
              </label>
              <div style={{ position: "relative" }}>
                <Mail style={{ position: "absolute", left: "9px", top: "50%", transform: "translateY(-50%)", width: "14px", height: "14px", color: "#818cf8", flexShrink: 0 }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  style={{
                    width: "100%",
                    paddingLeft: "30px",
                    paddingRight: "10px",
                    paddingTop: "clamp(6px, 0.9vh, 9px)",
                    paddingBottom: "clamp(6px, 0.9vh, 9px)",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(99,102,241,0.35)",
                    borderRadius: "7px",
                    color: "white",
                    fontSize: "clamp(10px, 0.85vw, 13px)",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(99,102,241,0.9)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(99,102,241,0.35)")}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label style={{ display: "block", fontSize: "clamp(9px, 0.8vw, 12px)", fontWeight: 500, color: "#c7d2fe", marginBottom: "4px" }}>
                Password
              </label>
              <div style={{ position: "relative" }}>
                <Lock style={{ position: "absolute", left: "9px", top: "50%", transform: "translateY(-50%)", width: "14px", height: "14px", color: "#818cf8" }} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  style={{
                    width: "100%",
                    paddingLeft: "30px",
                    paddingRight: "36px",
                    paddingTop: "clamp(6px, 0.9vh, 9px)",
                    paddingBottom: "clamp(6px, 0.9vh, 9px)",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(99,102,241,0.35)",
                    borderRadius: "7px",
                    color: "white",
                    fontSize: "clamp(10px, 0.85vw, 13px)",
                    outline: "none",
                    boxSizing: "border-box",
                    letterSpacing: showPassword ? "normal" : "0.15em",
                    fontFamily: showPassword ? "inherit" : "Verdana, sans-serif",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(99,102,241,0.9)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(99,102,241,0.35)")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  tabIndex={-1}
                  style={{
                    position: "absolute",
                    right: "9px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#818cf8",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {showPassword
                    ? <EyeOff style={{ width: "14px", height: "14px" }} />
                    : <Eye style={{ width: "14px", height: "14px" }} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              onClick={handleSubmit}
              style={{
                width: "100%",
                padding: "clamp(7px, 1vh, 11px)",
                background: loading
                  ? "rgba(99,102,241,0.4)"
                  : "linear-gradient(135deg, #3b82f6, #6366f1)",
                color: "white",
                border: "none",
                borderRadius: "7px",
                fontWeight: 600,
                fontSize: "clamp(11px, 0.95vw, 14px)",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.7 : 1,
                transition: "all 0.2s",
                boxShadow: "0 4px 15px rgba(99,102,241,0.35)",
                marginTop: "2px",
              }}
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </div>

          <p style={{ textAlign: "center", marginTop: "3%", color: "#a5b4fc", fontSize: "clamp(10px, 0.85vw, 12px)", marginBottom: 0 }}>
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
    </div>
  );
}