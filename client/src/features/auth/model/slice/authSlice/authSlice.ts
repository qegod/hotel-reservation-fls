import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {AuthSchema} from "../../types/authSchema.ts";
import {loginUserThunk} from "../../service/loginThunk/loginThunk.ts";

const initialState: AuthSchema = {
    password: '',
    email: '',
    error: null,
    isLoading: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },

        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },

        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUserThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUserThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string  || 'Произошла ошибка';
            })
            .addCase(loginUserThunk.fulfilled, (state) => {
                state.isLoading = false;
                state.password = '';
                state.email = '';
                state.username = '';
            })


    }
})


export const authReducer = authSlice.reducer
export const authActions = authSlice.actions;

