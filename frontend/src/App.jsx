import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Build from "./pages/build";
import FAQ from "./pages/FAQ";
import Errornotif from "./components/errornotif";
import Login from "./pages/login";
import Register from "./pages/register";
import UserPanel from "./pages/UserPanel";
import Admin from "./pages/Admin";
import React from "react";
import Contact from "./pages/Contact";

function App() {
  const isAuth = localStorage.getItem("userid");
  const role = localStorage.getItem("user");

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route
          path="/UserPanel"
          element={!role ? <Errornotif /> : <UserPanel />}
        /> */}

        <Route
          path="/Admin"
          element={role === "admin" ? <Admin /> : <Errornotif />}
        />

        <Route
          path="/Build"
          element={isAuth && role === "User" ? <Build /> : <Errornotif />}
        />

        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/Login"
          element={!isAuth && !role ? <Login /> : <Errornotif />}
        />
        <Route
          path="/Register"
          element={!isAuth && !role ? <Register /> : <Errornotif />}
        />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
