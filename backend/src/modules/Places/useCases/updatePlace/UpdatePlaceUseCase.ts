/* eslint-disable prettier/prettier */
import { PlacesRepository } from "@modules/Places/infra/typeorm/repositories/PlacesRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: string;
  name: string;
  photo: string;
  category: string;
  cep: string;
  rua: string;
  bairro: string;
  numero: string;
  domingo: boolean;
  segunda: boolean;
  terca: boolean;
  quarta: boolean;
  quinta: boolean;
  sexta: boolean;
  sabado: boolean;
}

@injectable()
class UpdatePlaceUseCase {
  constructor(
    @inject("PlacesRepository")
    private placesRepository: PlacesRepository
  ) { }

  async execute({ terca, sexta, segunda, sabado, quinta, quarta, domingo, rua, photo, numero, cep, category, bairro, name, id }: IRequest): Promise<void> {
    await this.placesRepository.update({ terca, sexta, segunda, sabado, quinta, quarta, domingo, rua, photo, numero, cep, category, bairro, name, id })
  }
}

export { UpdatePlaceUseCase };
