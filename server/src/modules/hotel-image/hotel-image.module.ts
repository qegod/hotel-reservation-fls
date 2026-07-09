import {Module} from "@nestjs/common";
import {HotelImageService} from "./hotel-image.service";
import {HotelImage} from "../../models/hotel-image.model";
import {SequelizeModule} from "@nestjs/sequelize";
import {FilesModule} from "../files/files.module";


@Module({
    imports: [
        SequelizeModule.forFeature([HotelImage]),
        FilesModule,

    ],
    providers: [HotelImageService],
    exports: [HotelImageService],
})
export class HotelImageModule {}
