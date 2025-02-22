import { sql } from "../config/db.js";

export const getallProducts = async (req, res) => {};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product =
      await sql`SELECT * FROM components WHERE componentname = ${id}`;

    res.status(200).json({ success: true, data: product });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// Created a new function called createProduct
export const createProduct = async (req, res) => {
  const { componentName, name, image } = req.body;
  console.log(req.body);

  if (!componentName || !name || !image) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  try {
    const componentCreated = await sql`
        INSERT INTO Test (componentName, image, name) 
        VALUES (${componentName}, ${image}, ${name})
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
