import { ICreatePlaceDTO } from "@modules/Places/dtos/ICreatePlaceDTO";
import { IUpdatePlaceDTO } from "@modules/Places/dtos/IUpdatePlaceDTO";
import { IPlacesRepository } from "@modules/Places/repositories/IPlacesRepository";
import { createQueryBuilder, getRepository, Repository } from "typeorm";

import { Place } from "../entities/Place";

class PlacesRepository implements IPlacesRepository {
  private repository: Repository<Place>;

  constructor() {
    this.repository = getRepository(Place);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findOne(id: string): Promise<any> {
    // const place = await this.repository.findOne(id, {
    //   relations: ["reviews"],
    // });

    const place = await this.repository
      .createQueryBuilder("place")
      .leftJoinAndSelect("place.reviews", "review")
      .leftJoinAndSelect("review.user", "user")
      .where("place.id = :id", { id })
      .getOne();

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
    photo,
    category,
    cep,
    rua,
    telefone,
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
        telefone,
        photo,
        rua,
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
    telefone,
    rua,
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
  }: ICreatePlaceDTO): Promise<Place> {
    const newPlace = await this.repository.create({
      name,
      city,
      bairro,
      category,
      cep,
      numero,
      photo,
      telefone,
      rua,
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
    });

    await this.repository.save(newPlace);

    return newPlace;
  }
}

export { PlacesRepository };
