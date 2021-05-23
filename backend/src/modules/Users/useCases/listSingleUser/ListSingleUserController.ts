import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSingleUserUseCase } from "./ListSingleUserUseCase";

class ListSingleUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listSingleUserUseCase = container.resolve(ListSingleUserUseCase);

    const user = await listSingleUserUseCase.execute(id);

    if (user.avatar !== null) {
      user.avatar = `http://localhost:3333/avatars/${user.avatar}`;
    }

    return response.json(user);
  }
}

export { ListSingleUserController };
