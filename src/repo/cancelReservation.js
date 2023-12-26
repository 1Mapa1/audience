import { supabase } from "./supabaseClient";

export async function cancelReservation(reservation_id) {
  try {
    const data = await supabase.from('Pull_record_timetable').update({
      status_id: 4,
    })
    .eq('id', reservation_id)
    .select();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}