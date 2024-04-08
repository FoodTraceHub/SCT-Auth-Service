import { ISuccessResponse, ISuccessResponseData } from './responses.dto';
import { Response } from 'express';

export class SuccessResponse {
    static create(
        res: Response,
        status: number = 200,
        message: string,
        data: ISuccessResponseData
    ): Response {
        const response: ISuccessResponse = {
            success: true,
            message,
            data,
        };
        return res.status(status).json(response);
    }
}
