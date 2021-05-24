/* eslint-disable no-prototype-builtins */
import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSingleUserUseCase } from "../listSingleUser/ListSingleUserUseCase";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { email, password, name } = request.body;
    let avatar;

    if (request.hasOwnProperty("file")) {
      avatar = request.file.filename;
      avatar = `1http://localhost:3333/avatar/${avatar}`;
    } else {
      avatar = request.body.avatar;
    }

    const updateUserUseCase = container.resolve(UpdateUserUseCase);
    const listSingleUserUseCase = container.resolve(ListSingleUserUseCase);

    await updateUserUseCase.execute({
      email,
      password,
      name,
      id,
      avatar,
    });

    const user = await listSingleUserUseCase.execute(id);

    return response.status(200).json(user);
  }
}

export { UpdateUserController };
