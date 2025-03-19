import { sql } from "../config/db.js";

// Created a new function called getallProducts
export const getallProductsOption = async (req, res) => {
  try {
    const products = await sql`SELECT * FROM component`;

    console.log("products fetched successfully");

    res.status(200).json({ success: true, data: products });
  } catch (err) {
    console.log(err);
  }
};

export const getProductByComponentType = async (req, res) => {
  const { type } = req.params;

  switch (type) {
    case "CPU":
      try {
        const productID = await sql`
      SELECT * FROM CPU;
    `;
        res.status(200).json({ success: true, data: productID });
      } catch (err) {
        console.log(err);
      }
    case "GPU":
      try {
        const productID = await sql`
      SELECT * FROM GPU;
    `;
        res.status(200).json({ success: true, data: productID });
      } catch (err) {
        console.log(err);
      }
    case "PSU":
      try {
        const productID = await sql`
      SELECT * FROM PSU;
    `;
        res.status(200).json({ success: true, data: productID });
      } catch (err) {
        console.log(err);
      }
    case "MEMORY":
      try {
        const productID = await sql`
      SELECT * FROM MEMORY;
    `;
        res.status(200).json({ success: true, data: productID });
      } catch (err) {
        console.log(err);
      }
    case "MONITOR":
      try {
        const productID = await sql`
      SELECT * FROM MONITOR;
    `;
        res.status(200).json({ success: true, data: productID });
      } catch (err) {
        console.log(err);
      }
    case "MOTHERBOARD":
      try {
        const productID = await sql`
      SELECT * FROM MOTHERBOARD;
    `;
        res.status(200).json({ success: true, data: productID });
      } catch (err) {
        console.log(err);
      }
    case "STORAGE":
      try {
        const productID = await sql`
      SELECT * FROM STORAGE;
    `;
        res.status(200).json({ success: true, data: productID });
      } catch (err) {
        console.log(err);
      }
    case "CPU_COOLER":
      try {
        const productID = await sql`
      SELECT * FROM CPU_COOLER;
    `;
        res.status(200).json({ success: true, data: productID });
      } catch (err) {
        console.log(err);
      }
    default:
      return res
        .status(400)
        .json({ success: false, message: "Invalid component type" });
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
