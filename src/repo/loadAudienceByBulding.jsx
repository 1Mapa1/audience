import { supabase } from "./supabaseClient";

export async function LoadAudienceByBuilding(building_id) {
    // Запрос к базе данных Supabase для получения данных
    const { data, error } = await supabase
      .from('Audiences')
      .select()
      .eq('building', building_id)
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