import {IsEmail, IsString, Length, MinLength} from "class-validator";


export class LoginUserDto {

    @IsString({message: "поле должно быть строкой"})
    @IsEmail({}, {message: "некорректный email"})
    email: string;

    @IsString({message: "поле должно быть строкой"})
    @MinLength(3, {message: "длинна не меньше 3"})
    password: string;
}
