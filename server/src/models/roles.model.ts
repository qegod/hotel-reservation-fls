import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {User} from "./users.model";
import {UserRoles} from "./user-roles.model";
import {IsString} from "class-validator";

interface CreateRoleAttrs {
    name: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, CreateRoleAttrs> {
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true})
    declare id: number;

    @Column({type: DataType.STRING, allowNull: false, unique: true})
    name: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}
