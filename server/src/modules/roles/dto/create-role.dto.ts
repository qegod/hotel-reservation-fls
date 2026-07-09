import {IsNotEmpty, IsString} from "class-validator";


export class CreateRoleDto {
    @IsNotEmpty({message: 'поле не должно быть пустым'})
    @IsString({message: 'должно быть строкой'})
    name: string;
}
