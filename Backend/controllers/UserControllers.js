import { sql } from "../config/db.js";

export const createUser = async (req, res) => {
  const { userid, lname, fname, email, password, usertype, address } = req.body;

  // Validate required fields
  if (
    !userid ||
    !lname ||
    !fname ||
    !email ||
    !password ||
    !usertype ||
    !address
  ) {
    return res
      .status(400)
      .json({ message: "All fields are required!", success: false });
  }

  try {
    const userCreated = await sql`
      INSERT INTO useraccount (userid, lname, fname, email, password, usertype, address)
      VALUES (${userid}, ${lname}, ${fname}, ${email}, ${password}, ${usertype}, ${address}) RETURNING *`;

    console.log("User created successfully");

    res.status(201).json({ success: true, data: userCreated });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: `Internal server error ${err}` });
  }
};

export const getUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    // Find the user by email
    const result = await sql`
      SELECT userID, email, password, usertype FROM useraccount WHERE email = ${email}
    `;

    if (result.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = result[0];

    // Verify the password
    if (password !== user.password) {
      return res.status(400).json({ error: "Invalid password" });
    }

    // Return user data (excluding password)
    res.json({ user_id: user.userid, email: user.email, role: user.usertype });
  } catch (err) {
    console.error("Error logging in:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const editUser = async (req, res) => {};

export const deleteUser = async (req, res) => {};
