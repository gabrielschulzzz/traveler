import { AddReviewController } from "@modules/Reviews/useCases/addReview/AddReviewController";
import { DeleteReviewController } from "@modules/Reviews/useCases/deleteReview/DeleteReviewController";
import { ListAllReviewsController } from "@modules/Reviews/useCases/listAllReviews/ListAllReviewsController";
import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const addReviewController = new AddReviewController();
const listAllReviewsController = new ListAllReviewsController();
const deleteReviewController = new DeleteReviewController();

const reviewsRouter = Router();

reviewsRouter.post("/", ensureAuthenticated, addReviewController.handle);
reviewsRouter.get("/", listAllReviewsController.handle);
reviewsRouter.delete("/", deleteReviewController.handle);

export { reviewsRouter };
