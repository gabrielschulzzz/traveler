/* eslint-disable prettier/prettier */
import { Review } from "@modules/Reviews/infra/typeorm/entities/Review";
import { IReviewsRepository } from "@modules/Reviews/repositories/IReviewsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListAllReviewsUseCase {
  constructor(
    @inject("ReviewsRepository")
    private reviewsRepository: IReviewsRepository
  ) { }
  async execute(): Promise<Review[]> {
    const reviews = await this.reviewsRepository.findAll()

    return reviews;
  }
}

export { ListAllReviewsUseCase };
