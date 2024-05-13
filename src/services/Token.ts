import config from "../core/config/envs";
import { IUserAuthRequest } from "../interface";
import jwt from "jsonwebtoken";

const { JWT_SECRET } = config;

export const SignToken = async (payload: IUserAuthRequest) => {
  const accessToken = jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });

  const refreshToken = jwt.sign(payload, JWT_SECRET, {
    expiresIn: "30d",
  });

  return { accessToken, refreshToken };
};
