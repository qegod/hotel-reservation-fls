import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Role} from "./roles.model";
import {User} from "./users.model";

interface CreateUserRolesAttrs {
    user_id: number;
    role_id: number;
}

@Table({tableName: "user_roles", timestamps: false})
export class UserRoles extends Model<UserRoles, CreateUserRolesAttrs>{
    @Column({type: DataType.INTEGER, allowNull: false, unique: true, primaryKey: true, autoIncrement: true})
    declare id: number;

    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER, allowNull: false})
    role_id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    user_id: number;


    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => Role)
    role: Role;
}
