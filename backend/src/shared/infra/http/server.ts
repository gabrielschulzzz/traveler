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
const avatarDir = path.join(__dirname, "..", "..", "..", "..", "tmp", "avatar");
const cityDir = path.join(__dirname, "..", "..", "..", "..", "tmp", "city");
const placeDir = path.join(__dirname, "..", "..", "..", "..", "tmp", "place");
app.use("/avatars", express.static(avatarDir));
app.use("/city", express.static(cityDir));
app.use("/place", express.static(placeDir));

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
