// create the error desription type
export type ErrorDescription = Array<{
    message: string;
    field?: string;
}> | null;

// create the error class
export abstract class ApiError extends Error {
    abstract _statusCode: number;
    abstract _description: ErrorDescription;
    abstract _message: string;

    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;

        Object.setPrototypeOf(this, ApiError.prototype);
    }

    abstract get statusCode(): number;
    abstract get description(): ErrorDescription;
    abstract override get message(): string;
}