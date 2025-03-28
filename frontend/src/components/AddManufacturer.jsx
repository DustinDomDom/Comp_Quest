import React, { useState } from "react";
import axios from "axios";
import AdminSideBar from "./adminSideBar";

const AddManufacturer = () => {
  const [manName, setManName] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Submit manufacturer data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!manName) {
      setError("Manufacturer name cannot be empty.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/Manufacturer/New",
        { man_name: manName }
      );

      if (response.data.success) {
        setSuccess("✅ Manufacturer added successfully!");
        setManName(""); // Clear input
      } else {
        setError("❌ Failed to add manufacturer.");
      }
    } catch (err) {
      console.error("Error adding manufacturer:", err);
      setError("❌ Internal server error. Try again later.");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Admin Sidebar */}
      <AdminSideBar />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Add Manufacturer
        </h1>

        {/* Success Message */}
        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
            {success}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Manufacturer Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Manufacturer Name:
            </label>
            <input
              type="text"
              value={manName}
              onChange={(e) => setManName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter manufacturer name"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Add Manufacturer
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddManufacturer;
