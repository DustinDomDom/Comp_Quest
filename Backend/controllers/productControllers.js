import { sql } from "../config/db.js";

export const getallProducts = async (req, res) => {
  try {
    const products = await sql`SELECT * FROM components`;

    console.log(products);
    res.status(201).json({ success: true, data: products });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// Created a new function called createProduct
export const createProduct = async (req, res) => {
  const {
    component_id,
    component_type,
    name,
    image,
    manufacturer,
    price,
    wattage,
  } = req.body;
  console.log(req.body);

  if (
    !component_id ||
    !component_type ||
    !name ||
    !image ||
    !manufacturer ||
    !price ||
    !wattage
  ) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  try {
    const componentCreated = await sql`
        INSERT INTO Components (component_id, component_type, name, image, manufacturer, price, wattage) 
        VALUES (${component_id}, ${component_type}, ${image}, ${name}, ${manufacturer}, ${price}, ${wattage})
        RETURNING *`;

    console.log("product created successfully");

    res.status(201).json({ success: true, data: componentCreated });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: `Internal server error ${err}` });
  }
};

export const deleteProduct = async (req, res) => {};

export const updateProduct = async (req, res) => {};

export const getProductByComponentType = async (req, res) => {};
