import Joi from "joi";

export const signupValidation = {
    input: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
    }),
};