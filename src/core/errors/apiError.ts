// create the error desription type
export type ErrorDescription = Array<{
    message: string;
    field?: string;
}> | null;

// create the error class
export abstract class ApiError extends Error {
    abstract StatusCode: number;
    abstract Description: ErrorDescription;
    abstract Message: string;

    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;

        Object.setPrototypeOf(this, ApiError.prototype);
    }

    abstract get statusCode(): number;
    abstract get description(): ErrorDescription;
    abstract override get message(): string;
}