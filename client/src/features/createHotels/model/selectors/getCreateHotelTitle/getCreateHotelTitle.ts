import type {StateSchema} from "../../../../../app/providers/StoreProvider/types/StateSchema.ts";


export const getCreateHotelTitle = (state: StateSchema) => state.createHotel?.title || ''
