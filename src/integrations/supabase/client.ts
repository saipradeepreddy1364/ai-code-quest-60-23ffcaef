// src/integrations/supabase/client.ts
import { createClient } from '@supabase/supabase-js';

// ✅ Use ENV variables (CORRECT WAY)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Debug logs
console.log('📋 Supabase connection check:');
console.log('URL:', supabaseUrl);
console.log('Key exists:', !!supabaseAnonKey);
console.log('Key preview:', supabaseAnonKey?.substring(0, 20) + '...');

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    '%c❌ Supabase credentials missing!\nCheck your .env file',
    'color: red; font-weight: bold; font-size: 14px;'
  );
  throw new Error('Supabase credentials not found');
}

// Create client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log('✅ Supabase client initialized successfully');