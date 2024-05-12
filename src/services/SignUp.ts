import { IAuthSignUp } from '../interface';
import {
    BadRequestError,
    ConflictError,
} from '../utils';
import { User } from '../model';
import { hashPassword } from '../utils';


export const SignUp = async (input : IAuthSignUp) => {
    const { email, password, username } = input;

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
        username,
    });
};

