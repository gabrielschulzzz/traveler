import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSingleCityUseCase } from "./ListSingleCityUseCase";

class ListSingleCityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listSingleCityUseCase = container.resolve(ListSingleCityUseCase);

    const city = await listSingleCityUseCase.execute(id);

    return response.json(city);
  }
}

export { ListSingleCityController };
