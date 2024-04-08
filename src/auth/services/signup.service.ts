import { AuthSignUpDto } from '../dto';
import {
    BadRequestError,
    ConflictError,
    IControllerArgs,
} from '../../core';
import { User } from '../model';
import { hashPassword } from '../../core';

export class SignUpService {
    constructor(private readonly _user: typeof User) {}

    handle = async ({ input }: IControllerArgs<AuthSignUpDto>) => {
        if (!input) {
            throw new BadRequestError('Input is required');
        }

        const { email, password, name } = input;

        // check if user already exists
        const user = await this._user.findOne({ email: email });

        if (user) {
            throw new ConflictError('User already exists');
        }

        // hash password
        const hashedPassword = await hashPassword(password);

        // create user
        await this._user.create({
            email,
            password: hashedPassword,
            name,
        });
    };
}
