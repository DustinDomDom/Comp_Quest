import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminSideBar from "./adminSideBar";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all orders from the backend
  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:3000/order/AllOrders");
      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        console.error("Error fetching orders:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <section className="container px-4 mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 my-6">
        Admin - Order Information
      </h2>

      {loading ? (
        <p className="text-center text-lg">Loading orders...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-700 uppercase">
                  Order ID
                </th>
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-700 uppercase">
                  User ID
                </th>
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-700 uppercase">
                  Component
                </th>
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-700 uppercase">
                  Description
                </th>
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-700 uppercase">
                  Price
                </th>
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-700 uppercase">
                  Quantity
                </th>
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-700 uppercase">
                  Total
                </th>
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-700 uppercase">
                  Order Date
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center py-4 text-gray-500">
                    No orders found.
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order.orderID} className="border-b">
                    <td className="py-2 px-4 text-sm text-gray-700">
                      {order.orderID}
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-700">
                      {order.userID}
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-700">
                      {order.componentType}
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-700">
                      {order.componentDescription}
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-700">
                      ${parseFloat(order.price).toFixed(2)}
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-700">
                      {order.quantity}
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-700">
                      ${parseFloat(order.total).toFixed(2)}
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-700">
                      {new Date(order.orderDate).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default AdminOrders;
