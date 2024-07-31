// src/components/Header.js
import React, { useState } from 'react';

const Header = ({ setIsModalOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full p-4 text-gray-700 bg-white shadow-md">
      <div className="text-2xl font-bold text-red-600">Michael's Food</div>
      <button
        className="block text-gray-700 md:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
        </svg>
      </button>
      <nav className="hidden space-x-4 md:flex">
        <a href="/" className="block px-4 py-2 text-xl font-semibold hover:underline hover:text-red-600">HOME</a>
        <a href="/Menu" className="block px-4 py-2 text-lg hover:text-red-500">menu</a>
        <a href="/Location" className="block px-4 py-2 text-lg hover:text-red-500">location</a>
        <button className="block px-4 py-2 text-lg hover:text-red-500" onClick={() => setIsModalOpen(true)}>contact us</button>
      </nav>
      <div className="hidden space-x-4 md:block">
        <button className="text-gray-700">sign in</button>
        <button className="text-gray-700">🛒</button>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-full bg-gray-400 bg-opacity-90 text-white font-semibold transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-200 ease-in-out md:hidden z-40`}
      >
        <button
          className="absolute text-gray-700 top-4 right-4 focus:outline-none"
          onClick={closeMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <a href="#" onClick={closeMenu} className="block px-4 py-2 text-2xl transition-transform duration-300 ease-in-out transform hover:scale-105">home</a>
          <a href="#" onClick={closeMenu} className="block px-4 py-2 text-2xl transition-transform duration-300 ease-in-out transform hover:scale-105">menu</a>
          <a href="#" onClick={closeMenu} className="block px-4 py-2 text-2xl transition-transform duration-300 ease-in-out transform hover:scale-105">blog</a>
          <button onClick={() => { setIsModalOpen(true); closeMenu(); }} className="block px-4 py-2 text-2xl transition-transform duration-300 ease-in-out transform hover:scale-105">contact us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
