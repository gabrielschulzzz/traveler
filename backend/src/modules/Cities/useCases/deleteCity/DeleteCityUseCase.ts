/* eslint-disable prettier/prettier */
import { ICitiesRepository } from "@modules/Cities/repositories/ICitiesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteCityUseCase {
  constructor(
    @inject("CitiesRepository")
    private citiesRepository: ICitiesRepository
  ) { }

  async execute(id: string): Promise<void> {
    await this.citiesRepository.delete(id);
  }
}

export { DeleteCityUseCase };
