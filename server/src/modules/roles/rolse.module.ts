import {Module} from "@nestjs/common";
import {RolesService} from "./rolse.service";
import {RolesController} from "./rolse.controller";
import {SequelizeModule} from "@nestjs/sequelize";
import {Role} from "../../models";


@Module({
    providers: [RolesService],
    controllers: [RolesController],
    imports: [SequelizeModule.forFeature([Role])],
    exports: [RolesService],
})
export class RolesModule {}
