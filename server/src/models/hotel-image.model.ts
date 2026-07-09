import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Hotel} from "./hotels.model";

interface CreateHotelAttrs {
    filename: string;
    hotel_id: number;
}

@Table({
    tableName: 'hotel-image'
})
export class HotelImage extends Model<HotelImage, CreateHotelAttrs> {
    @Column({primaryKey: true, type: DataType.INTEGER, unique: true, autoIncrement: true})
    declare id: number;

    @Column({type: DataType.STRING, allowNull: false})
    filename: string;

    @ForeignKey(() => Hotel)
    @Column({type: DataType.INTEGER, allowNull: false})
    hotel_id: number;

    @BelongsTo(() => Hotel, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
    })
    hotel: Hotel;

}
