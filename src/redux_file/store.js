import { configureStore } from '@reduxjs/toolkit';
import { buildingsReducer, dataSlice} from './reducers/buildingReducer';
import { pageReducer } from './reducers/pageReducer';

const store = configureStore({
  reducer: {
    page: pageReducer,
    data: dataSlice.reducer
    // другие редьюсеры при необходимости
  },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  
  // middleware и другие настройки можно добавить здесь
});

export default store;