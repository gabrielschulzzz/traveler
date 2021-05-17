/* eslint-disable prettier/prettier */
import { PlacesRepository } from "@modules/Places/infra/typeorm/repositories/PlacesRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: string;
  name: string,
  photo: string;
  category: string;
  cep: string;
  rua: string;
  bairro: string;
  telefone: string;
  numero: string;
  description: string;
  domingoOpen: boolean;
  domingoFrom: string;
  domingoUntil: string;
  segundaOpen: boolean;
  segundaFrom: string;
  segundaUntil: string;
  tercaOpen: boolean;
  tercaFrom: string;
  tercaUntil: string;
  quartaOpen: boolean;
  quartaFrom: string;
  quartaUntil: string;
  quintaOpen: boolean;
  quintaFrom: string;
  quintaUntil: string;
  sextaOpen: boolean;
  sextaFrom: string;
  sextaUntil: string;
  sabadoOpen: boolean;
  sabadoFrom: string;
  sabadoUntil: string;
}

@injectable()
class UpdatePlaceUseCase {
  constructor(
    @inject("PlacesRepository")
    private placesRepository: PlacesRepository
  ) { }

  async execute({
    id,
    name,
    photo,
    category,
    cep,
    telefone,
    rua,
    bairro,
    numero,
    description,
    domingoOpen,
    domingoFrom,
    domingoUntil,
    segundaOpen,
    segundaFrom,
    segundaUntil,
    tercaOpen,
    tercaFrom,
    tercaUntil,
    quartaOpen,
    quartaFrom,
    quartaUntil,
    quintaOpen,
    quintaFrom,
    quintaUntil,
    sextaOpen,
    sextaFrom,
    sextaUntil,
    sabadoOpen,
    sabadoFrom,
    sabadoUntil
  }: IRequest): Promise<void> {
    await this.placesRepository.update({
      id,
      name,
      photo,
      category,
      cep,
      telefone,
      rua,
      bairro,
      numero,
      description,
      domingoOpen,
      domingoFrom,
      domingoUntil,
      segundaOpen,
      segundaFrom,
      segundaUntil,
      tercaOpen,
      tercaFrom,
      tercaUntil,
      quartaOpen,
      quartaFrom,
      quartaUntil,
      quintaOpen,
      quintaFrom,
      quintaUntil,
      sextaOpen,
      sextaFrom,
      sextaUntil,
      sabadoOpen,
      sabadoFrom,
      sabadoUntil,
    })
  }
}

export { UpdatePlaceUseCase };
