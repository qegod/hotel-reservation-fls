import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {HotelImage} from "../../models/hotel-image.model";
import {HotelImageDto} from "./dto/create-hotel-image.dto";
import {CompaniesService} from "../companies/companies.service";
import {FilesService} from "../files/files.service";


@Injectable()
export class HotelImageService {
    constructor(@InjectModel(HotelImage) private hotelImageProvider: typeof HotelImage,
                private filesService: FilesService,) {}

    async addImage(dto: HotelImageDto) {
        const filename = await this.filesService.createFile(dto.image)

        return this.hotelImageProvider.create({hotel_id: dto.hotel_id, filename})
    }

    async getImage(hotel_id: number) {
        return await this.hotelImageProvider.findOne(
            {where: {hotel_id: hotel_id}}
        );
    }

    async getAllImages(hotel_id: number) {
        return await this.hotelImageProvider.findAll({
            where: {hotel_id: hotel_id}
        })
    }


}
