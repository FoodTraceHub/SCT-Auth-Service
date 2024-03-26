// core/errorResponses.ts
import { ApiError } from '../errors';
import { StatusCodes } from 'http-status-codes';

export class ErrorResponse extends Error {
  constructor(public readonly statusCode: number, 
  public readonly message: string) {
    super(message);
  }

  static create(statusCode: number,  message: string): ErrorResponse {
    return new ErrorResponse(statusCode, message);
  }

  static fromApiError(apiError: ApiError): ErrorResponse {
    return new ErrorResponse(apiError.status, apiError.message);
  }

  static badRequest(message = 'Bad Request'): ErrorResponse {
    return new ErrorResponse(StatusCodes.BAD_REQUEST, message);
  }

  static unauthorized(message = 'Unauthorized'): ErrorResponse {
    return new ErrorResponse(StatusCodes.UNAUTHORIZED, message);
  }

  static conflict(message = 'Conflict'): ErrorResponse {
    return new ErrorResponse(StatusCodes.CONFLICT, message);
  }
  

  // Add more static methods for common error types as needed
}
