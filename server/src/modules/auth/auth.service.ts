import {HttpException, HttpStatus, Injectable, UnauthorizedException} from "@nestjs/common";
import {UsersService} from "../users/users.service";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {LoginUserDto} from "./dto/login-user.dto";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async login(dto: LoginUserDto) {
        const user = await this.validate(dto);
        return this.jwtToken(user);
    }

    async register(dto: CreateUserDto) {
        const candidate = await this.usersService.findByEmail(dto.email);

        if (candidate) {
            throw new HttpException(
                'Почта уже зарегистрирована',
                HttpStatus.BAD_REQUEST,
            );
        }

        const newUser = await this.usersService.create(dto);

        return this.jwtToken(newUser);
    }

    async getUser(req: Request) {
        //@ts-ignore
        const user = { ...req.user };

        delete user.roles;

        return user;
    }

    private async jwtToken(user) {
        const payload = {
            id: user.dataValues.id,
            username: user.dataValues.username,
            company: user.dataValues.company,
            roles: user.dataValues.roles,
        };

        return this.jwtService.signAsync(payload);
    }

    async validate(dto: LoginUserDto) {
        const user = await this.usersService.findByEmail(dto.email);

        if (!user) {
            throw new UnauthorizedException({
                message: 'Пользователь с таким email не найден',
                field: 'email',
            });
        }

        const isValidPassword = await bcrypt.compare(
            dto.password,
            user.dataValues.password,
        );

        if (!isValidPassword) {
            throw new UnauthorizedException({
                message: 'Неверный пароль',
                field: 'password',
            });
        }

        return user;
    }
}
