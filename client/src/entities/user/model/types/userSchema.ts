export interface UserSchema {
    authData?: User
}

export interface User {
    id: number
    username: string
    company_id?: number
}
