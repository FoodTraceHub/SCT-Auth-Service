import { ApiError } from "./apiError";
import { StatusCodes } from "http-status-codes";

// create the error class
export class ConflictError extends ApiError {
    Message = 'Conflict';

    constructor(message: string) {
        super(message, StatusCodes.CONFLICT);
    }

    override get message(): string {
        return this.Message;
    }
}