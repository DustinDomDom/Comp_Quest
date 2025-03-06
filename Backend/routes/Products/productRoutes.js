import express from "express";
import {
  createProduct,
  deleteProduct,
  getallProducts,
  updateProduct,
  getProductByComponentType,
} from "../../controllers/productControllers.js";

const router = express.Router();

// Trying to get all products
router.get("/", getallProducts);

// Trying to create a new product
router.post("/", createProduct);

// Trying to get ComponentType
router.get("/:ComponentType", getProductByComponentType);

// OPTIONAL: Update and Delete routes
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
