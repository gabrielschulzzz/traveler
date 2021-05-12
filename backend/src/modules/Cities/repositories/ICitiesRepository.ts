import { ICreateCityDTO } from "../dtos/ICreateCityDTO";
import { City } from "../infra/typeorm/entities/City";

interface ICitiesRepository {
  findAll(): Promise<City[]>;
  create({ description, fact, name }: ICreateCityDTO): Promise<City>;
}

export { ICitiesRepository };
