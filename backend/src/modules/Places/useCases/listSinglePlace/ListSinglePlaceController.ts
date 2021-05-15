import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSinglePlaceUseCase } from "./ListSinglePlaceUseCase";

class ListSinglePlaceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listSinglePlaceUseCase = container.resolve(ListSinglePlaceUseCase);

    const place = await listSinglePlaceUseCase.execute(id);

    return response.status(200).json(place);
  }
}

export { ListSinglePlaceController };
