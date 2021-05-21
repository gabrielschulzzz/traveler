import { ICreateReviewDTO } from "../dtos/ICreateReviewDTO";
import { Review } from "../infra/typeorm/entities/Review";

interface IReviewsRepository {
  create(data: ICreateReviewDTO): Promise<Review>;
  delete(id: string): Promise<void>;
  findAll(): Promise<Review[]>;
}

export { IReviewsRepository };
