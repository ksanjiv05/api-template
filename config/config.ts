import { Secret } from "jsonwebtoken";

export const SECRET_KEY: Secret = process.env.SECRET_KEY as string;
export const DB_URL_LOCAL: string = "127.0.0.1:27017";
export const DB_NAME: string = "WEODB";

export const DB_URL: string =
  process.env.NODE_ENV == "dev"
    ? "mongodb://" + DB_URL_LOCAL + "/" + DB_NAME + "?retryWrites=true"
    : (process.env.DB_URL as string);
