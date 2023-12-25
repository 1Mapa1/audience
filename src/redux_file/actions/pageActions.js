

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

export const saveBuildings = (data) => ({
  type: "Buildings",
  payload: data
});
