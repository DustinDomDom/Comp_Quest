import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // User icon for the logged-in user

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Change to true for testing logged-in state
  const [role, setRole] = useState("user");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // To toggle the dropdown

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    localStorage.removeItem("role"); // Remove the role from localStorage
    setIsLoggedIn(false); // Update state to logged out
    navigate("/login"); // Redirect to login page
  };

  useEffect(() => {
    const token = localStorage.getItem("token"); // Get the token from localStorage
    const storedRole = localStorage.getItem("role"); // Get the role from localStorage
    if (token && storedRole) {
      setIsLoggedIn(true); // User is logged in
      setRole(storedRole); // Set user role
    }
  }, []);

  return (
    <header className="bg-DarkBlue">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/Home">
            <span className="sr-only">Comp. Studio</span>
            <img className="h-16 w-auto relative" src={Logo} alt="Logo" />
          </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-md/6 font-semibold text-white">
            Community
          </a>
          <a href="#" className="text-md/6 font-semibold text-white">
            FAQs
          </a>
          <a href="#" className="text-md/6 font-semibold text-white">
            Contact Us
          </a>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-6">
          {isLoggedIn ? (
            // Logged-in user view
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown
                className="text-white flex items-center"
              >
                <FaUserCircle className="text-2xl mr-2" /> {/* User icon */}
                <span className="font-semibold">Profile</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg w-40 py-2">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                  <Link
                    to="/UserPanel"
                    className="block text-left px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                </div>
              )}
            </div>
          ) : (
            // Not logged in view
            <a
              href="/Login"
              className="text-md/6 font-semibold text-white flex items-center"
            >
              Log in <FaArrowRight className="ml-2" />
            </a>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
