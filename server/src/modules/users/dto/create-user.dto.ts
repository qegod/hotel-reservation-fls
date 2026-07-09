import {IsEmail, IsString, Length} from "class-validator";


export class CreateUserDto {
    @IsString({message: "поле должно быть строкой"})
    @Length(4, 20, {message: "длинна не меньше 4 и не больше 20"})
    username: string;

    @IsString({message: "поле должно быть строкой"})
    @IsEmail({}, {message: "некорректный email"})
    email: string;

    @IsString({message: "поле должно быть строкой"})
    @Length(3, 30,{message: "длинна не меньше 3 и не больше 30"})
    password: string;
}
