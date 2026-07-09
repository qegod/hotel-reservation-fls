import {createAsyncThunk} from "@reduxjs/toolkit";
import {userActions} from "../../../../../entities/user";
import {api} from "../../../../../shared/config/api/base.ts";

export const initAuthThunk = createAsyncThunk('user/init',
    async (_none, {dispatch}) => {
        try {
            const response = await api.get('/auth/user')
            if(!response) throw new Error('ошибка')
            const user = {id: response.data.id, username: response.data.username}
            dispatch(userActions.setUser(user))
        } catch (e) {
            console.log('Ошибка аунтификации')
        }

    })
