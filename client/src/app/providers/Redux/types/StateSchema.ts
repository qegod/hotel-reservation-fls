import type {AuthSchema} from "../../../../features/auth";
import type {UserSchema} from "../../../../entities/user";
import type {HotelSchema} from "../../../../entities/hotel";

export interface StateSchema {
    auth: AuthSchema,
    user: UserSchema,
    hotel: HotelSchema,
}
