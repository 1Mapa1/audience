import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';

import pageReducer from './reducers/pageReducer';

const store = configureStore({
  reducer: {
    page: pageReducer,
    // другие редьюсеры при необходимости
  },
  // middleware и другие настройки можно добавить здесь
});

export default store;