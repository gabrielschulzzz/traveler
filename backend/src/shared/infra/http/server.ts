import "reflect-metadata";
import cors from "cors";
import express, { NextFunction, Response, Request } from "express";
import path from "path";
import "express-async-errors";

import "@shared/infra/typeorm";
import "@shared/container";
import { AppError } from "@shared/errors/AppError";

import { router } from "./routes";

const app = express();
const dir = path.join(__dirname, "..", "..", "..", "..", "tmp", "avatar");
app.use("/avatars", express.static(dir));

app.use(cors());
app.use(express.json());
app.use(router);
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("Server is running 🚀"));
