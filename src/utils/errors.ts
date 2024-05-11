import { ApiError } from "./apiError";
import { StatusCodes } from "http-status-codes";

// create the error class
export class ConflictError extends ApiError {
    constructor(message: string) {
        super(message, StatusCodes.CONFLICT);
    }
}

// Bad Request
export class BadRequestError extends ApiError {
    constructor(message: string) {
        super(message, StatusCodes.BAD_REQUEST);
}
}

// Forbidden
export class ForbiddenError extends ApiError {
    constructor(message: string) {
        super(message, StatusCodes.FORBIDDEN);
    }
}

// Internal Server Error
export class InternalServerError extends ApiError {
    constructor(message: string) {
        super(message, StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

// Not Found
export class NotFoundError extends ApiError {
    constructor(message: string) {
        super(message, StatusCodes.NOT_FOUND);
    }
}

// Unauthorized
export class UnauthorizedError extends ApiError {
    constructor(message: string) {
        super(message, StatusCodes.UNAUTHORIZED);
    }
}

