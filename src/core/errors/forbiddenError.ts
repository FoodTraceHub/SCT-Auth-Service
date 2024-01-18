import { ApiError, ErrorDescription } from "./apiError";
import { StatusCodes } from "http-status-codes";

// create the error class
export class ForbiddenError extends ApiError {
    _statusCode = StatusCodes.FORBIDDEN;
    _description: ErrorDescription = null;
    _message = 'Forbidden';

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, ForbiddenError.prototype);
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