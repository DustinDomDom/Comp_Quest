import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import { sql } from "./config/db.js";
import productRoutes from "./routes/Products/productRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

console.log(PORT);

app.use(cors());
app.use(express.json()); // Body parser

app.use(helmet()); // HTTPS security
app.use(morgan("dev")); // Logging

app.get("/api/Test", (req, res) => {
  res.send(sql);
});

async function initDB() {
  try {
    await sql`
    CREATE TABLE IF NOT EXISTS components (
      componentName SERIAL PRIMARY KEY,
      image TEXT NOT NULL,
      name TEXT NOT NULL,
      tag TEXT[] NOT NULL,
      price NUMERIC NOT NULL,
      wattage NUMERIC NOT NULL,
      created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `;
  } catch (err) {
    console.log(err);
  }
}

app.use("/api/Test", productRoutes);

initDB().then(() => {
  console.log("Database initialized");
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
});
