import {ConflictException, Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Company} from "../../models";
import {CreateCompanyDto} from "./dto/create-company.dto";


@Injectable()
export class CompaniesService {
    constructor(@InjectModel(Company) private companyProvider: typeof Company) {}

    async create(dto: CreateCompanyDto) {
        const candidate = await this.companyProvider.findOne({where: {name: dto.name}})
        if (candidate) {
            throw new ConflictException("Компания с таким название уже существует")
        }

        return await this.companyProvider.create(dto)
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
