import type {StateSchema} from "../../../../../app/providers/Redux/types/StateSchema.ts";


export const getTotalPages = (state: StateSchema) => state.hotel?.totalPages || null;
