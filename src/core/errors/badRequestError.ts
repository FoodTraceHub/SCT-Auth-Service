import { ApiError } from "./apiError";
import { StatusCodes } from "http-status-codes";

// create the error class
export class BadRequestError extends ApiError {
    StatusCode = StatusCodes.BAD_REQUEST;
    Message = 'Bad Request';

    constructor(message: string) {
        super(message, StatusCodes.BAD_REQUEST);
}
    
        get statusCode(): number {
            return this.StatusCode;
        }
        
        override get message(): string {
            return this.Message;
        }
    }   