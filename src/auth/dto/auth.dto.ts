// dto

export interface AuthSignUpDto {
    email: string,
    name: string;
    password: string;
    role: string
}

export interface AuthSignInDto { 
    email: string,
    password: string
}

