// src/components/WhatsAppIcon.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsappIcon = () => {
  const whatsappLink = "https://wa.me/+2347030785345"; // Replace with your phone number

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed p-2 text-white bg-green-500 rounded-full shadow-md bottom-4 right-4 hover:bg-green-700"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </a>
  );
};

export default WhatsappIcon;
