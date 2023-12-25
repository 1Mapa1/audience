import { supabase } from "./supabaseClient";

export async function getAudienceBuildingFilter(building) {
// Запрос к базе данных Supabase для получения данных
const { data, error } = await supabase
    .from('Audiences')
    .select('id, audience_name, building (id, name)')
    .eq('building.id', building.value)
    .not('building', 'is', null);
if (error) {
    console.error('Ошибка при получении данных из базы данных Supabase:', error);
    return [];
}
if (!data) {
    console.log('Пустые данные');
    return [];
}
console.log(12);
console.log(data);
return data;
}