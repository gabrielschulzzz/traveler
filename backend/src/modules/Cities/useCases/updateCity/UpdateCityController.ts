import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCityUseCase } from "./UpdateCityUseCase";

class UpdateCityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { name, fact, description, photo, highlight } = request.body;

    const updateCityUseCase = container.resolve(UpdateCityUseCase);

    await updateCityUseCase.execute({
      id,
      name,
      fact,
      description,
      photo,
      highlight,
    });

    return response.json();
  }
}

export { UpdateCityController };
