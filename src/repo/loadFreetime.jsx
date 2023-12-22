import { supabase } from "./supabaseClient";

export async function loadFreeTime(building_id, date) {
    // Запрос к базе данных Supabase для получения данных
    const { data, error } = await supabase
    .from('Free_timetable')
    .select("* , Audiences!inner (audience_name, building)")
    .eq('Audiences.building', building_id)
    .eq("date", date)
    
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