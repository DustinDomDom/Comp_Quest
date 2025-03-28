import { sql } from "../config/db.js";

export const userOrder = async (req, res) => {
  const { userID, components, totalPrice, orderDate } = req.body;

  if (!userID || !components || !totalPrice) {
    return res.status(400).json({ success: false, message: "Invalid data." });
  }

  try {
    // Prepare queries to insert each selected component
    const queries = Object.keys(components).map((key) => {
      return sql`
        INSERT INTO Orders (userID, componentType, componentDescription, price, quantity, total, orderDate)
        VALUES (
          ${userID}, 
          ${key}, 
          ${components[key].Description}, 
          ${parseFloat(components[key].Price)}, 
          1, 
          ${parseFloat(components[key].Price)}, 
          ${orderDate || new Date().toISOString()}
        )
      `;
    });

    // Execute all queries asynchronously
    await Promise.all(queries);

    res.status(200).json({
      success: true,
      message: "Order placed successfully!",
    });
  } catch (error) {
    console.error("❌ Error inserting order:", error);
    res.status(500).json({
      success: false,
      message: "Error placing order.",
    });
  }
};

export const confirmOrder = async (req, res) => {
  try {
    // Fetch all orders with user details
    const result = await sql`
      SELECT 
        o.orderID,
        o.userID,
        u.username,
        u.email,
        o.componentType,
        o.componentDescription,
        o.price,
        o.quantity,
        o.total,
        o.orderDate
      FROM orders o
      JOIN users u ON o.userID = u.userID
      ORDER BY o.orderDate DESC;
    `;

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("❌ Error fetching orders:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching orders.",
    });
  }
};

export const modifyOrder = async (req, res) => {};
