/* eslint-disable prettier/prettier */
import { Place } from "@modules/Places/infra/typeorm/entities/Place";
import { IReviewsRepository } from "@modules/Reviews/repositories/IReviewsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  score: string;
  user: string;
  place: Place;
  review: string;
}

@injectable()
class AddReviewUseCase {
  constructor(
    @inject("ReviewsRepository")
    private reviewsRepository: IReviewsRepository
  ) { }

  async execute({ score, user, place, review }: IRequest): Promise<void> {
    await this.reviewsRepository.create({ score, user, place, review })
  }
}

export { AddReviewUseCase };