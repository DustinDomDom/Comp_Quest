import express from "express";
import {
  createProduct,
  deleteProduct,
  updateProduct,
  getProductByComponentType,
  getallProductsOption,
} from "../../controllers/productControllers.js";

const router = express.Router();

router.get("/", getallProductsOption);

router.get("/:type", getProductByComponentType);

// Trying to create a new product
router.post("/", createProduct); // Reserved for Admin

// Trying to get all product based ComponentType
// router.get("/:ComponentType", getProductByComponentType);

// OPTIONAL: Update and Delete routes
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
