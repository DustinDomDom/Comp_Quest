import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  const handleLogout = () => {
    navigate("/Home");
    localStorage.removeItem("userid"); // Remove the token from localStorage
    localStorage.removeItem("user"); // Remove the role from localStorage
  };

  return (
    <div>
      <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="-mx-3 space-y-6">
            {/* Modify & Edit Section */}
            <div className="space-y-3">
              <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                Modify & Edit Product
              </label>

              <Link
                to="/Admin/AllComponents"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700"
              >
                <span className="mx-2 text-sm font-medium">All Components</span>
              </Link>
              <Link
                to="/Admin/AllManufacturer"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700"
              >
                <span className="mx-2 text-sm font-medium">
                  All Manufacturer
                </span>
              </Link>

              <Link
                to="/Admin/AddProduct"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700"
              >
                <span className="mx-2 text-sm font-medium">Add Product</span>
              </Link>

              <Link
                to="/Admin/AddManufacturer"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700"
              >
                <span className="mx-2 text-sm font-medium">
                  Add Manufacturer
                </span>
              </Link>
            </div>

            {/* Account & Order Section */}
            <div className="space-y-3">
              <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                Account & Order Process
              </label>

              <Link
                to="/Admin/AccountInfo"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700"
              >
                <span className="mx-2 text-sm font-medium">
                  Account Information
                </span>
              </Link>

              <Link
                to="/Admin/OrderPending"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700"
              >
                <span className="mx-2 text-sm font-medium">Order Pending</span>
              </Link>

              <Link
                to="/Admin/OrderInfo"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700"
              >
                <span className="mx-2 text-sm font-medium">
                  Order Information
                </span>
              </Link>
            </div>

            <div className="space-y-3">
              <hr className="border-gray-300 dark:border-gray-700" />
              <button
                onClick={handleLogout}
                to="/Home"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-red-100 dark:hover:bg-gray-700 hover:text-red-500"
              >
                <span className="mx-2 text-sm font-medium">Logout</span>
              </button>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default AdminSideBar;
