import { supabase } from "./supabaseClient";

export async function uploadAudience(payload) {

  const uploadPromises = payload.images.map(async (file, index) => {
    const folderName = 'audiences/' + "data_ram";
    const fileName = folderName + '/' + file.name;
    console.log(fileName)
    const { data, error } = await supabase.storage
      .from('spacesharing')
      .upload(fileName, file, { cacheControl: '3600' });
    if (error) {
      console.error('Ошибка при загрузке файла:', error);
      return null;
    }
    return data;
  });

  const results = await Promise.all(uploadPromises);

  const imagesLinks = results.map(async (row, index) => {
    const { data, error } = await supabase.storage
      .from('spacesharing')
      .getPublicUrl(row.path);
    if (error) {
      console.error('Ошибка при загрузке файла:', error);
      return null;
    }
    return data.publicUrl;
  });

  const image_links = await Promise.all(imagesLinks);


  const data = await supabase.from('Audiences').insert({
    audience_name: payload.name,
    address: payload.address,
    type: payload.typeAudience_id,
    building: payload.building_id,
    square: payload.square,
    capacity: payload.extra_fields.seats,
    images_links: image_links
  }).select();

  return data;
}

