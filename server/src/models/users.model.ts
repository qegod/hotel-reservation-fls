import {Model} from "sequelize-typescript";
import {Column, DataType, Table} from "sequelize-typescript";

interface CreateUserAttrs {
    username: string;
    email: string;
    password: string;
}


@Table({
    tableName: "users",
})
export class User extends Model<User, CreateUserAttrs> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true })
    declare id: number;

    @Column({ type: DataType.STRING, allowNull: false, unique: false })
    username: string;

    @Column({ type: DataType.STRING, allowNull: false, unique: true})
    email: string;

    @Column({ type: DataType.STRING, allowNull: false, unique: false })
    password: string;
}
