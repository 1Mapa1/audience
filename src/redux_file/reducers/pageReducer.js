const initialState = {
    pageAudienceData: null,
    pageReservationData: null
  };
  
export function pageReducer (state = initialState, action) {
    switch (action.type) {
      case 'SET_Reservation_Page':
        return {
          ...state,
          pageReservationData: action.payload
        };
      case 'SET_Audience_Page':
        return {
          ...state,
          pageAudienceData: action.payload
        };


      // другие действия и их обработка
      default:
        return state;
    }
  };