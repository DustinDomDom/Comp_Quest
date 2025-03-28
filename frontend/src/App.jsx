import { Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Build from "./pages/build";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Errornotif from "./components/errornotif";
import Login from "./pages/login";
import Register from "./pages/register";

import Admin from "./pages/Admin";
import AllComponents from "./components/AllComponents";
import AllManufacturer from "./components/AllManufacturer";
import AccountInfo from "./components/AccountInfo";
import AddManufacturer from "./components/AddManufacturer";
import OrderPending from "./components/OrderPending";

function App() {
  const isAuth = Boolean(localStorage.getItem("userid"));
  const role = localStorage.getItem("user");
  const isGuest = !isAuth && !role;

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />

          {/* Admin Routes */}
          <Route
            path="/Admin"
            element={role === "admin" ? <Admin /> : <Errornotif />}
          />
          <Route
            path="/Admin/AllComponents"
            element={role === "admin" ? <AllComponents /> : <Errornotif />}
          />
          <Route
            path="/Admin/AllManufacturer"
            element={role === "admin" ? <AllManufacturer /> : <Errornotif />}
          />
          <Route
            path="/Admin/AccountInfo"
            element={role === "admin" ? <AccountInfo /> : <Errornotif />}
          />
          <Route
            path="/Admin/OrderPending"
            element={role === "admin" ? <OrderPending /> : <Errornotif />}
          />
          <Route
            path="/Admin/AddManufacturer"
            element={role === "admin" ? <AddManufacturer /> : <Errornotif />}
          />

          {/* Authenticated User Route */}

          <Route
            path="/Build"
            element={isAuth && role === "user" ? <Build /> : <Errornotif />}
          />

          {/* Public Routes */}
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={isGuest ? <Login /> : <Errornotif />} />
          <Route
            path="/Register"
            element={isGuest ? <Register /> : <Errornotif />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
