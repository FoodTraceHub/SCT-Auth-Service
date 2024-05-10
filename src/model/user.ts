import { IAuthSignUp, AuthDocument } from "../interface";
import { Schema, model } from "mongoose";

const AuthSchemaFields: Record<keyof IAuthSignUp, any> = {
  email: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String, required: true, index: true },
  password: { type: String, required: true },
};

const AuthSchema = new Schema<AuthDocument>(AuthSchemaFields);

export const User = model<AuthDocument>("Auth", AuthSchema);
