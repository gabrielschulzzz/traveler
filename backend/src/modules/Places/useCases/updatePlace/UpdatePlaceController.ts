import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePlaceUseCase } from "./UpdatePlaceUseCase";

class UpdatePlaceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      terca,
      sexta,
      segunda,
      sabado,
      quinta,
      quarta,
      domingo,
      rua,
      photo,
      numero,
      cep,
      category,
      bairro,
      name,
    } = request.body;

    const updatePlaceUseCase = container.resolve(UpdatePlaceUseCase);

    await updatePlaceUseCase.execute({
      id,
      terca,
      sexta,
      segunda,
      sabado,
      quinta,
      quarta,
      domingo,
      rua,
      photo,
      numero,
      cep,
      category,
      bairro,
      name,
    });

    return response.status(200).json();
  }
}

export { UpdatePlaceController };
