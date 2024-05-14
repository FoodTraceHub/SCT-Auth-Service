import { IAuthSignIn } from "../interface";
import { User } from "../model";
import { comparePassword } from "../utils";
import { SignToken } from "./token.service";
import { BadRequestError } from "../utils";

export const UserSignIn = async (payload : IAuthSignIn) => {
    const user = await User.findOne({ email : payload.email}).select("+password");

    if (!user || !comparePassword(payload.password, user.password)) {
        throw new BadRequestError("Invalid Data");
    }

    const token = await SignToken({
        _id: user._id,
    })

    const { password, ...rest } = user.toJSON();

    return { ...rest, ...token, expiresIn : Date.now() + 24 * 60 * 60};
}