import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {AuthSchema} from "../../types/authSchema.ts";
import {loginUserThunk} from "../../service/loginThunk/loginThunk.ts";
import {registerUserThunk} from "../../service/registerThunk/registerThunk.ts";

const initialState: AuthSchema = {
    username: '',
    password: '',
    email: '',
    error: null,
    isLoading: false,
}

const resolveError = (erros: string[]): string => {
    let result = '';
    erros.map((error: string) => result += `${error} `);
    return result;
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
                state.error =
                        Array.isArray(action.payload)
                        ?
                        resolveError(action.payload)
                        :
                        'Произошла ошибка'
            })
            .addCase(loginUserThunk.fulfilled, (state) => {
                state.isLoading = false;
                state.password = '';
                state.email = '';
                state.username = '';
            })

            .addCase(registerUserThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUserThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error =
                    Array.isArray(action.payload)
                    ?
                    resolveError(action.payload)
                    :
                    'Произошла ошибка'
            })
            .addCase(registerUserThunk.fulfilled, (state) => {
                state.isLoading = false;
                state.password = '';
                state.email = '';
                state.username = '';
            })


    }
})


export const authReducer = authSlice.reducer
export const authActions = authSlice.actions;

