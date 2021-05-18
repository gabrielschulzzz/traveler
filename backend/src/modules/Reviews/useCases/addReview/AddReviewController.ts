import { Request, Response } from "express";
import { container } from "tsyringe";

import { AddReviewUseCase } from "./AddReviewUseCase";

class AddReviewController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { score, place, user, review } = request.body;

    const addReviewUseCase = container.resolve(AddReviewUseCase);

    await addReviewUseCase.execute({
      score,
      place,
      user,
      review,
    });

    return response.json();
  }
}

export { AddReviewController };
