import {Body, Controller, Get, Post, Req, UseGuards, UsePipes} from "@nestjs/common";
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ValidationPipe} from "../../common/pipes/validation.pipe";
import {AuthGuard} from "@nestjs/passport";
import {JwtAuthGuard} from "../../common/guards/jwt-auth.guard";


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}


    @Post()
    @UsePipes(new ValidationPipe())
    async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.usersService.create(createUserDto);
    }

    @Get()
    async getAllUsers() {
        return await this.usersService.getAll()
    }


    @UseGuards(JwtAuthGuard)
    @Get('me')
    async getCurrentUser(@Req() req) {
        const userid = req.user.id;
        return await this.usersService.findById(userid);
    }

}
