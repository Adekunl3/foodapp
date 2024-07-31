// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactModal from './components/ContactModal';
import PopularDishes from './components/PopularDishes';
import Menu from './components/Menu';
import WhatsappIcon from './components/WhatsappIcon';
import StoreLocation from './pages/store-location'; // Import the StoreLocation component

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header setIsModalOpen={setIsModalOpen} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/location" element={<StoreLocation />} /> {/* Add the route for the location page */}
        </Routes>
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <PopularDishes />
        <WhatsappIcon />
      </div>
    </Router>
  );
}

export default App;
