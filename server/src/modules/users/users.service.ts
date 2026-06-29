import {ConflictException, HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {User} from "../../models";
import {CreateUserDto} from "./dto/create-user.dto";
import * as bcrypt from "bcryptjs";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private usersProvider: typeof User) {}

    async create(dto: CreateUserDto) {
        const candidate = await this.usersProvider.findOne({where: {email: dto.email}});
        if (candidate) {
            throw new ConflictException("Пользователь уже существует");
        }
        const hashedPass = await bcrypt.hash(dto.password, 7);

        return await this.usersProvider.create({...dto, password: hashedPass});
    }

    async getAll() {
        return await this.usersProvider.findAll();
    }

}
