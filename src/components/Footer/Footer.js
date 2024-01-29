// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-11 mt-5">
      <div className="flex flex-wrap justify-around">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
          <h3 className="text-yellow-500 text-lg font-bold mb-4">Company</h3>
          <ul>
            <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Our Team</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
          <h3 className="text-yellow-500 text-lg font-bold mb-4">Support</h3>
          <ul>
            <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Customer Support</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
          <h3 className="text-yellow-500 text-lg font-bold mb-4">Services</h3>
          <ul>
            <li><a href="#" className="text-gray-300 hover:text-white">Web Design</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Digital Marketing</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Consulting</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
          <h3 className="text-yellow-500 text-lg font-bold mb-4">Get In Touch</h3>
          <ul>
            <li>Email: <a href="mailto:info@example.com" className="text-gray-300 hover:text-white">Kazam@example.com</a></li>
            <li>Phone: +1 (123) 456-7890</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
