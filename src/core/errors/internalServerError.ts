import { ApiError, ErrorDescription } from "./apiError";
import { StatusCodes } from "http-status-codes";

// create the error class
export class InternalServerError extends ApiError {
    _statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    _description: ErrorDescription = null;
    _message = 'Internal Server Error';

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, InternalServerError.prototype);
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