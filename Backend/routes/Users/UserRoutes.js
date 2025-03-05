import express from "express";

import { createUser, editUser } from "../../controllers/RegisterControllers.js";

const router = express.Router();

router.post("/", createUser);
