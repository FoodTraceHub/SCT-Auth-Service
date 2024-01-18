import { ApiError, ErrorDescription } from "./apiError";
import { StatusCodes } from "http-status-codes";

// create the error class
export class UnauthorizedError extends ApiError {
    _statusCode = StatusCodes.UNAUTHORIZED;
    _description: ErrorDescription = null;
    _message = 'Unauthorized';

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
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