import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { avatar, email, password, name } = request.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    updateUserUseCase.execute({ email, password, name, id, avatar });

    return response.json();
  }
}

export { UpdateUserController };
