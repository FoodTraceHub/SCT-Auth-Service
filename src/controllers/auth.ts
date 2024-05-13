import { SignUp } from "../services";
import { Request, Response } from "express";
import { IAuthSignUp } from "../interface";
import { SuccessResponse, ErrorResponse } from "../utils";

export const signUpController = async (req: Request, res: Response) => {
  const input: IAuthSignUp = req.body;

  try {
    const user: any = await SignUp(input);
    return SuccessResponse(res, 201, "User created successfully", user);
  } catch (error: any) {
    return ErrorResponse(res, 500, error.message, error);
  }
};
