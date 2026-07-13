import {Injectable, NotFoundException} from "@nestjs/common";
import {CreateHotelDto} from "./dto/create-hotel.dto";
import {Hotel} from "../../models";
import {InjectModel} from "@nestjs/sequelize";
import {CompaniesService} from "../companies/companies.service";
import {HotelImageService} from "../hotel-image/hotel-image.service";


@Injectable()
export class HotelsService {
    constructor(@InjectModel(Hotel) private hotelProvider: typeof Hotel,
                private companiesService: CompaniesService,
                private hotelImageService: HotelImageService
                ) {}

    async create(dto: CreateHotelDto, images) {
        const company = await this.companiesService.findById(Number(dto.company_id));


        if(!company) {
            throw new NotFoundException("Компания не найдена");
        }

        const hotel = await this.hotelProvider.create({...dto, price: Number(dto.price)});

        await Promise.all(images.map(image =>
            this.hotelImageService.addImage({
                image: image,
                hotel_id: Number(hotel.id)
            })
        ))



        return {message: 'Successfully created hotel'};
    }

    async getAll(page: number, limit: number) {
        const offset = (page - 1) * limit;

        const { rows, count } = await this.hotelProvider.findAndCountAll({
            limit,
            offset,
            include: {all: true}
        }

        );

        return {
            items: rows,
            totalPages: Math.ceil(count / limit),
        };
    }

    async deleteAll() {
        await this.hotelProvider.destroy({truncate: true});
    }
}
