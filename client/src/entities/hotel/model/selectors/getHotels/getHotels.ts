import type {StateSchema} from "../../../../../app/providers/Redux/types/StateSchema.ts";


export const getHotels = (state: StateSchema) => state.hotel?.hotels || null;
