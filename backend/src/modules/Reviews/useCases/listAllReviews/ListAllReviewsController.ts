import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllReviewsUseCase } from "./ListAllReviewsUseCase";

class ListAllReviewsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllReviewsUseCase = container.resolve(ListAllReviewsUseCase);

    const reviews = await listAllReviewsUseCase.execute();

    return response.json(reviews);
  }
}

export { ListAllReviewsController };
