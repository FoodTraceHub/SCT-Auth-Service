import { Document } from "mongoose";

export interface IAuthSignUp {
    email: string,
    first_name: string;
    last_name: string;
    username: string;
    password: string;
};

export interface IAuthSignIn { 
    email: string,
    password: string
};

export interface IUserAuthRequest {
    _id: string;
};

export interface AuthDocument extends IAuthSignUp, Document {};
