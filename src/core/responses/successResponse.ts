export class SuccessResponse {
    constructor(public readonly statusCode: number, public readonly message: string, public readonly data: any) {}
  
    static create(statusCode: number, message: string, data: any): SuccessResponse {
      return new SuccessResponse(statusCode, message, data);
    }
  }
  