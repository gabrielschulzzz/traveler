/* eslint-disable prettier/prettier */
import { City } from "@modules/Cities/infra/typeorm/entities/City";
import { Place } from "@modules/Places/infra/typeorm/entities/Place";
import { IPlacesRepository } from "@modules/Places/repositories/IPlacesRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string;
  city: City;
  photo: string;
  category: string;
  cep: string;
  rua: string;
  bairro: string;
  numero: string;
  description: string;
}

@injectable()
class AddPlaceUseCase {
  constructor(
    @inject("PlacesRepository")
    private placesRepository: IPlacesRepository
  ) { }

  public async execute({ bairro, rua, photo, numero, cep, category, name, city, description }: IRequest): Promise<Place> {
    const place = await this.placesRepository.create({ bairro, rua, photo, numero, cep, category, name, city, description })

    return place;
  }
}

export { AddPlaceUseCase };
