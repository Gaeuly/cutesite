// lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

// Kita kasih nilai default "dummy" biar build-nya lolos
// Ganti "http://example.com" dan "dummy_key" nanti kalo .env-nya udah siap
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "http://example.com";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "dummy_key";

// Cuma buat ngasih tau di console kalo kita lagi pake dummy value
if (supabaseUrl === "http://example.com") {
  console.warn(
    "Supabase URL not set. Using dummy value for build process."
  );
}

// createClient sekarang tetep jalan walaupun .env kosong,
// jadi proses build-nya nggak akan error lagi.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);