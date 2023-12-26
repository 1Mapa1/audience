import { supabase } from "./supabaseClient";

export async function getReservationByUser(user_id) {
    // Запрос к базе данных Supabase для получения данных
    const { data, error } = await supabase
      .from('Pull_record_timetable')
      .select(
      `id,
      date,
      starting_time,
      end_time,
      audience_id(id, audience_name, images_links, building(id, name)),
      status_id(id, status_name),
      event_id!inner(id, name, responsible_id)
      `)
      .eq('event_id.responsible_id', user_id)
      
      
    if (error) {
      console.error('Ошибка при получении данных из базы данных Supabase:', error);
      return [];
    }
    if (!data) {
      console.log('Пустые данные');
      return [];
    }
    return data;
  }