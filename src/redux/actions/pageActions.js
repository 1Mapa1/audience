import { getAllAudience } from "repo/getAllAudience";

export const setReservationData = data => {
  return {
    type: 'SET_Reservation_Page',
    payload: data
  };
};

export const setAudienceData = data => {
  return {
    type: 'SET_Audience_Page',
    payload: data
  };
};

export const saveAllAudiences = (data) => ({
  type: "All_Audiences",
  payload: data
});


export const fetchAllAudiencesData = () => {
  return async (dispatch, getState) => {
    try {
      // Получить данные из хранилища Redux
      const data = getState().data;
      
      // Если данных нет, выполнить запрос к серверу
      if (!data) {
        const res = await getAllAudience();
        dispatch(saveAllAudiences(res));
      }
      } catch (error) {
        dispatch(saveAllAudiences(`Error: ${error}`));
      }
  };
};

export const getData = (state) => state.data;