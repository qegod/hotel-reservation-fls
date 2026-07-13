import type {StateSchema} from "@/app/providers/StoreProvider/types/StateSchema.ts";


export const getCompanyId = (state: StateSchema) => state.user?.authData?.company_id || null
