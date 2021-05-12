/* eslint-disable prettier/prettier */
import { City } from "@modules/Cities/infra/typeorm/entities/City";
import { ICitiesRepository } from "@modules/Cities/repositories/ICitiesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListCitiesUseCase {
  constructor(
    @inject("CitiesRepository")
    private citiesRepository: ICitiesRepository
  ) { }

  async execute(): Promise<City[]> {
    const cities = await this.citiesRepository.findAll();

    return cities;
  }
}

export { ListCitiesUseCase };
