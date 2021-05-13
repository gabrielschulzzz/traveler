import { CitiesRepository } from "@modules/Cities/infra/typeorm/repositories/CitiesRepository";
import { ICitiesRepository } from "@modules/Cities/repositories/ICitiesRepository";
import { PlacesRepository } from "@modules/Places/infra/typeorm/repositories/PlacesRepository";
import { IPlacesRepository } from "@modules/Places/repositories/IPlacesRepository";
import { container } from "tsyringe";

container.registerSingleton<ICitiesRepository>(
  "CitiesRepository",
  CitiesRepository
);

container.registerSingleton<IPlacesRepository>(
  "PlacesRepository",
  PlacesRepository
);
