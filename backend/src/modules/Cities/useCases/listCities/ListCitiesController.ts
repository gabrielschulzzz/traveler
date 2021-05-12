import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCitiesUseCase } from "./ListCitiesUseCase";

class ListCitiesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCitiesUseCase = container.resolve(ListCitiesUseCase);

    const cities = await listCitiesUseCase.execute();

    return response.json(cities);
  }
}

export { ListCitiesController };
