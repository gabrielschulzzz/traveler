/* eslint-disable prettier/prettier */
import { IReviewsRepository } from "@modules/Reviews/repositories/IReviewsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteReviewUseCase {
  constructor(
    @inject("ReviewsRepository")
    private reviewsRepository: IReviewsRepository
  ) { }

  async execute(id: string): Promise<void> {
    const reviews = await this.reviewsRepository.delete(id)

    console.log(reviews);
  }

}

export { DeleteReviewUseCase };
