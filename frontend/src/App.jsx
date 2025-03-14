import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Build from "./pages/build";
import Question from "./pages/Question";
import Errornotif from "./components/errornotif";
import Login from "./pages/login";
import Register from "./pages/register";
import UserPanel from "./pages/UserPanel";
import Admin from "./pages/Admin";
import React from "react";

function App() {
  const isAuth = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route
          path="/UserPanel"
          element={!role ? <Errornotif /> : <UserPanel />}
        />

        <Route
          path="/Admin"
          element={role === "admin" ? <Admin /> : <Errornotif />}
        />

        <Route
          path="/Build"
          element={isAuth && role === "user" ? <Build /> : <Errornotif />}
        />

        <Route path="/FAQ" element={<Question />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
