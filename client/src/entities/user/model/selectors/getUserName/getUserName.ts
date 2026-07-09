import type {StateSchema} from "../../../../../app/providers/Redux/types/StateSchema.ts";


export const getUserName = (state: StateSchema) => state.user?.authData?.username || null
