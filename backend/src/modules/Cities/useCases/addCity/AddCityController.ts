import { Request, Response } from "express";
import { container } from "tsyringe";

import { AddCityUseCase } from "./AddCityUseCase";

class AddCityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, fact, name } = request.body;

    const addCityUseCase = container.resolve(AddCityUseCase);

    const newCity = await addCityUseCase.execute({
      description,
      fact,
      name,
    });

    return response.json(newCity);
  }
}

export { AddCityController };
