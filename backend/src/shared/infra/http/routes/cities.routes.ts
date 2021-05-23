import uploadConfig from "@config/upload";
import { AddCityController } from "@modules/Cities/useCases/addCity/AddCityController";
import { DeleteCityController } from "@modules/Cities/useCases/deleteCity/DeleteCityController";
import { ListCitiesController } from "@modules/Cities/useCases/listCities/ListCitiesController";
import { ListSingleCityController } from "@modules/Cities/useCases/listSingleCity/ListSingleCityController";
import { UpdateCityController } from "@modules/Cities/useCases/updateCity/UpdateCityController";
import { Router } from "express";
import multer from "multer";

const citiesRoutes = Router();

const uploadCityImage = multer(uploadConfig.upload("./tmp/city"));

const listCitiesController = new ListCitiesController();
const listSingleCityController = new ListSingleCityController();
const addCityController = new AddCityController();
const deleteCityController = new DeleteCityController();
const updateCityController = new UpdateCityController();

citiesRoutes.get("/", listCitiesController.handle);
citiesRoutes.get("/:id", listSingleCityController.handle);
citiesRoutes.post(
  "/",
  uploadCityImage.single("photo"),
  addCityController.handle
);
citiesRoutes.delete("/:id", deleteCityController.handle);
citiesRoutes.put("/:id", updateCityController.handle);

export { citiesRoutes };
