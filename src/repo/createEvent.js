import { supabase } from "./supabaseClient";

export async function createEvent(reservation_data, formdata, user) {
  try {
    const data = await supabase.from('Events').insert({
      name: formdata.name,
      estimated_number_people: formdata.people_count,
      description: formdata.description,
      responsible_id: user
    }).select();

    const eventId = data.data[0].id;

    // Вызов функции обработки расписания после успешного создания события
    const timetableData = await recordTimetable(reservation_data, eventId);
    console.log('Данные расписания:', timetableData);
    return eventId; // Возвращает eventId
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function recordTimetable(reservation_data, event_id) {
  try {
    const data = await supabase.from('Pull_record_timetable').insert({
      date: reservation_data.date,
      starting_time: reservation_data.starting_time,
      end_time: reservation_data.end_time,
      audience_id: reservation_data.audience_id,
      status_id: 1,
      event_id: event_id
    }).select();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
