import {ConflictException, Injectable, NotFoundException} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Company} from "../../models";
import {CreateCompanyDto} from "./dto/create-company.dto";
import {UsersService} from "../users/users.service";


@Injectable()
export class CompaniesService {
    constructor(@InjectModel(Company) private companyProvider: typeof Company,
                private usersService: UsersService,
                ) {}

    async create(dto: CreateCompanyDto, userId: number) {
        const candidate = await this.companyProvider.findOne({where: {name: dto.name}})
        if (candidate) {
            throw new ConflictException("Компания с таким название уже существует")
        }

        const user = await this.usersService.findById(userId)
        if (!user) {
            throw new NotFoundException("Пользователь не найден")
        }

        return await this.companyProvider.create({
            ...dto,
            user_id: userId,
        })
    }

    async findById(companyId: number) {
        return await this.companyProvider.findByPk(companyId)

    }

    async findAll() {
        return await this.companyProvider.findAll()
    }

    async delete(id: number) {
        return await this.companyProvider.destroy({where: {id: id}})
    }
}
