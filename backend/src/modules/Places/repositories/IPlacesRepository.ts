import { ICreatePlaceDTO } from "../dtos/ICreatePlaceDTO";
import { Place } from "../infra/typeorm/entities/Place";

interface IPlacesRepository {
  findAll(): Promise<Place[]>;
  create({
    name,
    bairro,
    category,
    cep,
    city,
    numero,
    photo,
    rua,
  }: ICreatePlaceDTO): Promise<Place>;
}

export { IPlacesRepository };
