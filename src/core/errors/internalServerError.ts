import { ApiError, ErrorDescription } from "./apiError";
import { StatusCodes } from "http-status-codes";

// create the error class
export class InternalServerError extends ApiError {
    StatusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    Description: ErrorDescription = null;
    Message = 'Internal Server Error';

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, InternalServerError.prototype);
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