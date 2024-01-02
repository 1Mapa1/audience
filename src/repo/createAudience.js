import { supabase } from "./supabaseClient";

export async function createAudience(payload) {
  try {
    const data = await supabase.from('Audiences').insert({
      date: payload.date,
      end_time: payload.end_time,
      starting_time: payload.starting_time,
      audience_id: payload.audience_id
    }).select();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}