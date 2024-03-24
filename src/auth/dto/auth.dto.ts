import { Document } from "mongoose";

export interface AuthSignUpDto {
    email: string,
    name: string;
    password: string;
}

export interface AuthDocument extends AuthSignUpDto, Document {};
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

