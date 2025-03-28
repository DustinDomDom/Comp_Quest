import express from "express";

import {
  getAllManufacturer,
  createManufacturer,
  deleteManufacturer,
} from "../../controllers/manufacturerController.js";

const router = express.Router();

router.get("/", getAllManufacturer);

router.post("/New", createManufacturer);

router.delete("/:manid", deleteManufacturer);

export default router;
