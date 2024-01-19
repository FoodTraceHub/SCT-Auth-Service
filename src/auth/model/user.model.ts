import { Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    DataTypes,
    UUIDV4 } from "sequelize";

import { sequelize } from "../../core";

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare readonly id: CreationOptional<string>;
    declare email: string;
    declare name: string;
    declare password: string;
    declare role: string;
};

User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,

        // references: {
        //     model: "Role",
        //     key: "name"
        // }
    }
}, 
{
    scopes: {
        withoutPassword: {
            attributes: { exclude: ["password"] }
        }
    },
    defaultScope: {
        attributes: { exclude: ["password"] }
    },
    modelName: "User",
    tableName: "users",
    sequelize,
    timestamps: true,
    freezeTableName: true
}
);

