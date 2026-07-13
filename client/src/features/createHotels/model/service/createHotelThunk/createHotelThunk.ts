import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../../../../shared/config/api/baseApi.ts";
import {errorHandler} from "../../../../../shared/lib/errorHandler/errorHandler.ts";

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
            return rejectWithValue(errorHandler(error));

        }
    }
)


