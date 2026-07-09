import {Module} from "@nestjs/common";
import {UsersService} from "./users.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../../models";
import {UsersController} from "./users.controller";
import {RolesModule} from "../roles/rolse.module";
import {JwtModule} from "@nestjs/jwt";
import {JwtAuthGuard} from "../../common/guards/jwt-auth.guard";


    @Module({
        imports:[
            SequelizeModule.forFeature([User]),
            RolesModule,
            JwtModule.register({
                secret: process.env.JWT_SECRET || 'dont_key',
                signOptions: {
                    expiresIn: '24h'
                }
            }),    ],
        providers: [UsersService, JwtAuthGuard],
        controllers: [UsersController],
        exports: [UsersService],
    })
    export class UsersModule {}
