import { ApiError, ErrorDescription } from "./apiError";
import { StatusCodes } from "http-status-codes";

// create the error class
export class ConflictError extends ApiError {
    StatusCode = StatusCodes.CONFLICT;
    Description: ErrorDescription = null;
    Message = 'Conflict';

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, ConflictError.prototype);
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