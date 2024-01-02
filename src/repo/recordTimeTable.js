import { supabase } from "./supabaseClient";

export async function recordTimetable(reservation_data, event_id) {
  await supabase.from('Pull_record_timetable').insert({
    date: reservation_data.date,
    starting_time: reservation_data.starting_time,
    end_time: reservation_data.end_time,
    location_id: reservation_data.location_id,
    status_id: 1,
    event_id: event_id
  }).select()
  .then(data => {
    console.log(data)
    return data;
  })
  .catch(error => {
    console.error(error)
    return null;
  })
} 
