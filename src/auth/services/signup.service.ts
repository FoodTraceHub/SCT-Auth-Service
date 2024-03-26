import { AuthSignUpDto } from "../dto";
import { BadRequestError, ConflictError, ErrorResponse, SuccessResponse, IControllerArgs } from "../../core";
import { StatusCodes } from "http-status-codes";
import { User } from "../model";
import { hashPassword } from "../../core";

export class SignUpService {
    constructor(
        private readonly _user: typeof User
    ) {}

    handle = async ({input} : IControllerArgs<AuthSignUpDto>) => {
        try {
            if (!input) {
                throw new BadRequestError('Input is required');
            }

            const { email, password, name } = input;

            // check if user already exists
            const user = await this._user.findOne({ email: email })

            if (user) {
                throw new ConflictError('User already exists');
            }

            // hash password
            const hashedPassword = await hashPassword(password);

            // create user
            const newUser = await this._user.create({
                email,
                password: hashedPassword,
                name
            });

            return SuccessResponse.create(StatusCodes.CREATED, 'User created successfully', newUser);
        } catch (error) {
            // Handle specific error types and create appropriate ErrorResponse
            if (error instanceof BadRequestError || error instanceof ConflictError) {
                return ErrorResponse.create(error.statusCode, error.description, error.message);
            } else {
                // Log unexpected errors
                console.error(error);
                return ErrorResponse.create(StatusCodes.INTERNAL_SERVER_ERROR, null, 'Internal Server Error');
            }
        }
    }
}
