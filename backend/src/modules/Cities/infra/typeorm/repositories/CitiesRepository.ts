import { ICreateCityDTO } from "@modules/Cities/dtos/ICreateCityDTO";
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
    const cities = await this.repository.find();

    return cities;
  }

  async create({ description, fact, name }: ICreateCityDTO): Promise<City> {
    const city = await this.repository.create({
      description,
      fact,
      name,
    });

    await this.repository.save(city);

    return city;
  }
}

export { CitiesRepository };
