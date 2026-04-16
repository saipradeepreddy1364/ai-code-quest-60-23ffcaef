import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { createClient } from "@supabase/supabase-js";

// ── Keep-alive: prevent Supabase & Render from auto-pausing ──────────────────

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const backendUrl = (import.meta.env.VITE_BACKEND_URL || 'https://backend-4k4j.onrender.com').replace(/\/$/, '');

// Ping Supabase every 4 days to prevent auto-pause
const keepSupabaseAlive = async () => {
  try {
    const supabase = createClient(supabaseUrl, supabaseKey);
    await supabase.auth.getSession();
    console.log('✅ Supabase keep-alive ping sent');
  } catch (e) {
    // silently ignore
  }
};

// Ping Render backend every 10 minutes to prevent sleep
const keepBackendAlive = async () => {
  try {
    await fetch(`${backendUrl}/api/health`);
    console.log('✅ Backend keep-alive ping sent');
  } catch (e) {
    // silently ignore
  }
};

// Run on app load
keepSupabaseAlive();
keepBackendAlive();

// Repeat on intervals
setInterval(keepSupabaseAlive, 4 * 24 * 60 * 60 * 1000);  // every 4 days
setInterval(keepBackendAlive, 10 * 60 * 1000);              // every 10 minutes

// ────────────────────────────────────────────────────────────────────────────

createRoot(document.getElementById("root")!).render(<App />);