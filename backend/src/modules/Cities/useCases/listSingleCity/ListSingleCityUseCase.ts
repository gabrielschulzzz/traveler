/* eslint-disable prettier/prettier */
import { City } from "@modules/Cities/infra/typeorm/entities/City";
import { ICitiesRepository } from "@modules/Cities/repositories/ICitiesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListSingleCityUseCase {
  constructor(
    @inject("CitiesRepository")
    private citiesRepository: ICitiesRepository
  ) { }

  async execute(id: string): Promise<City> {
    const city = await this.citiesRepository.findOne(id);

    return city;
  }
}

export { ListSingleCityUseCase };
