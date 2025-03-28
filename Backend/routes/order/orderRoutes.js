import express from "express";

import {
  userOrder,
  modifyOrder,
  confirmOrder,
} from "../../controllers/orderControllers.js";

const router = express.Router();

router.post("/Pending", userOrder);

router.post("/AllOrders", confirmOrder);

router.get("/AllOrder", modifyOrder);

export default router;
