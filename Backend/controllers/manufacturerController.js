import { sql } from "../config/db.js";

// Create Manufacturer
export const createManufacturer = async (req, res) => {
  const { man_name } = req.body;

  try {
    const [manCreated] = await sql`
      INSERT INTO manufacturer (man_name)
      VALUES (${man_name})
      RETURNING *
    `;

    console.log("Manufacturer created successfully");

    res.status(201).json({ success: true, data: manCreated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Delete Manufacturer
export const deleteManufacturer = async (req, res) => {
  const { manid } = req.params;

  try {
    const result = await sql`
      DELETE FROM manufacturer
      WHERE manid = ${manid}
    `;

    if (result.rowCount > 0) {
      res
        .status(200)
        .json({ success: true, message: "Manufacturer deleted successfully." });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Manufacturer not found." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Get All Manufacturers
export const getAllManufacturer = async (req, res) => {
  try {
    const manufacturers = await sql`
      SELECT * FROM manufacturer
    `;

    res.status(200).json({ success: true, data: manufacturers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
