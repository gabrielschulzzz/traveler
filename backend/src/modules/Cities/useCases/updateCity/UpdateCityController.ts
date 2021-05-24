/* eslint-disable no-prototype-builtins */
import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCityUseCase } from "./UpdateCityUseCase";

class UpdateCityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, fact, description, highlight } = request.body;
    let photo;

    if (request.hasOwnProperty("file")) {
      photo = request.file.filename;
      photo = `1http://localhost:3333/city/${photo}`;
    } else {
      photo = request.body.photo;
    }

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
