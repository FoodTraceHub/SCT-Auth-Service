import { Request, Response } from "express";
import { IAuthSignUp, IAuthSignIn } from "../interface";
import { SuccessResponse, ErrorResponse } from "../utils";
import { UserSignIn, UserSignUp } from "../services";

export const signUpController = async (req: Request, res: Response) => {
  const input: IAuthSignUp = req.body;

  try {
    const user: any = await UserSignUp(input);
    return SuccessResponse(res, 201, "User created successfully", user);
  } catch (error: any) {
    return ErrorResponse(res, 500, error.message, error);
  }
};

export const signInController = async (req: Request, res: Response) => {
  const { email, password } = req.body as IAuthSignIn;

  try {
    const user = await UserSignIn({ email, password });
    return SuccessResponse(res, 201, "User signed in successfully", user);
  } catch (error: any) {
    return ErrorResponse(res, 500, error.message, error);
  }
};
