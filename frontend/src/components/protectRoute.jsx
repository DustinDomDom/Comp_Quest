import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = () => {
  const isAuth = !!localStorage.getItem("token");
  return isAuth ? <Outlet /> : <Navigate to="/Login" />;
};

export default ProtectRoute;
