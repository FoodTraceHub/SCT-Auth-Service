import {
  ISuccessResponse,
  ISuccessResponseData,
  IErrorResponse,
  IErrorResponseData,
} from "../interface/responses.interface";
import { Response } from "express";

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
