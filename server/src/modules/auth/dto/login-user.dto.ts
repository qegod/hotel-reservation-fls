import {IsEmail, IsString, Length, MinLength} from "class-validator";


export class LoginUserDto {

    @IsString({message: "поле email должно быть строкой"})
    @IsEmail({}, {message: "некорректный email"})
    email: string;

    @IsString({message: "поле password должно быть строкой"})
    @MinLength(3, {message: "длинна пароля не меньше 3"})
    password: string;
}
