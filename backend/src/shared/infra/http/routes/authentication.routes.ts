import { AuthenticateUserController } from "@modules/Users/useCases/authenticateUser/AuthenticateUserController";
import { Router } from "express";

const authenticationRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticationRoutes.post("/sessions", authenticateUserController.handle);

export { authenticationRoutes };
