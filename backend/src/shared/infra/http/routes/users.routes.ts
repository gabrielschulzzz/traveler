import uploadConfig from "@config/upload";
import { CreateUserController } from "@modules/Users/useCases/createUser/CreateUserController";
import { DeleteUserController } from "@modules/Users/useCases/deleteUser/DeleteUserController";
import { ListAllUsersController } from "@modules/Users/useCases/listAllUsers/ListAllUsersController";
import { ListSingleUserController } from "@modules/Users/useCases/listSingleUser/ListSingleUserController";
import { UpdateUserController } from "@modules/Users/useCases/updateUser/UpdateUserController";
import { Router } from "express";
import multer from "multer";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();
const listAllUsersController = new ListAllUsersController();
const listSingleUserController = new ListSingleUserController();
const updateUserController = new UpdateUserController();

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

usersRoutes.post("/", createUserController.handle);
usersRoutes.delete("/", ensureAuthenticated, deleteUserController.handle);
usersRoutes.get("/", listAllUsersController.handle);
usersRoutes.get("/me", ensureAuthenticated, listSingleUserController.handle);
usersRoutes.patch(
  "/",
  uploadAvatar.single("avatar"),
  ensureAuthenticated,
  updateUserController.handle
);

export { usersRoutes };
