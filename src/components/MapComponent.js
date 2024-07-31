// src/components/MapComponent.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 49.8951,  // Latitude for Manitoba, CA
  lng: -97.1384  // Longitude for Manitoba, CA
};

const MapComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAGF6gqTYlO3OKWI-Zw43_uS8QyhYxCS28" // Your Google Maps API key
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        mapTypeId="satellite" // Use 'satellite' view for 3D terrain
        options={{
          tilt: 45, // Tilt the map to view buildings in 3D
        }}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
