// src/components/ContactModal.js
import React from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-8 bg-white rounded shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Message</label>
            <textarea className="w-full p-2 border rounded"></textarea>
          </div>
          <div className="flex justify-end">
            <button type="button" className="px-4 py-2 text-white bg-orange-500 rounded" onClick={onClose}>Close</button>
            <button type="submit" className="px-4 py-2 ml-4 text-white bg-green-500 rounded">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
