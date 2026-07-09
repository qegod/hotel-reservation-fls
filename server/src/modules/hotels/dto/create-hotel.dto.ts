import {IsArray, IsNumber, IsString, Length, ValidateNested} from "class-validator";
import {Type} from "class-transformer";

export class HotelDtoData {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsArray()
    @IsString({ each: true })
    images: string[];
}


export class CreateHotelDto {
    @IsString()
    @Length(3, 20)
    name: string;

    @IsNumber()
    price: number;

    @IsNumber()
    company_id: number;

    @ValidateNested()
    @Type(() => HotelDtoData)
    data: HotelDtoData;
}

