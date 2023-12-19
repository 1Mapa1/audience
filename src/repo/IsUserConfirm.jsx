import { supabase } from "./supabaseClient";

export async function isUserConfirm(login, password) {
    // Запрос к базе данных Supabase для получения данных
    const { data, error } = await supabase
      .from('Users')
      .select()
      .eq('login', login)
      .single();
    if (error) {
      console.error('Ошибка при получении данных из базы данных Supabase:', error);
      return null;
    }
    if (!data) {
      console.log('Пользователь не найден');
      return null;
    }
    
    if ((data.login === login) && (data.password === password)) {
      return data;
    } 
    else {
      return null;
    }
  }