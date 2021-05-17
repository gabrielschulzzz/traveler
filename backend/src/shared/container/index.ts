import { CitiesRepository } from "@modules/Cities/infra/typeorm/repositories/CitiesRepository";
import { ICitiesRepository } from "@modules/Cities/repositories/ICitiesRepository";
import { PlacesRepository } from "@modules/Places/infra/typeorm/repositories/PlacesRepository";
import { IPlacesRepository } from "@modules/Places/repositories/IPlacesRepository";
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
