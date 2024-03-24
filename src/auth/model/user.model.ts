import { AuthSignUpDto, AuthDocument } from "../dto";
import { Schema, model } from "mongoose";

const AuthSchemaFields: Record<keyof AuthSignUpDto, any> = {
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true }
};

const AuthSchema = new Schema<AuthDocument>(AuthSchemaFields);

export const User = model<AuthDocument>("Auth", AuthSchema);
