import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import path from "node:path";
import {SequelizeModule} from "@nestjs/sequelize";
import {UsersModule} from "./modules";
import {User} from "./models";

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
            models: [User],
            autoLoadModels: true,
            logging: true,
            synchronize: true
        }),

        UsersModule
    ],


})
export class AppModule {
}
