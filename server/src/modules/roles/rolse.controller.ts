import {Body, Controller, Get, Post, Query} from "@nestjs/common";
import {RolesService} from "./rolse.service";
import {CreateRoleDto} from "./dto/create-role.dto";


@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) {}

    @Post()
    async createRole(@Body() createRoleDto: CreateRoleDto) {
        return await this.rolesService.create(createRoleDto);
    }

    @Get()
    async getAll() {
        return await this.rolesService.getAll()
    }
}
