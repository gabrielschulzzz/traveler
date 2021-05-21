import { Place } from "@modules/Places/infra/typeorm/entities/Place";
import { User } from "@modules/Users/infra/typeorm/entities/User";

interface ICreateReviewDTO {
  score: string;
  user: User;
  place: Place;
  review: string;
}

export { ICreateReviewDTO };
