import { Request, Response } from "express";
import { container } from "tsyringe";

import { AddReviewUseCase } from "./AddReviewUseCase";

class AddReviewController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { score, place, review } = request.body;
    const { id } = request.user;

    const addReviewUseCase = container.resolve(AddReviewUseCase);

    const newReview = await addReviewUseCase.execute({
      score,
      place,
      user: id,
      review,
    });

    return response.json(newReview);
  }
}

export { AddReviewController };
