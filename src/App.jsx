import React from "react";
import Logo from "./Components/Logo/logo";
import Navbar from "./Components/Navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Destinations from "./Pages/Destinations/Destinations";
import Triptypes from "./Pages/Triptypes/Trips";
import ContactUs from "./Pages/Contact-us/Contact";

function App() {
  return (
    <>
      <Logo />
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/triptypes" element={<Triptypes />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <h1>Welcome to Zaph Tours</h1>
    </>
  );
}

export default App;
