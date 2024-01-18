import { ApiError, ErrorDescription } from "./apiError";
import { StatusCodes } from "http-status-codes";

// create the error class
export class ConflictError extends ApiError {
    _statusCode = StatusCodes.CONFLICT;
    _description: ErrorDescription = null;
    _message = 'Conflict';

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, ConflictError.prototype);
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