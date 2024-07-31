// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [foodImage, setFoodImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=45195783-dc7252106411285d94297f96b&q=food&image_type=photo&pretty=true`
        );
        const data = await response.json();
        // Choose a random image from the results
        const randomImage = data.hits[Math.floor(Math.random() * data.hits.length)];
        setFoodImage(randomImage.webformatURL);
      } catch (error) {
        console.error('Error fetching the image:', error);
      }
    };
    fetchImage();
  }, []);

  const handleViewMenu = () => {
    navigate('/menu');
  };

  return (
    <section className="relative p-8 text-white ">
      {foodImage && <img src={foodImage} alt="Food" className="object-cover w-full h-96" />}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold">Order your favourite food here</h1>
        <p className="max-w-md mt-4 text-center">
          Choose from a diverse menu featuring a delectable array of dishes created with the finest ingredients and culinary expertise.
          Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <button onClick={handleViewMenu} className="px-4 py-2 mt-6 font-semibold text-orange-500 bg-white rounded hover:bg-red-500 hover:text-white hover:rounded-full">View Menu</button>
      </div>
    </section>
  );
};

export default Hero;
