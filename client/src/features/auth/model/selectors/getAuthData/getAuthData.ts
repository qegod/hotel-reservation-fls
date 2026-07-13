import type {StateSchema} from "../../../../../app/providers/StoreProvider/types/StateSchema.ts";

export const getAuthData = (state: StateSchema) => state.auth;
