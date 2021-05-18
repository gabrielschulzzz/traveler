import { AddReviewController } from "@modules/Reviews/useCases/addReview/AddReviewController";
import { ListAllReviewsController } from "@modules/Reviews/useCases/listAllReviews/ListAllReviewsController";
import { Router } from "express";

const addReviewController = new AddReviewController();
const listAllReviewsController = new ListAllReviewsController();
const reviewsRouter = Router();

reviewsRouter.post("/", addReviewController.handle);
reviewsRouter.get("/", listAllReviewsController.handle);

export { reviewsRouter };
