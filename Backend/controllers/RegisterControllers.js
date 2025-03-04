import { sql } from "../config/db.js";

export const createUser = async (req, res) => {
  const { fname, lname, email, password_hash, street, city, state, zip } =
    req.body;

  if (
    !fname ||
    !lname ||
    !email ||
    !password_hash ||
    !street ||
    !city ||
    !state ||
    !zip
  ) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  try {
    const userCreated = await sql`
        INSERT INTO Users (fname, lname, email, password_hash, street, city, state, zip) 
        VALUES (${fname}, ${lname}, ${email}, ${password_hash}, ${street}, ${city}, ${state}, ${zip})
        RETURNING *`;

    console.log("user created successfully");

    res.status(201).json({ success: true, data: userCreated });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: `Internal server error ${err}` });
  }
};
