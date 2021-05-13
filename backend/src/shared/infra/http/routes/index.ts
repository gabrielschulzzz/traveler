import { Router } from "express";

import { citiesRoutes } from "./cities.routes";
import { placesRoutes } from "./places.routes";

const router = Router();

router.use("/cities", citiesRoutes);
router.use("/places", placesRoutes);

export { router };
