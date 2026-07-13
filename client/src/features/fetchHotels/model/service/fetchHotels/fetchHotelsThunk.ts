import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../../../../shared/config/api/baseApi.ts";
import {errorHandler} from "../../../../../shared/lib/errorHandler/errorHandler.ts";


export const fetchHotelsThunk = createAsyncThunk(
    'hotels/fetchHotels',
    async ({page, limit}: {page: number, limit: number}, {rejectWithValue}) => {
        try {
            const response = await api.get('/hotels', { params: {page, limit} })
            return response.data;
        } catch (error) {
            return rejectWithValue(errorHandler(error));
        }



})
