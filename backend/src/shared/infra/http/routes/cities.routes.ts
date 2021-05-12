import { AddCityController } from "@modules/Cities/useCases/addCity/AddCityController";
import { ListCitiesController } from "@modules/Cities/useCases/listCities/ListCitiesController";
import { Router } from "express";

const citiesRoutes = Router();

const listCitiesController = new ListCitiesController();
const addCityController = new AddCityController();

citiesRoutes.get("/", listCitiesController.handle);
citiesRoutes.post("/", addCityController.handle);

export { citiesRoutes };
