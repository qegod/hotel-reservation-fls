import {IsEmail, IsString, Length} from "class-validator";


export class CreateUserDto {
    @IsString({message: "поле username должно быть строкой"})
    @Length(4, 20, {message: "длинна username не меньше 4 и не больше 20"})
    username: string;

    @IsString({message: "поле email должно быть строкой"})
    @IsEmail({}, {message: "некорректный email"})
    email: string;

    @IsString({message: "поле password должно быть строкой"})
    @Length(3, 30,{message: "длинна пароля не меньше 3 и не больше 30"})
    password: string;
}
