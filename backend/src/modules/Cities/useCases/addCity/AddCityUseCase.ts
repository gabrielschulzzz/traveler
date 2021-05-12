/* eslint-disable prettier/prettier */
import { ICreateCityDTO } from "@modules/Cities/dtos/ICreateCityDTO";
import { City } from "@modules/Cities/infra/typeorm/entities/City";
import { ICitiesRepository } from "@modules/Cities/repositories/ICitiesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class AddCityUseCase {
  constructor(
    @inject("CitiesRepository")
    private citiesRepository: ICitiesRepository
  ) { }

  async execute({ name, fact, description }: ICreateCityDTO): Promise<City> {
    const city = await this.citiesRepository.create({
      name,
      fact,
      description,
    });

    return city;
  }
}

export { AddCityUseCase };
