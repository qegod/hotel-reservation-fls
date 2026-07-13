import {createAsyncThunk} from "@reduxjs/toolkit";
import {userActions} from "@/entities/user";
import {LOCAL_STORAGE_TOKEN} from "@/shared/config/api/baseApi.ts";
import {api} from "@/shared/config/api/baseApi.ts";
import {errorHandler} from "@/shared/lib/errorHandler/errorHandler.ts";

export const loginUserThunk = createAsyncThunk('user/login',
        async (data: {email: string, password: string}, {rejectWithValue, dispatch}) => {
            try {
                if(!data.email || !data.password) throw new Error('empty data');
                const token = await api.post('/auth/login', data)
                localStorage.setItem(LOCAL_STORAGE_TOKEN, token.data)

                const response = await api.get<{id, username, company: {id: string}}>('/auth/user')

                const user = {
                    id: response.data.id,
                    username: response.data.username,
                    company_id: null
                }

                if(response.data.company) {
                    user.company_id = response.data.company.id
                }

                dispatch(userActions.setUser(user))
                return user
            } catch (error) {
                return rejectWithValue(errorHandler(error));
            }
})
