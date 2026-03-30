// src/hooks/useAuth.tsx
import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // ✅ FIX ADDED

  useEffect(() => {
    // ✅ Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('Session:', session);
      setUser(session?.user ?? null);
      setLoading(false); // ✅ now valid
    });

    // ✅ Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        console.log('Auth event:', _event, session);
        setUser(session?.user ?? null);
        setLoading(false); // ✅ now valid
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  // ✅ SIGN UP
  const signUp = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin,
        }
      });

      if (error) {
        console.error('Signup error:', error);
        return { data: null, error };
      }

      console.log('Signup success:', data);
      return { data, error: null };
    } catch (error: any) {
      return { data: null, error };
    }
  };

  // ✅ SIGN IN
  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Login error:', error);
        return { data: null, error };
      }

      console.log('Login success:', data);
      return { data, error: null };
    } catch (error: any) {
      return { data: null, error };
    }
  };

  // ✅ SIGN OUT
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  };

  return {
    user,
    loading, // ✅ FIX RETURNED
    signUp,
    signIn,
    signOut,
  };
}