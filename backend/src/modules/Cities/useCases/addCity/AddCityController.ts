import { Request, Response } from "express";
import { container } from "tsyringe";

import { AddCityUseCase } from "./AddCityUseCase";

class AddCityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, fact, name } = request.body;

    let photo = request.file.filename;

    const addCityUseCase = container.resolve(AddCityUseCase);

    photo = `http://localhost:3333/city/${photo}`;

    const newCity = await addCityUseCase.execute({
      description,
      fact,
      name,
      photo,
    });

    return response.json(newCity);
  }
}

export { AddCityController };
