import type {StateSchema} from "../../../../../app/providers/StoreProvider/types/StateSchema.ts";


export const getTotalPages = (state: StateSchema) => state.hotel?.totalPages || null;
