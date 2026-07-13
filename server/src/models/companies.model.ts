import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {Hotel} from "./hotels.model";
import {User} from "./users.model";

interface CreateCompanyAttrs {
    name: string;
    user_id: number;
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

    @Column({type: DataType.INTEGER, allowNull: false})
    @ForeignKey(() => User)
    user_id: number;

    @BelongsTo(() => User, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    user: User;
}
