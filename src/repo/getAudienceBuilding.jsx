import { supabase } from "./supabaseClient";

export async function getAudienceBuilding() {
    // Запрос к базе данных Supabase для получения данных
    const { data, error } = await supabase
      .from('Audiences')
      .select('id, audience_name, building (name)')
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
