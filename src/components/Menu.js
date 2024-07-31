// src/components/Menu.js
import React, { useState, useEffect } from 'react';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([
    { name: "Rice with Turkey (2pc)", price: "$19.00", imgSrc: "" },
    { name: "Goatmeat Pepper Soup", price: "$18.00", imgSrc: "" },
    { name: "Fried Rice, Plantain, Croaker Fish 2 pcs", price: "$24.00", imgSrc: "" },
    { name: "Ewedu (Gbegiri)", price: "$22.00", imgSrc: "" },
    { name: "Ayamase", price: "$22.00", imgSrc: "" },
  ]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=45195783-dc7252106411285d94297f96b&q=food&image_type=photo&pretty=true&per_page=${menuItems.length}`
        );
        const data = await response.json();
        const updatedMenuItems = menuItems.map((item, index) => ({
          ...item,
          imgSrc: data.hits[index] ? data.hits[index].webformatURL : 'default-image-url.jpg',
        }));
        setMenuItems(updatedMenuItems);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="p-8">
      <h2 className="mb-8 text-3xl font-bold text-center">Our Menu</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item, index) => (
          <div key={index} className="p-4 bg-white rounded shadow-lg">
            <img src={item.imgSrc} alt={item.name} className="object-cover w-full h-48 rounded" />
            <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>
            <p className="mt-2 text-red-600">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
