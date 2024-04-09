import { AuthSignUpDto } from '../dto';
import {
    BadRequestError,
    ConflictError,
    IControllerArgs,
} from '../../core';
import { User } from '../model';
import { hashPassword } from '../../core';


export const SignUp = async (input : AuthSignUpDto) => {
    if (!input) {
        throw new BadRequestError('Input is required');
    }

    const { email, password, name } = input;

    // check if user already exists
    const user = await User.findOne({ email: email });

    if (user) {
        throw new ConflictError('User already exists');
    }

    // hash password
    const hashedPassword = await hashPassword(password);

    // create user
    await User.create({
        email,
        password: hashedPassword,
        name,
    });
};

