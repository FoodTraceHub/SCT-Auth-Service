// success response class
export class SuccessResponse {
    private _statusCode: number;
    private _data: Object;
    private _message: string;

    constructor(statusCode: number, data: Object, message: string) {
        this._statusCode = statusCode;
        this._data = data;
        this._message = message;
    }

    get statusCode(): number {
        return this._statusCode;
    }

    get data(): Object {
        return this._data;
    }

    get message(): string {
        return this._message;
    }

    public static create(statusCode: number, data: Object, message: string): SuccessResponse {
        return new SuccessResponse(statusCode, data, message);
    }
}