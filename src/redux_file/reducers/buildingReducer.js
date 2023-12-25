import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { supabase } from 'repo/supabaseClient';

// Создаем асинхронное действие с помощью createAsyncThunk
const fetchData = createAsyncThunk('data/fetchData', async () => {
  // Ваш запрос на сервер для получения данных
  const response = await supabase.from('Buildings').select();
  return response.data;
});

// Создаем slice для хранения данных
export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: 'idle', // Допустимые значения: 'idle', 'pending', 'fulfilled', 'rejected'
    error: null,
    data: null
  },
  reducers: {}, // здесь могут быть другие reducers
  extraReducers: (builder) => {
    builder
        .addCase(fetchData.pending, (state) => {
            state.loading = 'pending';
        })
        .addCase(fetchData.fulfilled, (state, action) => {
            state.loading = 'fulfilled';
            state.data = action.payload;
        })
        .addCase(fetchData.rejected, (state, action) => {
            state.loading = 'rejected';
            state.error = action.error.message;
        });

  }
});

// Выполнение проверки и дальнейшее получение данных, если их нет
export const fetchDataIfNeeded = () => (dispatch, getState) => {
  const data = getState().data.data;
  if (data === null) {
    dispatch(fetchData());
  }
};

