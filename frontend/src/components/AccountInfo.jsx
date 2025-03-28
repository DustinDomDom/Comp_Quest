import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminSideBar from "./adminSideBar";

const AccountInfo = () => {
  const [accountData, setAccountData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch account information from API
  const fetchAccountData = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get("http://localhost:3000/user");
      const result = response.data;

      if (result.success) {
        setAccountData(result.data);
      } else {
        setError("Error fetching account data.");
      }
    } catch (error) {
      console.error("Error fetching account data:", error);
      setError("Failed to retrieve account information.");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchAccountData();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Admin Sidebar */}
      <AdminSideBar />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Account Information
        </h1>

        {/* Loading State */}
        {loading && <p className="text-blue-500">Loading account data...</p>}

        {/* Error State */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            ❌ {error}
          </div>
        )}

        {/* Account Data Table */}
        {!loading && !error && (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-200 shadow-lg bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-3 text-left">User ID</th>
                  <th className="border p-3 text-left">Last Name</th>
                  <th className="border p-3 text-left">First Name</th>
                  <th className="border p-3 text-left">Email</th>
                  <th className="border p-3 text-left">Password</th>
                  <th className="border p-3 text-left">User Type</th>
                  <th className="border p-3 text-left">Address</th>
                </tr>
              </thead>
              <tbody>
                {accountData.length > 0 ? (
                  accountData.map((account, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border p-3">{account.userid}</td>
                      <td className="border p-3">{account.lname}</td>
                      <td className="border p-3">{account.fname}</td>
                      <td className="border p-3">{account.email}</td>
                      <td className="border p-3">{account.password}</td>
                      <td className="border p-3">{account.usertype}</td>
                      <td className="border p-3">{account.address}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center p-4">
                      No account information found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountInfo;
