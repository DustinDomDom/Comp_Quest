import { sql } from "../config/db.js";

export const createUser = async (req, res) => {
  const { UserID, Fname, Lname, Email, Password, UserType } = req.body;

  // Validate required fields
  if (!UserID || !Fname || !Lname || !Email || !Password || !UserType) {
    return res
      .status(400)
      .json({ message: "All fields are required!", success: false });
  }

  try {
    // Insert new user into the database
    const userCreated = await sql`
      INSERT INTO "User" (UserID, Lname, Fname, Email, Password, UserType)
      VALUES (${UserID}, ${Lname}, ${Fname}, ${Email}, ${Password}, ${UserType})
      RETURNING *`;

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
      SELECT user_id, email, password_hash, role FROM Users WHERE email = ${email}
    `;

    if (result.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = result[0];

    // Verify the password
    if (password !== user.password_hash) {
      return res.status(400).json({ error: "Invalid password" });
    }

    // Return user data (excluding password)
    res.json({ user_id: user.user_id, email: user.email, role: user.role });
  } catch (err) {
    console.error("Error logging in:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const editUser = async (req, res) => {};

export const deleteUser = async (req, res) => {};
