import express from "express";

import createUser from "../../controllers/RegisterControllers.js";

const router = express.Router();

router.post("/", createUser);
