import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeletePlaceUseCase } from "./DeletePlaceUseCase";

class DeletePlaceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deletePlaceUseCase = container.resolve(DeletePlaceUseCase);

    deletePlaceUseCase.execute(id);

    return response.json();
  }
}

export { DeletePlaceController };
