import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

// Replace with your actual Supabase project details
const SUPABASE_URL = "https://kodleshuklqkkcqiylzr.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvZGxlc2h1a2xxa2tjcWl5bHpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1NDkzOTcsImV4cCI6MjA1NjEyNTM5N30.2_UU2M7SWraMJ_T9ZESXCWpHMareoCHuyke5RLc9a5k";

// ✅ Corrected Supabase client initialization
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export { supabase };
