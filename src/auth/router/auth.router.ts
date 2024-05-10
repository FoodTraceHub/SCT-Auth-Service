import { signupValidation } from "./validation";
import { Router } from "express";
import { SignUp } from "../../services";

const authRouter = Router();

authRouter.post('/signup', SignUp);

export { authRouter };
