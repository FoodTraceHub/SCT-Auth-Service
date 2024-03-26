import { ApiError, ErrorDescription } from "./apiError";
import { StatusCodes } from "http-status-codes";

// create the error class
export class BadRequestError extends ApiError {
    StatusCode = StatusCodes.BAD_REQUEST;
    Description: ErrorDescription = null;
    Message = 'Bad Request';

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, BadRequestError.prototype);
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