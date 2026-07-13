import type {StateSchema} from "../../../../../app/providers/StoreProvider/types/StateSchema.ts";


export const getCreateHotelLoading = (state: StateSchema) => state.createHotel.isLoading || false
