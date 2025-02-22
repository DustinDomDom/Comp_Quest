import express from "express";
import {
  createProduct,
  deleteProduct,
  getallProducts,
  getProductById,
  updateProduct,
} from "../../controllers/productControllers.js";

const router = express.Router();

router.get("/", getallProducts);
router.post("/", createProduct);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
