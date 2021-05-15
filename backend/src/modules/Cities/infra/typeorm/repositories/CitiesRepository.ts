import { ICreateCityDTO } from "@modules/Cities/dtos/ICreateCityDTO";
import { IUpdateCityDTO } from "@modules/Cities/dtos/IUpdateCityDTO";
import { ICitiesRepository } from "@modules/Cities/repositories/ICitiesRepository";
import { getRepository, Repository } from "typeorm";

import { City } from "../entities/City";

class CitiesRepository implements ICitiesRepository {
  private repository: Repository<City>;

  constructor() {
    this.repository = getRepository(City);
  }

  async findOne(id: string): Promise<City> {
    const city = await this.repository.findOne(
      { id },
      { relations: ["places"] }
    );

    if (!city) {
      throw new Error("City not found");
    }

    return city;
  }

  async findAll(): Promise<City[]> {
    const cities = await this.repository.find({ relations: ["places"] });

    return cities;
  }

  async update({
    id,
    fact,
    name,
    description,
    photo,
  }: IUpdateCityDTO): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update(City)
      .set({ name, description, fact, photo })
      .where("id = :id", { id })
      .execute();
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async create({
    description,
    fact,
    name,
    photo,
  }: ICreateCityDTO): Promise<City> {
    const city = await this.repository.create({
      description,
      fact,
      name,
      photo,
    });

    await this.repository.save(city);

    return city;
  }
}

export { CitiesRepository };
