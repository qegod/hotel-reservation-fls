import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Post,
    Req,
    UseGuards,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {AuthService} from './auth.service';
import {LoginUserDto} from './dto/login-user.dto';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {JwtAuthGuard} from "../../common/guards/jwt-auth.guard";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    @UsePipes(new ValidationPipe())
    async userLogin(@Body() dto: LoginUserDto) {
        return this.authService.login(dto);
    }

    @Post('register')
    @UsePipes(new ValidationPipe())
    async userRegister(@Body() dto: CreateUserDto) {
        return this.authService.register(dto);
    }

    @Get('user')
    @UseGuards(JwtAuthGuard)
    async getUser(@Req() req) {
        return this.authService.getUser(req);
    }
}
