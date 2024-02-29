import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qmmyfwjawolgzdqrfvhx.supabase.co";
const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtbXlmd2phd29sZ3pkcXJmdmh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxNjk0NTMsImV4cCI6MjAyNDc0NTQ1M30.uQDhy_qcSxLvydR48G0i-3EHLHY8PjxYRLU5T15XNYE";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;