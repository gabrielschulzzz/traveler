/* eslint-disable prettier/prettier */
import { City } from "@modules/Cities/infra/typeorm/entities/City";
import { CitiesRepository } from "@modules/Cities/infra/typeorm/repositories/CitiesRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: string;
  name: string;
  description: string;
  fact: string;
  photo: string;
}

@injectable()
class UpdateCityUseCase {
  constructor(
    @inject("CitiesRepository")
    private citiesRepository: CitiesRepository
  ) { }

  async execute({ description, name, fact, id, photo }: IRequest): Promise<void> {
    await this.citiesRepository.update({ description, name, fact, id, photo })
  }

}

export { UpdateCityUseCase };
