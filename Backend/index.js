import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import { sql } from "./config/db.js";
import productRoutes from "./routes/Products/productRoutes.js";
import { createUser, getUser } from "./controllers/UserControllers.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // Body parser
app.use(helmet()); // HTTPS security
app.use(morgan("dev")); // Logging

// Initialize Database
async function initDB() {
  try {
    await sql`
    CREATE TABLE IF NOT EXISTS Components (
      component_id SERIAL PRIMARY KEY,
      component_type VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      manufacturer VARCHAR(100) NOT NULL,
      price DECIMAL(10, 2),
      wattage VARCHAR(255) NOT NULL,
      created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `;

    console.log("Database initialized");
  } catch (err) {
    console.error("Error initializing database:", err);
  }
}

// Routes
app.use("/api/Component", productRoutes);

// Register User
app.post("/register", createUser);

// Login User
app.post("/login", getUser);

// Initialize database and start server
initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
