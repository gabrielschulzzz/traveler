/* eslint-disable prettier/prettier */
import { PlacesRepository } from "@modules/Places/infra/typeorm/repositories/PlacesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeletePlaceUseCase {
  constructor(
    @inject("PlacesRepository")
    private placesRepository: PlacesRepository
  ) { }

  async execute(id: string): Promise<void> {
    await this.placesRepository.delete(id);
  }
}

export { DeletePlaceUseCase };
