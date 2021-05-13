import { AddCityController } from "@modules/Cities/useCases/addCity/AddCityController";
import { ListCitiesController } from "@modules/Cities/useCases/listCities/ListCitiesController";
import { ListSingleCityController } from "@modules/Cities/useCases/listSingleCity/ListSingleCityController";
import { Router } from "express";

const citiesRoutes = Router();

const listCitiesController = new ListCitiesController();
const listSingleCityController = new ListSingleCityController();
const addCityController = new AddCityController();

citiesRoutes.get("/", listCitiesController.handle);
citiesRoutes.get("/:id", listSingleCityController.handle);
citiesRoutes.post("/", addCityController.handle);

export { citiesRoutes };
