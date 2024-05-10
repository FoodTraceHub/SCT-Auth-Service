import { ApiError } from "./apiError";
import { StatusCodes } from "http-status-codes";

// create the error class
export class InternalServerError extends ApiError {
    constructor(message: string) {
        super(message, StatusCodes.INTERNAL_SERVER_ERROR);
    }

}
