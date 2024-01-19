import { ApiError, ErrorDescription } from "../errors";

// error response class
export class ErrorResponse {
    private _statusCode: number;
    private _description: ErrorDescription;
    private _message: string;

    constructor(statusCode: number, description: ErrorDescription, message: string) {
        this._statusCode = statusCode;
        this._description = description;
        this._message = message;
    }

    get statusCode(): number {
        return this._statusCode;
    }

    get description(): ErrorDescription {
        return this._description;
    }

    get message(): string {
        return this._message;
    }

    public static create(error: ApiError): ErrorResponse {
        return new ErrorResponse(error.statusCode, error.description, error.message);
    }
}
