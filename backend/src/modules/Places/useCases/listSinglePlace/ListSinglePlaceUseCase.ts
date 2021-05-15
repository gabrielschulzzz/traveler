/* eslint-disable prettier/prettier */
import { Place } from "@modules/Places/infra/typeorm/entities/Place";
import { IPlacesRepository } from "@modules/Places/repositories/IPlacesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListSinglePlaceUseCase {
  constructor(
    @inject("PlacesRepository")
    private placesRepository: IPlacesRepository
  ) { }

  public async execute(id: string): Promise<Place> {
    const place = await this.placesRepository.findOne(id);

    return place;
  }
}

export { ListSinglePlaceUseCase };
