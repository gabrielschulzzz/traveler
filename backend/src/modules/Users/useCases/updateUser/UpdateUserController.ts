import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSingleUserUseCase } from "../listSingleUser/ListSingleUserUseCase";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const avatar = request.file.filename;
    const { email, password, name } = request.body;

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

    user.avatar = `http://localhost:3333/avatars/${user.avatar}`;

    return response.status(200).json(user);
  }
}

export { UpdateUserController };
