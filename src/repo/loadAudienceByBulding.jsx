import { supabase } from "./supabaseClient";

export async function LoadAudienceByBuilding(building_id) {
    // Запрос к базе данных Supabase для получения данных
    const { data, error } = await supabase
      .from('audience_equipment_view')
      .select()
      .eq('building', building_id).order('audience_id')
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