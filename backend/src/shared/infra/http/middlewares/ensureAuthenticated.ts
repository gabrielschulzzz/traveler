import { UsersRepository } from "@modules/Users/infra/typeorm/repositories/UsersRepository";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "@shared/errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: userId } = verify(
      token,
      "cbe5973e20a4073322398f9bbab1c03a"
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findOne(userId);

    if (!user) {
      throw new AppError("User does not exists", 401);
    }

    next();
  } catch (error) {
    throw new AppError("Invalid token!", 401);
  }
}
