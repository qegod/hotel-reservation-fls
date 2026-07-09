import {Body, Controller, Get, Post, Query, UseGuards, UsePipes} from "@nestjs/common";
import {HotelsService} from "./hotels.service";
import {CreateHotelDto} from "./dto/create-hotel.dto";
import {ValidationPipe} from "../../common/pipes/validation.pipe";
import {JwtAuthGuard} from "../../common/guards/jwt-auth.guard";


@Controller('hotels')
export class HotelsController {
    constructor(private hotelsService: HotelsService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    async createHotel(@Body() dto: CreateHotelDto) {
        return await this.hotelsService.create(dto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getHotels(@Query('page') page = 1, @Query('limit') limit = 10) {
        return await this.hotelsService.getAll(+page, +limit)
    }


}
