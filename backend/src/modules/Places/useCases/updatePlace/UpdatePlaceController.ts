import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePlaceUseCase } from "./UpdatePlaceUseCase";

class UpdatePlaceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const {
      name,
      photo,
      category,
      cep,
      rua,
      bairro,
      numero,
      telefone,
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

    const updatePlaceUseCase = container.resolve(UpdatePlaceUseCase);

    await updatePlaceUseCase.execute({
      id,
      name,
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

    return response.status(200).json();
  }
}

export { UpdatePlaceController };
