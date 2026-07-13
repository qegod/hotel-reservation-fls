import {createAsyncThunk} from "@reduxjs/toolkit";
import {userActions} from "../../../../../entities/user";
import {api} from "../../../../../shared/config/api/baseApi.ts";

export const initAuthThunk = createAsyncThunk('user/init',
    async (_none, {dispatch}) => {
        try {
            const response = await api.get<{id, username, company: {id: string}}>('/auth/user')
            if(!response) throw new Error('ошибка')

            const user = {
                id: response.data.id,
                username: response.data.username,
                company_id: null
            }

            if(response.data.company) {
                user.company_id = response.data.company.id
            }
            dispatch(userActions.setUser(user))
        } catch (e) {
            console.log('Ошибка аунтификации')
        }

    })
