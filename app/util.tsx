import { supabase } from "../lib/supabase";

export async function addProfile(memo: string) {
  const user = await getCurrentUser();
  if (!user) throw new Error("Not logged in");

  const { data, error } = await supabase
    .from("profiles")
    .insert([{ user_id: user.id, memo }]);

  if (error) throw error;
  return data;
}

export async function updateProfile(memo: string) {
  const user = await getCurrentUser();
  if (!user) throw new Error("Not logged in");

  const { data, error } = await supabase
    .from("profiles")
    .update({ memo })
    .eq("user_id", user.id); // only update current user's profile

  if (error) throw error;
  return data;
}

export async function saveProfile(memo: string) {
  const user = await getCurrentUser();
  if (!user) throw new Error("Not logged in");

  const { data, error } = await supabase.from("profiles").upsert(
    {
      user_id: user.id,
      memo,
    },
    { onConflict: "user_id" }
  );

  if (error) throw error;
  return data;
}

export async function getProfiles() {
  const user = await getCurrentUser();
  if (!user) throw new Error("Not logged in");

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", user.id); // optional, RLS already enforces this

  if (error) throw error;
  return data;
}

export async function getCurrentUser() {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) throw error;

  return session?.user || null;
}
