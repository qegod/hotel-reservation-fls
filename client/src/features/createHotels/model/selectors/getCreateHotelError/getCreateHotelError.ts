import type {StateSchema} from "../../../../../app/providers/StoreProvider/types/StateSchema.ts";


export const getCreateHotelError = (state: StateSchema) => state.createHotel?.error || ''
