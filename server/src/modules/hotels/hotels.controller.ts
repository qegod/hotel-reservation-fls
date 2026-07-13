import {Body, Controller, Get, Post, Query, UploadedFiles, UseGuards, UseInterceptors} from "@nestjs/common";
import {HotelsService} from "./hotels.service";
import {CreateHotelDto} from "./dto/create-hotel.dto";
import {JwtAuthGuard} from "../../common/guards/jwt-auth.guard";
import {FilesInterceptor} from "@nestjs/platform-express";


@Controller('hotels')
export class HotelsController {
    constructor(private hotelsService: HotelsService) {}

    @UseInterceptors(FilesInterceptor('images'))
    @Post()
    async createHotel(@Body() dto: CreateHotelDto,
                      @UploadedFiles() images) {
        return await this.hotelsService.create(dto, images)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getHotels(@Query('page') page = 1, @Query('limit') limit = 10) {
        return await this.hotelsService.getAll(+page, +limit)
    }

    @Post('delete')
    async deleteAll() {
        return await  this.hotelsService.deleteAll();
    }
}
