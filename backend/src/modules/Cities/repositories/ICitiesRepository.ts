import { ICreateCityDTO } from "../dtos/ICreateCityDTO";
import { IUpdateCityDTO } from "../dtos/IUpdateCityDTO";
import { City } from "../infra/typeorm/entities/City";

interface ICitiesRepository {
  findOne(id: string): Promise<City>;
  findAll(): Promise<City[]>;
  delete(id: string): Promise<void>;
  update(data: IUpdateCityDTO): Promise<void>;
  create(data: ICreateCityDTO): Promise<City>;
}

export { ICitiesRepository };
