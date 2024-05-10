import { Document } from "mongoose";

export interface IAuthSignUp {
    email: string,
    first_name: string;
    last_name: string;
    username: string;
    password: string;
}

export interface AuthDocument extends IAuthSignUp, Document {};
export interface AuthSignInDto { 
    email: string,
    password: string
}

export interface IUserAuth {
    _id: string;
}

export interface IJwtPayload {
    email: string;
    _id: string;
}

export interface IJwtToken {
    token: string;
}

export interface IAuthResponse {
    user: IUserAuth;
    token: IJwtToken;
}

export interface IAuthResponseSignUp {
    user: IUserAuth;
}

