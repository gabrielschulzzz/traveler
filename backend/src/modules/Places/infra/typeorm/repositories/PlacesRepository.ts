import { ICreatePlaceDTO } from "@modules/Places/dtos/ICreatePlaceDTO";
import { IUpdatePlaceDTO } from "@modules/Places/dtos/IUpdatePlaceDTO";
import { IPlacesRepository } from "@modules/Places/repositories/IPlacesRepository";
import { getRepository, Repository } from "typeorm";

import { Place } from "../entities/Place";

class PlacesRepository implements IPlacesRepository {
  private repository: Repository<Place>;

  constructor() {
    this.repository = getRepository(Place);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findOne(id: string): Promise<Place> {
    const place = await this.repository.findOne(id);

    if (!place) {
      throw new Error("Place not found");
    }

    return place;
  }

  async findAll(): Promise<Place[]> {
    const places = this.repository.find();
    return places;
  }

  async update({
    id,
    name,
    bairro,
    category,
    cep,
    numero,
    photo,
    rua,
    domingo,
    quarta,
    quinta,
    sabado,
    segunda,
    sexta,
    terca,
  }: IUpdatePlaceDTO): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update(Place)
      .set({
        id,
        name,
        bairro,
        category,
        cep,
        numero,
        photo,
        rua,
        domingo,
        quarta,
        quinta,
        sabado,
        segunda,
        sexta,
        terca,
      })
      .where("id = :id", { id })
      .execute();
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
    description,
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
      description,
    });

    await this.repository.save(newPlace);

    return newPlace;
  }
}

export { PlacesRepository };
