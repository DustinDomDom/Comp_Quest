import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import { sql } from "./config/db.js";
import productRoutes from "./routes/Products/productRoutes.js";
import { createUser } from "./controllers/RegisterControllers.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

console.log(PORT);

app.use(cors());
app.use(express.json()); // Body parser

app.use(helmet()); // HTTPS security
app.use(morgan("dev")); // Logging

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

    await sql`
    CREATE TABLE IF NOT EXISTS Users (
      user_id SERIAL PRIMARY KEY,
      fname VARCHAR(50) NOT NULL,
      lname VARCHAR(50) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      street VARCHAR(50),
      city VARCHAR(50),
      state VARCHAR(50),
      zip VARCHAR(10),
      created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `;

    await sql`
    CREATE TABLE IF NOT EXISTS Orders (
      order_id SERIAL PRIMARY KEY,
      user_id INT,
      component_id INT,
      quantity INT,
      created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `;

    // await sql`
    // CREATE TABLE IF NOT EXISTS Builds (
    //   build_id SERIAL PRIMARY KEY,
    //   user_id INT REFERENCES Users(user_id),
    //   typecomponents TEXT[] ,
    //   created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    // )
    // `;
  } catch (err) {
    console.log(err);
  }
}

app.use("/api/Components", productRoutes);

initDB().then(() => {
  console.log("Database initialized");
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
});

// LOGIN/REGISTER ROUTES

app.use("/register", createUser);

app.post("/register", createUser);
