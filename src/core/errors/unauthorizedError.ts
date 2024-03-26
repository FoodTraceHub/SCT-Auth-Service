import { ApiError, ErrorDescription } from "./apiError";
import { StatusCodes } from "http-status-codes";

// create the error class
export class UnauthorizedError extends ApiError {
    StatusCode = StatusCodes.UNAUTHORIZED;
    Description: ErrorDescription = null;
    Message = 'Unauthorized';

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }

    get statusCode(): number {
        return this.StatusCode;
    }

    get description(): ErrorDescription {
        return this.Description;
    }

    override get message(): string {
        return this.Message;
    }
}