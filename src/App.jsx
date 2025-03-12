import React from "react";
import Logo from "./Components/Logo/logo";
import Navbar from "./Components/Navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Destinations from "./Pages/Destinations/Destinations";
import Triptypes from "./Pages/Triptypes/Trips";
import ContactUs from "./Pages/Contact-us/Contact";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";





function App() {
  return (
    <>
      <header className="header">
        <div className="header-container">
        <Logo />
        <Navbar />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/triptypes" element={<Triptypes />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Newsletter />
      <Footer/>
    </>
  );
}

export default App;
