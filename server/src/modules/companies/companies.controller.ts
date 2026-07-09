import {Body, Controller, Delete, Get, Param, Post, UsePipes} from "@nestjs/common";
import {CompaniesService} from "./companies.service";
import {CreateCompanyDto} from "./dto/create-company.dto";
import {ValidationPipe} from "../../common/pipes/validation.pipe";


@Controller('companies')
export class CompaniesController {
    constructor(private companiesService: CompaniesService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    async createCompany(@Body() dto: CreateCompanyDto) {
        return await this.companiesService.create(dto)
    }

    @Get()
    async getAll() {
        return await this.companiesService.findAll()
    }

    @Delete(':id')
    async deleteCompany(@Param('id') id: number) {
        return await this.companiesService.delete(id)
    }

}
