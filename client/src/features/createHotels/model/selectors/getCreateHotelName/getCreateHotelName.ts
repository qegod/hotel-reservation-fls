import type {StateSchema} from "../../../../../app/providers/StoreProvider/types/StateSchema.ts";


export const getCreateHotelName = (state: StateSchema) => state.createHotel.name || ''
