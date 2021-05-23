/* eslint-disable prettier/prettier */
import { ICitiesRepository } from "@modules/Cities/repositories/ICitiesRepository";
import { inject, injectable } from "tsyringe";
import { deleteFile } from "utils/file";

@injectable()
class DeleteCityUseCase {
  constructor(
    @inject("CitiesRepository")
    private citiesRepository: ICitiesRepository
  ) { }

  async execute(id: string): Promise<void> {
    const city = await this.citiesRepository.findOne(id);

    city.places.forEach(async place => {
      await deleteFile(`./tmp/place/${place.photo.substring(28)}`)
    })

    await deleteFile(`./tmp/city/${city.photo.substring(27)}`)

    await this.citiesRepository.delete(id);
  }
}

export { DeleteCityUseCase };
