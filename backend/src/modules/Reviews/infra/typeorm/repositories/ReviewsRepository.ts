import { ICreateReviewDTO } from "@modules/Reviews/dtos/ICreateReviewDTO";
import { IReviewsRepository } from "@modules/Reviews/repositories/IReviewsRepository";
import { getRepository, Repository } from "typeorm";

import { Review } from "../entities/Review";

class ReviewsRepository implements IReviewsRepository {
  private repository: Repository<Review>;

  constructor() {
    this.repository = getRepository(Review);
  }
  async create({
    score,
    user,
    place,
    review,
  }: ICreateReviewDTO): Promise<void> {
    const newReview = await this.repository.create({
      score,
      user,
      place,
      review,
    });

    await this.repository.save(newReview);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findAll(): Promise<Review[]> {
    // const allReviews = await this.repository.find();

    const allReviews = await this.repository
      .createQueryBuilder("review")
      .leftJoinAndSelect("review.place", "place")
      .select([
        "review.id",
        "review.review",
        "review.score",
        "place.name",
        "place.photo",
      ])
      .leftJoinAndSelect("review.user", "user")
      .getMany();

    return allReviews;
  }
}

export { ReviewsRepository };
