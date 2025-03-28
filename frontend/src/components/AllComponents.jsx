import React, { useState, useEffect } from "react";
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

const AllComponents = () => {
  const [components, setComponents] = useState([]);
  const [selectedType, setSelectedType] = useState("CPU");
  const [loading, setLoading] = useState(false);

  // Fetch component data from API
  const fetchComponentData = async (type) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/API/${type}`);
      const result = response.data;

      if (result.success) {
        setComponents(result.data);
      } else {
        console.error("Error fetching component data:", result.message);
        setComponents([]);
      }
    } catch (error) {
      console.error("Error fetching component data:", error);
      setComponents([]);
    }
    setLoading(false);
  };

  // Fetch data on component type change
  useEffect(() => {
    fetchComponentData(selectedType);
  }, [selectedType]);

  return (
    <div className="flex h-screen">
      {/* Admin Sidebar */}
      <AdminSideBar />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          All {selectedType} Components
        </h1>

        {/* Dropdown to Select Component Type */}
        <div className="mb-6">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 border rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {componentTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Display Table */}
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : components.length === 0 ? (
          <p className="text-center text-red-500">No {selectedType} found!</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">Product ID</th>
                  <th className="border p-2">Description</th>
                  <th className="border p-2">Socket</th>
                  <th className="border p-2">Watts</th>
                  <th className="border p-2">Price</th>
                  <th className="border p-2">Manufacturer ID</th>
                </tr>
              </thead>
              <tbody>
                {components.map((component, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border p-2 text-center">
                      {component.ProductID}
                    </td>
                    <td className="border p-2 text-center">
                      {component.Description}
                    </td>
                    <td className="border p-2 text-center">
                      {component.Socket || "N/A"}
                    </td>
                    <td className="border p-2 text-center">
                      {component.Watts || "N/A"}W
                    </td>
                    <td className="border p-2 text-center">
                      ${component.Price}
                    </td>
                    <td className="border p-2 text-center">
                      {component.ManID}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllComponents;
