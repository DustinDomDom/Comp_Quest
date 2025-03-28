import React from "react";
import AdminSideBar from "../components/adminSideBar";

const Admin = () => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Admin Sidebar */}
      <AdminSideBar />

      {/* Main Content Area */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Admin Dashboard
        </h1>
        <div className="mt-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <p className="text-gray-600 dark:text-gray-300">
            Welcome to the Admin Dashboard. Here, you can manage all aspects of
            the system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
