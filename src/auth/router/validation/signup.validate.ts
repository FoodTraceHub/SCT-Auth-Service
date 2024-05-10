import Joi from "joi";

export const signupValidation = {
    input: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        first_name: Joi.string(),
        last_name: Joi.string(),
        username: Joi.string().required(),
    }),
};