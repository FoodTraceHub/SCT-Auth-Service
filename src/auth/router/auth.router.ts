import { signupValidation } from "./validation";
import { Router } from "express";
import { signUp } from "../services";

const authRouter = Router();

authRouter.post('/signup', signUp.handle);

export { authRouter };
