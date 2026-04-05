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

  const inputStyle: React.CSSProperties = {
    width: "100%",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingRight: "12px",
    paddingLeft: "34px",
    background: "rgba(255, 255, 255, 0.05)",  // very subtle dark tint — blends with bg
    border: "1px solid rgba(99, 102, 241, 0.2)", // barely visible soft indigo line
    borderRadius: "8px",
    color: "white",
    fontSize: "13px",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
    WebkitAppearance: "none",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Full-screen background */}
      <img
        src="/tech_login_background_v2.svg"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          display: "block",
        }}
      />

      {/* Card — transparent, no border, no shadow */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "min(420px, 88vw)",
          padding: "36px 32px",
          background: "transparent",
          border: "none",
          boxShadow: "none",
        }}
      >
        {/* Logo and Title */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              background: "linear-gradient(135deg, #3b82f6, #6366f1)",
              borderRadius: "16px",
              marginBottom: "14px",
              boxShadow: "0 0 28px rgba(99,102,241,0.5)",
            }}
          >
            <LogIn style={{ width: "26px", height: "26px", color: "white" }} />
          </div>
          <h1 style={{ fontSize: "22px", fontWeight: 700, color: "white", margin: 0 }}>
            Welcome Back
          </h1>
          <p style={{ color: "#a5b4fc", marginTop: "6px", fontSize: "14px" }}>
            Sign in to continue coding
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          {/* Email */}
          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: 500, color: "#c7d2fe", marginBottom: "6px" }}>
              Email Address
            </label>
            <div style={{ position: "relative" }}>
              <Mail style={{ position: "absolute", left: "11px", top: "50%", transform: "translateY(-50%)", width: "15px", height: "15px", color: "#818cf8" }} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "rgba(99,102,241,0.7)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(99,102,241,0.2)")}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: 500, color: "#c7d2fe", marginBottom: "6px" }}>
              Password
            </label>
            <div style={{ position: "relative" }}>
              <Lock style={{ position: "absolute", left: "11px", top: "50%", transform: "translateY(-50%)", width: "15px", height: "15px", color: "#818cf8" }} />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{
                  ...inputStyle,
                  paddingRight: "40px",
                  letterSpacing: showPassword ? "normal" : "0.15em",
                  fontFamily: showPassword ? "inherit" : "Verdana, sans-serif",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(99,102,241,0.7)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(99,102,241,0.2)")}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
                style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#818cf8", padding: 0, display: "flex", alignItems: "center" }}
              >
                {showPassword ? <EyeOff style={{ width: "15px", height: "15px" }} /> : <Eye style={{ width: "15px", height: "15px" }} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "11px",
              background: "linear-gradient(135deg, #3b82f6, #6366f1)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "14px",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.6 : 1,
              transition: "opacity 0.2s",
              boxShadow: "0 4px 20px rgba(99,102,241,0.4)",
              marginTop: "2px",
            }}
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "20px", color: "#a5b4fc", fontSize: "13px" }}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "white", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "3px" }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}