import { Router } from "express";

import { citiesRoutes } from "./cities.routes";
import { placesRoutes } from "./places.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/cities", citiesRoutes);
router.use("/places", placesRoutes);
router.use("/users", usersRoutes);

export { router };
