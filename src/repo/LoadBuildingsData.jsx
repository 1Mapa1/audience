import { supabase } from "./supabaseClient";

export async function LoadBuildingsData() {
    // Запрос к базе данных Supabase для получения данных
    const { data, error } = await supabase
      .from('Buildings')
      .select()
    if (error) {
      console.error('Ошибка при получении данных из базы данных Supabase:', error);
      return [];
    }
    if (!data) {
      console.log('Пустые данные');
      return [];
    }
    console.log(data);
    return data;
  }