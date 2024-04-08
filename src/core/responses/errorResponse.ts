import { IErrorResponse, IErrorResponseData } from './responses.dto';
import { Response } from 'express';

export class ErrorResponse {
    static create(
        res: Response,
        status: number = 500,
        message: string,
        error?: IErrorResponseData
    ): Response {
        const response: IErrorResponse = {
            success: false,
            message,
            error,
        };
        return res.status(status).json(response);
    }
}

