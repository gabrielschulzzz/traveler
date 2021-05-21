import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteReviewUseCase } from "./DeleteReviewUseCase";

class DeleteReviewController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;
    const deleteReviewUseCase = container.resolve(DeleteReviewUseCase);

    await deleteReviewUseCase.execute(id);

    return response.json();
  }
}

export { DeleteReviewController };
