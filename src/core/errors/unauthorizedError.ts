import { ApiError } from "./apiError";
import { StatusCodes } from "http-status-codes";

// create the error class
export class UnauthorizedError extends ApiError {
    Message = 'Unauthorized';

    constructor(message: string) {
        super(message, StatusCodes.UNAUTHORIZED);
    }

    override get message(): string {
        return this.Message;
    }
}