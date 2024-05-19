import { createClient } from "@supabase/supabase-js";

const SUPABASE_API_URL = "https://tmmbzkwdbgmnfumxwezi.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtbWJ6a3dkYmdtbmZ1bXh3ZXppIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNjA3MjE0MSwiZXhwIjoyMDMxNjQ4MTQxfQ.VDgvq42CFF8rdLkzxXzLvqkBzvrw4anxmlObrUOyYWI";

const supabase = createClient(SUPABASE_API_URL, SUPABASE_ANON_KEY);

export const listWorkspaces = async () => {
  const { data, error } = await supabase.from("workspaces").select();
  if (error) {
    // TODO: use toast
    throw error;
  }
  return data;
};

export const createWorkspace = async (newWorkspace) => {
  const { data, error } = await supabase
    .from("workspaces")
    .insert(newWorkspace)
    .select()
    .single();
  if (error) {
    throw error;
  }
  return data;
};
