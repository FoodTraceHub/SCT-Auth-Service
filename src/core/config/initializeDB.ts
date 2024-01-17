import { sequelize } from "./database";

export const launchDB = async () => {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync()
    console.log('All models were synchronized successfully.');
}

