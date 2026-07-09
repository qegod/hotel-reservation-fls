import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../../../../shared/config/api/base.ts";


export const fetchHotelsThunk = createAsyncThunk(
    'hotels/fetchHotels',
    async ({page, limit}: {page: number, limit: number}, {rejectWithValue}) => {
        try {
            const response = await api.get('/hotels', { params: {page, limit} })
            return response.data;
        } catch (error) {
            console.error('Login error:', error);

            // ✅ Извлекаем сообщение об ошибке из ответа сервера
                let errorMessage = 'Произошла ошибка при входе';

            if (error.response) {
                // Ошибка от сервера
                errorMessage = error.response.data?.message ||
                    error.response.data?.error ||
                    error.response.statusText ||
                    errorMessage;
            } else if (error.request) {
                // Ошибка сети
                errorMessage = 'Нет соединения с сервером';
            } else if (error.message) {
                errorMessage = error.message;
            }

            // ✅ Возвращаем строку с ошибкой
            return rejectWithValue(errorMessage);            }



})
