import type {StateSchema} from "../../../../../app/providers/StoreProvider/types/StateSchema.ts";


export const getHotels = (state: StateSchema) => state.hotel?.hotels || null;
