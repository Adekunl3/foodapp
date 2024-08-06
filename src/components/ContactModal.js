// src/components/ContactModal.js
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { CSSTransition } from 'react-transition-group';
import './ContactModal.css'; // Import the CSS for animations

const ContactModal = ({ isOpen, onClose }) => {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m7r43hf', 'template_xm565rj', form.current, 'FapqSYZdC4mVrP9DJ')
      .then(
        () => {
          setShowSuccessMessage(true);
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-full h-auto max-w-2xl p-8 bg-white rounded shadow-lg">
          <button onClick={onClose} className="absolute text-2xl top-4 right-4">&times;</button>
          <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input type="text" name="user_name" className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input type="email" name="user_email" className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Message</label>
              <textarea name="message" className="w-full p-2 border rounded" required></textarea>
            </div>
            <div className="flex justify-end">
              <button type="button" className="px-4 py-2 text-white bg-orange-500 rounded" onClick={onClose}>Close</button>
              <button type="submit" className="px-4 py-2 ml-4 text-white bg-green-500 rounded">Send</button>
            </div>
          </form>
          {showSuccessMessage && (
            <div className="mt-4 text-green-500">
              Thank you! Your message has been sent.
            </div>
          )}
        </div>
      </div>
    </CSSTransition>
  );
};

export default ContactModal;
