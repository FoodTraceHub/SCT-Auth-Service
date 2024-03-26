import { ApiError } from "./apiError";
import { StatusCodes } from "http-status-codes";

// create the error class
export class NotFoundError extends ApiError {
    Message = 'Not Found';

    constructor(message: string) {
        super(message, StatusCodes.NOT_FOUND);
    }

    override get message(): string {
        return this.Message;
    }
}
