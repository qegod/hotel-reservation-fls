import {IsNumber, IsString, Length} from "class-validator";

export class CreateHotelDto {
    @IsString()
    @Length(3, 20)
    name: string;

    @IsNumber()
    price: number;

    @IsNumber()
    company_id: number;

    @IsString()
    title: string;

    @IsString()
    description: string;
}

