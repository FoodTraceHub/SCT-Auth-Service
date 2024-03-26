import { ApiError } from "./apiError";
import { StatusCodes } from "http-status-codes";

// create the error class
export class InternalServerError extends ApiError {
    Message = 'Internal Server Error';

    constructor(message: string) {
        super(message, StatusCodes.INTERNAL_SERVER_ERROR);
    }

    override get message(): string {
        return this.Message;
    }
}
