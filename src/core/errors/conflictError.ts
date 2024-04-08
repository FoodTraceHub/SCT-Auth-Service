import { ApiError } from "./apiError";
import { StatusCodes } from "http-status-codes";

// create the error class
export class ConflictError extends ApiError {
    constructor(message: string) {
        super(message, StatusCodes.CONFLICT);
    }
}