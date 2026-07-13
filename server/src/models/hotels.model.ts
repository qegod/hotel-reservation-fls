import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {Company} from "./companies.model";
import {HotelImage} from "./hotel-image.model";

interface CreateHotelAttrs {
    name: string;
    price: number;
    company_id: number;
    title: string;
    description: string;
}


@Table({tableName: "hotels"})
export class Hotel extends Model<Hotel, CreateHotelAttrs>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    declare id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    price: number;

    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @ForeignKey(() => Company)
    @Column({type: DataType.INTEGER, allowNull: false})
    company_id: number;

    @BelongsTo(() => Company, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
    })
    company: Company

    @HasMany(() => HotelImage, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
    })
    images: HotelImage[];

}

