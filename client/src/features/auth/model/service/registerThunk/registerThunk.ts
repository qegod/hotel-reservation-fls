import {createAsyncThunk} from "@reduxjs/toolkit";
import {userActions} from "../../../../../entities/user";
import {LOCAL_STORAGE_TOKEN} from "../../../../../shared/config/api/consts.ts";
import {api} from "../../../../../shared/config/api/base.ts";

interface dataType {
    username: string;
    password: string;
    email: string;
}

export const registerUserThunk = createAsyncThunk('user/register',
    async (data: dataType, {dispatch, rejectWithValue}) => {
        try {
            const token = await api.post('/auth/register', data)
            localStorage.setItem(LOCAL_STORAGE_TOKEN, token.data)

            const response = await api.get('/auth/user')
            const user = {id: response.data.id, username: response.data.username}

            dispatch(userActions.setUser(user))
            return user
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
            return rejectWithValue(errorMessage);
        }
    }
)
