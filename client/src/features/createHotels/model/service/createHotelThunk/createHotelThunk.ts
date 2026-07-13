import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../../../../shared/config/api/base.ts";

interface data {
    name: string;
    price: number;
    title: string;
    description: string;
    images: File[];
}

export const createHotelThunk = createAsyncThunk(
    'hotels/createHotel',
    async (data: data, {rejectWithValue}) => {
        try {
            const formData = new FormData();
            formData.append('name', data.name)
            formData.append('price', data.price.toString())
            formData.append('company_id', '1')
            formData.append('title', data.title)
            formData.append('description', data.description)

            data.images.forEach(file => {
                formData.append('images', file)
            })

            return await api.post('/hotels', formData);
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

    }
)


