import express from "express";

import {
  createUser,
  editUser,
  deleteUser,
} from "../../controllers/RegisterControllers.js";

const router = express.Router();

router.post("/", createUser);

router.put("/:id", editUser);

router.delete("/:id", deleteUser);
