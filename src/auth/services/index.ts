import { SignUpService } from "./signup.service";
import { User } from "../model";

export const signUp = new SignUpService(User);
