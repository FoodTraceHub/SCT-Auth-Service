import { Request } from "express";
import { IControllerArgs } from "../core/types";

class ParseControllerArgs {
  parse = (req: Request): IControllerArgs<any> => {
    return {
      input: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers,
    //   user: req.user,
      files: "" as any,
      cookies:req.cookies
    };
  };
}

export default new ParseControllerArgs();