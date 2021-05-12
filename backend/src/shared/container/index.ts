import { CitiesRepository } from "@modules/Cities/infra/typeorm/repositories/CitiesRepository";
import { ICitiesRepository } from "@modules/Cities/repositories/ICitiesRepository";
import { container } from "tsyringe";

container.registerSingleton<ICitiesRepository>(
  "CitiesRepository",
  CitiesRepository
);
