import { ICreatePlaceDTO } from "@modules/Places/dtos/ICreatePlaceDTO";
import { IPlacesRepository } from "@modules/Places/repositories/IPlacesRepository";
import { getRepository, Repository } from "typeorm";

import { Place } from "../entities/Place";

class PlacesRepository implements IPlacesRepository {
  private repository: Repository<Place>;

  constructor() {
    this.repository = getRepository(Place);
  }

  async findAll(): Promise<Place[]> {
    const places = this.repository.find();
    return places;
  }

  async create({
    name,
    bairro,
    category,
    cep,
    city,
    numero,
    photo,
    rua,
  }: ICreatePlaceDTO): Promise<Place> {
    const newPlace = await this.repository.create({
      name,
      city,
      bairro,
      category,
      cep,
      numero,
      photo,
      rua,
    });

    await this.repository.save(newPlace);

    return newPlace;
  }
}

export { PlacesRepository };
