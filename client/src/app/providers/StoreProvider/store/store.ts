import {configureStore, type ReducersMapObject} from "@reduxjs/toolkit";
import type {StateSchema} from "../types/StateSchema.ts";
import {authReducer} from "../../../../features/auth/model/slice/authSlice/authSlice.ts";
import {userReducer} from "../../../../entities/user";
import {useDispatch} from "react-redux";
import {hotelReducer} from "../../../../entities/hotel";
import {createHotelReducer} from "../../../../features/createHotels";

const defaultReducer: ReducersMapObject<StateSchema> = {
    auth: authReducer,
    user: userReducer,
    hotel: hotelReducer,
    createHotel: createHotelReducer,
}


export const store = configureStore({
    reducer: defaultReducer,
    devTools: true
});


export type RootState = ReturnType<typeof store.dispatch>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
