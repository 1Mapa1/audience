import { supabase } from "./supabaseClient";

export async function editFreeTime(payload) {
  try {
    const data = await supabase.from('Free_timetable').update({
      starting_time: payload.starting_time,
      end_time: payload.end_time,
    })
    .eq('id', payload.row_id)
    .select();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}