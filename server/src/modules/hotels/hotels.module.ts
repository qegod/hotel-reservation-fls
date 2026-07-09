import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {Hotel} from "../../models";
import {HotelsController} from "./hotels.controller";
import {HotelsService} from "./hotels.service";
import {CompaniesModule} from "../companies/companies.module";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {HotelImageModule} from "../hotel-image/hotel-image.module";


@Module({
    imports: [
        SequelizeModule.forFeature([Hotel]),
        CompaniesModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'dont_key',
            signOptions: {
                expiresIn: '24h'
            }
        }),
        HotelImageModule
    ],
    controllers: [HotelsController],
    providers: [HotelsService],
})
export class HotelsModule {}
