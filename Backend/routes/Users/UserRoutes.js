import express from "express";

import {
  createUser,
  getUser,
  editUser,
  deleteUser,
} from "../../controllers/UserControllers.js";

const router = express.Router();

router.post("/", createUser);

router.get("/", getUser);

router.put("/:id", editUser);

router.delete("/:id", deleteUser);
