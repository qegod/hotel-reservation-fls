import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {CreateHotelSchema} from "../types/createHotelSchema.ts";
import {createHotelThunk} from "../service/createHotelThunk/createHotelThunk.ts";

const initialState: CreateHotelSchema = {

    name: '',
    price: 0,
    description: '',
    title: '',
    isLoading: false,
    error: null,
}


const createHotelSlice = createSlice({
    name: 'createHotel',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },

        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },

        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        setPrice: (state, action: PayloadAction<number>) => {
            state.price = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createHotelThunk.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })

        builder.addCase(createHotelThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        })

        builder.addCase(createHotelThunk.fulfilled, (state) => {
            state.isLoading = false;
        })
    }
}

)

export const createHotelReducer= createHotelSlice.reducer;
export const createHotelActions = createHotelSlice.actions;
