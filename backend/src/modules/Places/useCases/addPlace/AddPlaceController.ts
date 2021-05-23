import { Request, Response } from "express";
import { container } from "tsyringe";

import { AddPlaceUseCase } from "./AddPlaceUseCase";

class AddPlaceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      city,
      category,
      cep,
      rua,
      telefone,
      bairro,
      numero,
      description,
      domingoOpen,
      domingoFrom,
      domingoUntil,
      segundaOpen,
      segundaFrom,
      segundaUntil,
      tercaOpen,
      tercaFrom,
      tercaUntil,
      quartaOpen,
      quartaFrom,
      quartaUntil,
      quintaOpen,
      quintaFrom,
      quintaUntil,
      sextaOpen,
      sextaFrom,
      sextaUntil,
      sabadoOpen,
      sabadoFrom,
      sabadoUntil,
    } = request.body;

    let photo = request.file.filename;

    const addPlaceUseCase = container.resolve(AddPlaceUseCase);

    photo = `http://localhost:3333/place/${photo}`;

    const newPlace = await addPlaceUseCase.execute({
      name,
      city,
      photo,
      category,
      cep,
      telefone,
      rua,
      bairro,
      numero,
      description,
      domingoOpen,
      domingoFrom,
      domingoUntil,
      segundaOpen,
      segundaFrom,
      segundaUntil,
      tercaOpen,
      tercaFrom,
      tercaUntil,
      quartaOpen,
      quartaFrom,
      quartaUntil,
      quintaOpen,
      quintaFrom,
      quintaUntil,
      sextaOpen,
      sextaFrom,
      sextaUntil,
      sabadoOpen,
      sabadoFrom,
      sabadoUntil,
    });

    return response.json(newPlace);
  }
}

export { AddPlaceController };
