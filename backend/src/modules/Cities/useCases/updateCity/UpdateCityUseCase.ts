/* eslint-disable prettier/prettier */
import { City } from "@modules/Cities/infra/typeorm/entities/City";
import { CitiesRepository } from "@modules/Cities/infra/typeorm/repositories/CitiesRepository";
import { Place } from "@modules/Places/infra/typeorm/entities/Place";
import { inject, injectable } from "tsyringe";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

interface IRequest {
  id: string;
  name: string;
  description: string;
  fact: string;
  photo: string;
  highlight: (() => string) | QueryDeepPartialEntity<Place> | undefined;
}

@injectable()
class UpdateCityUseCase {
  constructor(
    @inject("CitiesRepository")
    private citiesRepository: CitiesRepository
  ) { }

  async execute({ description, name, fact, id, photo, highlight }: IRequest): Promise<void> {
    await this.citiesRepository.update({ description, name, fact, id, photo, highlight })
  }

}

export { UpdateCityUseCase };
