import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {Hotel, HotelSchema} from "../types/hotelSchema.ts";
import {fetchHotelsThunk} from "../../../../features/fetchHotels";


const initialState: HotelSchema = {
    hotels: null,
    error: null,
    isLoading: false,
    limit: 10,
    totalPages: null,
    page: 1
}

const hotelsSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        setLimit: (state: HotelSchema, action: PayloadAction<number>) => {
            state.limit = action.payload
        },
        setPage: (state: HotelSchema, action: PayloadAction<number>) => {
            state.page = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHotelsThunk.pending, (state: HotelSchema) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(fetchHotelsThunk.rejected, (state: HotelSchema, action) => {
            state.isLoading = false
            state.error = action.payload as string
        })
        builder.addCase(fetchHotelsThunk.fulfilled, (state: HotelSchema, action: PayloadAction<{items: Hotel[], totalPages: number}>) => {
            state.isLoading = false
            state.hotels = action.payload.items
            state.totalPages = action.payload.totalPages
        })
    }})



export const hotelReducer = hotelsSlice.reducer
export const hotelActions = hotelsSlice.actions
