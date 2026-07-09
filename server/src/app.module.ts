import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import path from "node:path";
import {SequelizeModule} from "@nestjs/sequelize";
import {UsersModule} from "./modules";
import {Company, Hotel, Role, User, UserRoles} from "./models";
import {HotelsModule} from "./modules/hotels/hotels.module";
import {CompaniesModule} from "./modules/companies/companies.module";
import {RolesModule} from "./modules/roles/rolse.module";
import {AuthModule} from "./modules/auth/auth.module";
import {HotelImageModule} from "./modules/hotel-image/hotel-image.module";
import {HotelImage} from "./models/hotel-image.model";

@Module({
    imports: [
        ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: path.resolve(__dirname,'..', ".env"),
    }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            models: [User, Hotel, Company, Role, UserRoles, HotelImage],
            autoLoadModels: true,
            logging: true,
            synchronize: true
        }),


        UsersModule,
        HotelsModule,
        CompaniesModule,
        RolesModule,
        AuthModule,
        HotelImageModule
    ],


})
export class AppModule {
}
