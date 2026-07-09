import type {StateSchema} from "../../../../../app/providers/Redux/types/StateSchema.ts";

export const getAuthData = (state: StateSchema) => state.auth;
