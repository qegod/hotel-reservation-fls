import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {Company} from "../../models";
import {CompaniesController} from "./companies.controller";
import {CompaniesService} from "./companies.service";


@Module({
    imports: [SequelizeModule.forFeature([Company])],
    controllers: [CompaniesController],
    providers: [CompaniesService],
    exports: [CompaniesService],
})
export class CompaniesModule {}
