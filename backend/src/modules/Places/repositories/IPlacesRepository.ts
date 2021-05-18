import { ICreatePlaceDTO } from "../dtos/ICreatePlaceDTO";
import { IUpdatePlaceDTO } from "../dtos/IUpdatePlaceDTO";
import { Place } from "../infra/typeorm/entities/Place";

interface IPlacesRepository {
  findAll(): Promise<Place[]>;
  findOne(id: string): Promise<any>;
  create(data: ICreatePlaceDTO): Promise<Place>;
  update(data: IUpdatePlaceDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IPlacesRepository };
