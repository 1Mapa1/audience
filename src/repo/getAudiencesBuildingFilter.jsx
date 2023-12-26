import { supabase } from "./supabaseClient";

export async function getAudiencesBuildingFilter(building_id) {
// Запрос к базе данных Supabase для получения данных
const { data, error } = await supabase
    .from('Audiences')
    .select('id, audience_name, building (id, name)')
    .eq('building.id', building_id)
    .not('building', 'is', null);
    console.log(data)
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