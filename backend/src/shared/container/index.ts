import { CitiesRepository } from "@modules/Cities/infra/typeorm/repositories/CitiesRepository";
import { ICitiesRepository } from "@modules/Cities/repositories/ICitiesRepository";
import { PlacesRepository } from "@modules/Places/infra/typeorm/repositories/PlacesRepository";
import { IPlacesRepository } from "@modules/Places/repositories/IPlacesRepository";
import { ReviewsRepository } from "@modules/Reviews/infra/typeorm/repositories/ReviewsRepository";
import { IReviewsRepository } from "@modules/Reviews/repositories/IReviewsRepository";
import { UsersRepository } from "@modules/Users/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/Users/repositories/IUsersRepository";
import { container } from "tsyringe";

container.registerSingleton<ICitiesRepository>(
  "CitiesRepository",
  CitiesRepository
);

container.registerSingleton<IPlacesRepository>(
  "PlacesRepository",
  PlacesRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IReviewsRepository>(
  "ReviewsRepository",
  ReviewsRepository
);
