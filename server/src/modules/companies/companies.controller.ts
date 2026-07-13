import {Body, Controller, Delete, Get, Param, Post, Req, UseGuards, UsePipes} from "@nestjs/common";
import {CompaniesService} from "./companies.service";
import {CreateCompanyDto} from "./dto/create-company.dto";
import {ValidationPipe} from "../../common/pipes/validation.pipe";
import {JwtAuthGuard} from "../../common/guards/jwt-auth.guard";


@Controller('companies')
export class CompaniesController {
    constructor(private companiesService: CompaniesService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    async createCompany(@Body() dto: CreateCompanyDto,
                        @Req() req,) {
        console.log(req.user)
        return await this.companiesService.create(dto, req.user.id)
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
