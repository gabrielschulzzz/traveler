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
  telefone: string,
  numero: string;
  description: string;
  domingoOpen: boolean,
  domingoFrom: string,
  domingoUntil: string,
  segundaOpen: boolean,
  segundaFrom: string,
  segundaUntil: string,
  tercaOpen: boolean,
  tercaFrom: string,
  tercaUntil: string,
  quartaOpen: boolean,
  quartaFrom: string,
  quartaUntil: string,
  quintaOpen: boolean,
  quintaFrom: string,
  quintaUntil: string,
  sextaOpen: boolean,
  sextaFrom: string,
  sextaUntil: string,
  sabadoOpen: boolean,
  sabadoFrom: string,
  sabadoUntil: string,
}

@injectable()
class AddPlaceUseCase {
  constructor(
    @inject("PlacesRepository")
    private placesRepository: IPlacesRepository
  ) { }

  public async execute({ bairro, rua, photo, numero, telefone, cep, category, name, city, description, domingoOpen,
    domingoFrom, domingoUntil, segundaOpen, segundaFrom, segundaUntil, tercaOpen, tercaFrom, tercaUntil, quartaOpen, quartaFrom, quartaUntil, quintaOpen, quintaFrom, quintaUntil, sextaOpen, sextaFrom, sextaUntil, sabadoOpen, sabadoFrom, sabadoUntil }: IRequest): Promise<Place> {
    const place = await this.placesRepository.create({
      bairro, rua, photo, numero, cep, category, telefone, name, city, description, domingoOpen,
      domingoFrom, domingoUntil, segundaOpen, segundaFrom, segundaUntil, tercaOpen, tercaFrom, tercaUntil, quartaOpen, quartaFrom, quartaUntil, quintaOpen, quintaFrom, quintaUntil, sextaOpen, sextaFrom, sextaUntil, sabadoOpen, sabadoFrom, sabadoUntil
    })

    return place;
  }
}

export { AddPlaceUseCase };
