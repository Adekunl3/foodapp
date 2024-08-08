// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PopularDishes from "./components/PopularDishes";
import Menu from "./components/Menu";
import WhatsappIcon from "./components/WhatsappIcon";
import ContactModal from "./components/ContactModal";
import MapComponent from "./components/Location";
import "./components/ContactModal.css"; // Import the CSS for animations
import Login from "./components/Login";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header setIsModalOpen={setIsModalOpen} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/store-location" element={<MapComponent />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        <PopularDishes />

        <WhatsappIcon />
      </div>
    </Router>
  );
}

export default App;
