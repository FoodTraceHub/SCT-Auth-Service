import { ApiError } from "./apiError";
import { StatusCodes } from "http-status-codes";

// create the error class
export class BadRequestError extends ApiError {
    constructor(message: string) {
        super(message, StatusCodes.BAD_REQUEST);
}
}
    
        