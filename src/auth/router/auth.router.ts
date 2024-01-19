import { signupValidation } from "./validation";
import { Router } from "express";
import { signUp } from "../services";
import { ControlBuilder } from "../../core/middlewares/controllerBuilder";

const authRouter = Router();

authRouter.post('/signup', ControlBuilder.builder()
.setHandler(signUp.handle)
.setValidator(signupValidation)
.handle());

export { authRouter };
