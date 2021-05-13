import { Request, Response } from "express";
import { container } from "tsyringe";

import { AddPlaceUseCase } from "./AddPlaceUseCase";

class AddPlaceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, city, photo, category, cep, rua, bairro, numero } =
      request.body;

    const addPlaceUseCase = container.resolve(AddPlaceUseCase);

    const newPlace = await addPlaceUseCase.execute({
      name,
      city,
      photo,
      category,
      cep,
      rua,
      bairro,
      numero,
    });

    return response.json(newPlace);
  }
}

export { AddPlaceController };
