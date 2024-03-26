// core/errorResponses.ts
import { ApiError } from '../errors';
import { ErrorDescription } from '../errors';
import { StatusCodes } from 'http-status-codes';

export class ErrorResponse extends Error {
  private StatusCode: number;
  private Details: ErrorDescription;

  constructor(statusCode: number, details: ErrorDescription, message: string) {
    super(message);
    this.StatusCode = statusCode;
    this.Details = details;

    // Set the prototype explicitly to ensure the correct prototype chain
    Object.setPrototypeOf(this, ErrorResponse.prototype);
  }

  get statusCode(): number {
    return this.StatusCode;
  }

  get details(): ErrorDescription {
    return this.Details;
  }

  // Override the message property to return a formatted error message
  override get message(): string {
    return this.details ? `${super.message}: ${this.details[0]?.message}` : super.message;
  }

  static create(statusCode: number, details: ErrorDescription, message: string): ErrorResponse {
    return new ErrorResponse(statusCode, details, message);
  }

  // Handle ApiError instances more explicitly
  static fromApiError(apiError: ApiError): ErrorResponse {
    return new ErrorResponse(apiError.statusCode, apiError.description, apiError.message);
  }

  // Example method to create a BadRequestError with a default status code and message
  static badRequest(details: ErrorDescription, message = 'Bad Request'): ErrorResponse {
    return new ErrorResponse(StatusCodes.BAD_REQUEST, details, message);
  }

  // Example method to create a ConflictError
  static conflict(details: ErrorDescription, message = 'Conflict'): ErrorResponse {
    return new ErrorResponse(StatusCodes.CONFLICT, details, message);
  }

  // Add more static methods for common error types as needed
}
