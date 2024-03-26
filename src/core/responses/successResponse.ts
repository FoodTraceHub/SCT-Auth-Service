// success response class
export class SuccessResponse {
    private StatusCode: number;
    private Message: string;
    private Data: Object;

    constructor(statusCode: number, message: string, data: Object,) {
        this.StatusCode = statusCode;
        this.Message = message;
        this.Data = data;
    }

    get statusCode(): number {
        return this.statusCode;
    }

    get message(): string {
        return this.message;
    }

    get data(): Object {
        return this.data;
    }

    public static create(statusCode: number, message: string, data: Object): SuccessResponse {
        return new SuccessResponse(statusCode, message, data);
    }
}