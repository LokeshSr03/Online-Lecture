import express from "express";
import {
  deleteProduct,
  getProductById,
  getProducts,
  createProduct,
  updateProduct,
  createReview,
} from "../controllers/courseController.js";
import { admin, protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, createProduct);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);
router.route("/:id/reviews").post(protect, createReview);

export default router;
