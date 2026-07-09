import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Hotel} from "./hotels.model";

interface CreateCompanyAttrs {
    name: string;
}

@Table({tableName: 'companies'})
export class Company extends Model<Company, CreateCompanyAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true, allowNull: false})
    declare id: number;

    @Column({type: DataType.STRING, allowNull: false, unique: true})
    name: string;

    @HasMany(() => Hotel, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    hotels: Hotel[];
}
