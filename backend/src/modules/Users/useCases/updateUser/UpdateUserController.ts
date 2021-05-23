import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSingleUserUseCase } from "../listSingleUser/ListSingleUserUseCase";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    let avatar = request.file.filename;
    const { email, password, name } = request.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);
    const listSingleUserUseCase = container.resolve(ListSingleUserUseCase);

    avatar = `http://localhost:3333/avatars/${avatar}`;

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
