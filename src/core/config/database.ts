import { Sequelize } from "sequelize";
import * as pg from 'pg';

import { config } from "./config";

const { dialect, host, name, port, user, password } = config.db

export const sequelize = new Sequelize(name, user, password, {
    dialect,
    host,
    port,
    dialectModule: pg,
    logging: true
});

    

