import {Module} from "@nestjs/common";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {AuthService} from "./auth.service";
import {AuthController} from "./auth.controller";
import {UsersModule} from "../users/users.module";
import {JwtAuthGuard} from "../../common/guards/jwt-auth.guard";


@Module({
    imports : [
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'dont_key',
            signOptions: {
                expiresIn: '24h'
            }
        }),
        UsersModule
    ],
    providers: [AuthService, JwtAuthGuard],
    controllers: [AuthController],
    exports: [JwtModule],
})
export class AuthModule {}
