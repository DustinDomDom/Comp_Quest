import express from "express";

import {
  createUser,
  getUser,
  editUser,
  deleteUser,
} from "../../controllers/UserControllers.js";

const router = express.Router();

router.post("/register", createUser);

router.post("/login", getUser);

router.put("/:id", editUser);

router.delete("/:id", deleteUser);

export default router;
