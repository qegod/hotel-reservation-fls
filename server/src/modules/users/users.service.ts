import {ConflictException, HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {User} from "../../models";
import {CreateUserDto} from "./dto/create-user.dto";
import * as bcrypt from "bcryptjs";
import {RolesService} from "../roles/rolse.service";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private usersProvider: typeof User,
                private rolesService: RolesService) {}

    async create(dto: CreateUserDto) {
        const role = await this.rolesService.findByName('user')

        if (!role) {
            throw new HttpException("Роль пользователя не найдена", HttpStatus.NOT_FOUND);
        }

        const hashedPass = await bcrypt.hash(dto.password, 7);

        const user = await this.usersProvider.create({...dto, password: hashedPass})
        await user.$add('role', role)

        return user;
    }

    async getAll() {
        return await this.usersProvider.findAll({include: {all: true}});
    }

    async findById(id: number) {
        return await this.usersProvider.findByPk(id)
    }

    async findByEmail(email: string) {
        return await this.usersProvider.findOne({where: {email: email}, include: {all: true}});
    }
}
