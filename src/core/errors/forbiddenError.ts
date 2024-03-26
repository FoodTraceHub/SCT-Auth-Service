import { ApiError, ErrorDescription } from "./apiError";
import { StatusCodes } from "http-status-codes";

// create the error class
export class ForbiddenError extends ApiError {
    StatusCode = StatusCodes.FORBIDDEN;
    Description: ErrorDescription = null;
    Message = 'Forbidden';

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, ForbiddenError.prototype);
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