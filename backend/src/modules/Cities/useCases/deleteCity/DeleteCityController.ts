import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteCityUseCase } from "./DeleteCityUseCase";

class DeleteCityController {
  async handle(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const deleteCityUseCase = container.resolve(DeleteCityUseCase);

    await deleteCityUseCase.execute(id);

    response.json({});
  }
}

export { DeleteCityController };
