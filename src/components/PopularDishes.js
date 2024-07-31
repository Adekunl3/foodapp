// src/components/PopularDishes.js
import React, { useState, useEffect } from 'react';

const PopularDishes = () => {
  const [dishes, setDishes] = useState([
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
          `https://pixabay.com/api/?key=45195783-dc7252106411285d94297f96b&q=food&image_type=photo&pretty=true&per_page=${dishes.length}`
        );
        const data = await response.json();

        const updatedDishes = dishes.map((dish, index) => ({
          ...dish,
          imgSrc: data.hits[index] ? data.hits[index].webformatURL : 'default-image-url.jpg',
        }));

        setDishes(updatedDishes);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [dishes.length]);

  return (
    <section className="p-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Order Our Popular Dishes</h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {dishes.map((dish, index) => (
          <div key={index} className="m-4">
            <img src={dish.imgSrc} alt={dish.name} className="object-cover w-64 h-64 rounded-lg shadow-md" />
            <h3 className="mt-2 text-xl font-semibold">{dish.name}</h3>
            <p className="text-red-600">{dish.price}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p>
          If you are looking for West African continental dishes, think about Jollof life. Nothing is more deserving than having healthy nutrition, essential for sustaining a healthy lifestyle and treats. Jollof life offers more than just Nigerian cuisine; we have a variety of sumptuous delicacies for your delight.
        </p>
        <button className="px-6 py-3 mt-4 text-white transition-colors bg-red-600 rounded-full hover:bg-red-700">
          Start Your Order
        </button>
      </div>
    </section>
  );
};

export default PopularDishes;
