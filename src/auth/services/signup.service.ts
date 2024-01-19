import { AuthSignUpDto } from "../dto";
import { BadRequestError, ConflictError, ErrorResponse, SuccessResponse, IControllerArgs } from "../../core";
import { StatusCodes } from "http-status-codes";
import { Op } from "sequelize";
import { User } from "../model";

export class SignUpService {
    constructor(
        private readonly _user: typeof User
    ) {}

    handle = async ({input} : IControllerArgs<AuthSignUpDto>) => {

        if (!input) {
            throw new BadRequestError('Input is required');
        }

        const { email, password, name, role } = input;

        // check if user already exists
        const user = await this._user.findOne({
            where: {
                email: {
                    [Op.eq]: email
                }
            }
        });

        if (user) {
            throw new ConflictError('User already exists');
        }

        // create user
        const newUser = await this._user.create({
            email,
            password,
            name,
            role
        });

        return SuccessResponse.create(StatusCodes.CREATED, newUser, 'User created successfully');
}
}