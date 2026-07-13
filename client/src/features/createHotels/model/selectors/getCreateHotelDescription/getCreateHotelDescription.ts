import type {StateSchema} from "../../../../../app/providers/StoreProvider/types/StateSchema.ts";


export const getCreateHotelDescription = (state: StateSchema) => state.createHotel?.description || ''
