import uploadConfig from "@config/upload";
import { AddPlaceController } from "@modules/Places/useCases/addPlace/AddPlaceController";
import { DeletePlaceController } from "@modules/Places/useCases/deletePlace/DeletePlaceController";
import { ListSinglePlaceController } from "@modules/Places/useCases/listSinglePlace/ListSinglePlaceController";
import { UpdatePlaceController } from "@modules/Places/useCases/updatePlace/UpdatePlaceController";
import { Router } from "express";
import multer from "multer";

const placesRoutes = Router();

const uploadPlaceImage = multer(uploadConfig.upload("./tmp/place"));

const addPlaceController = new AddPlaceController();
const listSinglePlaceController = new ListSinglePlaceController();
const updatePlaceController = new UpdatePlaceController();
const deletePlaceController = new DeletePlaceController();

placesRoutes.post(
  "/",
  uploadPlaceImage.single("photo"),
  addPlaceController.handle
);
placesRoutes.get("/:id", listSinglePlaceController.handle);
placesRoutes.delete("/:id", deletePlaceController.handle);
placesRoutes.patch(
  "/:id",
  uploadPlaceImage.single("photo"),
  updatePlaceController.handle
);

export { placesRoutes };
