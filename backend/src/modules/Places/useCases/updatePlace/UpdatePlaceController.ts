/* eslint-disable no-prototype-builtins */
import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePlaceUseCase } from "./UpdatePlaceUseCase";

class UpdatePlaceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const {
      name,
      category,
      cep,
      rua,
      bairro,
      numero,
      telefone,
      description,
      domingoFrom,
      domingoUntil,
      segundaFrom,
      segundaUntil,
      tercaFrom,
      tercaUntil,
      quartaFrom,
      quartaUntil,
      quintaFrom,
      quintaUntil,
      sextaFrom,
      sextaUntil,
      sabadoFrom,
      sabadoUntil,
    } = request.body;

    let {
      segundaOpen,
      tercaOpen,
      quartaOpen,
      quintaOpen,
      sextaOpen,
      sabadoOpen,
      domingoOpen,
    } = request.body;

    segundaOpen = "true" && (segundaOpen = true);
    segundaOpen = "false" && (segundaOpen = false);

    tercaOpen = "true" && (tercaOpen = true);
    tercaOpen = "false" && (tercaOpen = false);

    quartaOpen = "true" && (quartaOpen = true);
    quartaOpen = "false" && (quartaOpen = false);

    quintaOpen = "true" && (quintaOpen = true);
    quintaOpen = "false" && (quintaOpen = false);

    sextaOpen = "true" && (sextaOpen = true);
    sextaOpen = "false" && (sextaOpen = false);

    sabadoOpen = "true" && (sabadoOpen = true);
    sabadoOpen = "false" && (sabadoOpen = false);

    domingoOpen = "true" && (domingoOpen = true);
    domingoOpen = "false" && (domingoOpen = false);

    let photo;

    if (request.hasOwnProperty("file")) {
      photo = request.file.filename;
      photo = `1http://localhost:3333/place/${photo}`;
    } else {
      photo = request.body.photo;
    }

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
