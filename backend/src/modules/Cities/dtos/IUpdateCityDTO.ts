import { Place } from "@modules/Places/infra/typeorm/entities/Place";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

interface IUpdateCityDTO {
  id: string;
  name: string;
  description: string;
  fact: string;
  photo: string;
  highlight: (() => string) | QueryDeepPartialEntity<Place> | undefined;
}

export { IUpdateCityDTO };
