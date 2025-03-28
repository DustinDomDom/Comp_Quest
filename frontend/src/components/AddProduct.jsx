import React, { useState } from "react";
import axios from "axios";
import AdminSideBar from "./adminSideBar";

const componentTypes = [
  "CPU",
  "GPU",
  "PSU",
  "MEMORY",
  "MONITOR",
  "MOTHERBOARD",
  "STORAGE",
  "CPU_COOLER",
];

const AddProduct = () => {
  const [formData, setFormData] = useState({
    type: "CPU",
    description: "",
    socket: "",
    watts: "",
    price: "",
    manID: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        `http://localhost:3000/API/AddProduct/${formData.type}`,
        {
          Description: formData.description,
          Socket: formData.socket,
          Watts: formData.watts || null,
          Price: parseFloat(formData.price),
          ManID: parseInt(formData.manID),
        }
      );

      if (response.data.success) {
        setMessage(`✅ ${formData.type} added successfully!`);
        setFormData({
          type: "CPU",
          description: "",
          socket: "",
          watts: "",
          price: "",
          manID: "",
        });
      } else {
        setMessage(`❌ Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      setMessage("❌ Failed to add product. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="flex h-screen">
      {/* Admin Sidebar */}
      <AdminSideBar />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Add New Product
        </h1>

        {/* Success/Error Message */}
        {message && (
          <div
            className={`mb-4 p-3 rounded ${
              message.startsWith("✅")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        {/* Product Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto"
        >
          {/* Select Component Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Component Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {componentTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Socket */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Socket (Optional)
            </label>
            <input
              type="text"
              name="socket"
              value={formData.socket}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Watts */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Power Consumption (Watts) (Optional)
            </label>
            <input
              type="number"
              name="watts"
              value={formData.watts}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Price ($)
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Manufacturer ID */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Manufacturer ID
            </label>
            <input
              type="number"
              name="manID"
              value={formData.manID}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full px-4 py-2 text-white rounded-lg ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
