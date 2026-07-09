import {IsString, Length} from "class-validator";


export class CreateCompanyDto {
    @IsString({message: "поле должно быть строкой"})
    @Length(3,20, {message: "не меньше 3 не больше 20"})
    name: string;

}
