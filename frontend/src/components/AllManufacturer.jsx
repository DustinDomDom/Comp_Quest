import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminSideBar from "./adminSideBar";

const AllManufacturer = () => {
  const [manufacturers, setManufacturers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all manufacturers
  const fetchManufacturers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/manufacturer");
      if (response.data.success) {
        setManufacturers(response.data.data);
        setLoading(false);
      } else {
        setError("Failed to fetch manufacturers.");
        setLoading(false);
      }
    } catch (err) {
      console.error("Error fetching manufacturers:", err);
      setError("Internal server error. Try again later.");
      setLoading(false);
    }
  };

  // Handle manufacturer delete
  const handleDelete = async (manid) => {
    if (window.confirm("Are you sure you want to delete this manufacturer?")) {
      try {
        const response = await axios.delete(
          `http://localhost:3000/manufacturer/${manid}`
        );

        if (response.data.success) {
          alert("Manufacturer deleted successfully.");
          fetchManufacturers(); // Refresh the list after delete
        } else {
          alert("Failed to delete manufacturer.");
        }
      } catch (err) {
        console.error("Error deleting manufacturer:", err);
        alert("Internal server error. Try again later.");
      }
    }
  };

  // Load manufacturers on component mount
  useEffect(() => {
    fetchManufacturers();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Admin Sidebar */}
      <AdminSideBar />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          All Manufacturers
        </h1>

        {/* Loading Spinner */}
        {loading && <p className="text-lg text-gray-700">Loading...</p>}

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Manufacturer Table */}
        {!loading && !error && (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="w-full table-auto">
              <thead className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                <tr>
                  <th className="py-3 px-6 text-left">Manufacturer ID</th>
                  <th className="py-3 px-6 text-left">Manufacturer Name</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {manufacturers.map((manufacturer) => (
                  <tr
                    key={manufacturer.manid}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6">{manufacturer.manid}</td>
                    <td className="py-3 px-6">{manufacturer.man_name}</td>
                    <td className="py-3 px-6 text-center">
                      <button
                        onClick={() => handleDelete(manufacturer.manid)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* No data available */}
            {manufacturers.length === 0 && (
              <div className="p-4 text-center text-gray-500">
                No manufacturers found.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllManufacturer;
