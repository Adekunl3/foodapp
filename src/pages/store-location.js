// src/pages/store-location.js
import React from 'react';
import MapComponent from '../components/MapComponent';

const StoreLocation = () => {
  return (
    <div className="p-8">
      <h1 className="mb-6 text-3xl font-bold text-center">Our Store Location</h1>
      <p className="mb-6 text-lg font-bold text-center text-red-600">
        Find us at our store location on the map below. We look forward to seeing you!
      </p>
      <div className="flex justify-center">
        <MapComponent />
      </div>
    </div>
  );
};

export default StoreLocation;
