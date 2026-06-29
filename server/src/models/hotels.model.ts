import {Column, DataType, Model, Table} from "sequelize-typescript";

interface CreateHotelAttrs {
    name: string;
    email: string;
    price: string;
}

@Table({tableName: "hotels"})
export class Hotel extends Model<Hotel, CreateHotelAttrs>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    declare id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    price: number;

    @Column({type: DataType.BOOLEAN(), allowNull: false, defaultValue: false})
    is_booked: boolean;

    @Column({type: DataType.STRING, allowNull: true})
    description: string;

    @Column({type: DataType.ARRAY(DataType.STRING), defaultValue: [], allowNull: false})
    image: string[];
}
