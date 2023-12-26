import { supabase } from "./supabaseClient";

export async function addFreeTime(payload) {
  try {
    const data = await supabase.from('Free_timetable').insert({
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