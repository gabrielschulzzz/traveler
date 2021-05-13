import { AddPlaceController } from "@modules/Places/useCases/addPlace/AddPlaceController";
import { Router } from "express";

const placesRoutes = Router();

const addPlaceController = new AddPlaceController();

placesRoutes.post("/", addPlaceController.handle);

export { placesRoutes };
