import { City } from "@modules/Cities/infra/typeorm/entities/City";

interface ICreatePlaceDTO {
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

export { ICreatePlaceDTO };
