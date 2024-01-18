import * as dotenv from 'dotenv';
import Joi from 'joi';
import { Dialect } from 'sequelize';

dotenv.config();

// Define config schema
const envVarsSchema = Joi.object().keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().default(3000),
    DB_DIALECT: Joi.string().valid('postgres', 'mysql', 'mariadb', 'sqlite', 'mssql').required(),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().required(),
    DB_NAME: Joi.string().required(),
    DB_USER: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_POOL_MAX: Joi.number().required(),
    DB_POOL_MIN: Joi.number().required(),
    DB_POOL_ACQUIRE: Joi.number().required(),
    DB_POOL_IDLE: Joi.number().required()
}).unknown();


// Validate config schema
const { error, value: envVars } = envVarsSchema.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

// Define config object
export const config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    db: {
        dialect: envVars.DB_DIALECT as Dialect,
        host: envVars.DB_HOST,
        port: envVars.DB_PORT,
        name: envVars.DB_NAME,
        user: envVars.DB_USER,
        password: envVars.DB_PASSWORD,
        pool: {
            max: envVars.DB_POOL_MAX,
            min: envVars.DB_POOL_MIN,
            acquire: envVars.DB_POOL_ACQUIRE,
            idle: envVars.DB_POOL_IDLE
        }
    }
};;

