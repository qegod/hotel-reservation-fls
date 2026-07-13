import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {Company} from "../../models";
import {CompaniesController} from "./companies.controller";
import {CompaniesService} from "./companies.service";
import {UsersModule} from "../users/users.module";
import {JwtModule} from "@nestjs/jwt";


@Module({
    imports: [
        SequelizeModule.forFeature([Company]),
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'dont_key',
            signOptions: {
                expiresIn: '24h'
            }
        }),
        UsersModule,
    ],
    controllers: [CompaniesController],
    providers: [CompaniesService],
    exports: [CompaniesService],
})
export class CompaniesModule {}
