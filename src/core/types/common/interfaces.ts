// create type for interfaces

import {IncomingHttpHeaders} from "http";
import { ObjectSchema } from "joi";

export interface IControllerArgs<T> {
    input?: T;
    params?: any;
    query?: any;
    headers?: IncomingHttpHeaders;
    files?: any;
    user?: any;
    cookies?: any;
};

export interface IValidatorSchema {
    input?: ObjectSchema;
    params?: ObjectSchema;
    query?: ObjectSchema;
}

export interface IControllerHandler {
    isPrivate?: boolean;
}