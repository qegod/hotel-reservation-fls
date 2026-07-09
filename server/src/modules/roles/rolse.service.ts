import {ConflictException, Injectable, NotFoundException} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "../../models";
import {CreateRoleDto} from "./dto/create-role.dto";
import {where} from "sequelize";


@Injectable()
export class RolesService {
    constructor(@InjectModel(Role) private rolesProvider: typeof Role ) {}

    async create(dto: CreateRoleDto) {
        const role = await this.findByName(dto.name);

        if(role) {
            throw new ConflictException("Role already exists");
        }

        return await this.rolesProvider.create(dto)
    }

    async findByName(name: string) {
        return await this.rolesProvider.findOne({ where: { name: name } });
    }

    async getAll() {
        return await this.rolesProvider.findAll()
    }
}
