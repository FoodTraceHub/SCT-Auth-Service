import { IUserAuth } from "../../../auth";

declare global {
  export namespace Express {
    interface Request {
      user: IUserAuth;
    }
  }
}
