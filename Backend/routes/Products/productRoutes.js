import express from "express";
import {
  createProduct,
  deleteProduct,
  getallProducts,
  updateProduct,
  getProductByComponentType,
} from "../../controllers/productControllers.js";

const router = express.Router();

router.get("/", getallProducts);
router.post("/", createProduct);

router.get("/:ComponentType", getProductByComponentType);

router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
