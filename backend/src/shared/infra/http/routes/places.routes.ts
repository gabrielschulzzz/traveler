import { AddPlaceController } from "@modules/Places/useCases/addPlace/AddPlaceController";
import { DeletePlaceController } from "@modules/Places/useCases/deletePlace/DeletePlaceController";
import { ListSinglePlaceController } from "@modules/Places/useCases/listSinglePlace/ListSinglePlaceController";
import { UpdatePlaceController } from "@modules/Places/useCases/updatePlace/UpdatePlaceController";
import { Router } from "express";

const placesRoutes = Router();

const addPlaceController = new AddPlaceController();
const listSinglePlaceController = new ListSinglePlaceController();
const updatePlaceController = new UpdatePlaceController();
const deletePlaceController = new DeletePlaceController();

placesRoutes.post("/", addPlaceController.handle);
placesRoutes.get("/:id", listSinglePlaceController.handle);
placesRoutes.delete("/:id", deletePlaceController.handle);
placesRoutes.patch("/:id", updatePlaceController.handle);

export { placesRoutes };
