import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {User, UserSchema} from "../types/userSchema.ts";

const initialState: UserSchema = {
    authData: undefined,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
        },

        removeUser: (state) => {
            state.authData = null
        }
    }
})

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
