import type {StateSchema} from "../../../../../app/providers/StoreProvider/types/StateSchema.ts";


export const getCreateHotelPrice = (state: StateSchema) => state.createHotel.price || 0
