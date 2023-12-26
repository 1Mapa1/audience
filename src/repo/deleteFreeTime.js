import { supabase } from "./supabaseClient";

export async function deleteFreeTime(row_id) {
  try {
    const data = await supabase.from('Free_timetable').delete().eq('id', row_id).select()
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}