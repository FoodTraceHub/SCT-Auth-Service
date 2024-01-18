import { ApiError, ErrorDescription } from "./apiError";
import { StatusCodes } from "http-status-codes";

// create the error class
export class BadRequestError extends ApiError {
    _statusCode = StatusCodes.BAD_REQUEST;
    _description: ErrorDescription = null;
    _message = 'Bad Request';

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    get statusCode(): number {
        return this._statusCode;
    }

    get description(): ErrorDescription {
        return this._description;
    }

    override get message(): string {
        return this._message;
    }
}