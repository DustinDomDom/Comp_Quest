import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import productRoutes from "./routes/Products/productRoutes.js";
import UserRoutes from "./routes/Users/UserRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(helmet()); // HTTPS security
app.use(morgan("dev")); // Logging

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Routes for All options of Components
app.use("/API/Component", productRoutes);

// Routes for User
app.use("/user", UserRoutes);
