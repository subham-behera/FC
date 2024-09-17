import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <img src="https://cdn.freebiesupply.com/images/large/2x/manchester-city-logo-png-transparent.png" alt="Logo" className="h-8" />
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaFacebookF className="text-xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
            <FaTwitter className="text-xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
            <FaInstagram className="text-xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
            <FaLinkedinIn className="text-xl" />
          </a>
        </div>
        <div className="h-8 border-l-2 border-gray-800 mx-6"></div>
        <div className="flex items-center space-x-6">
          <span className="font-bold text-gray-800">SPONSORS</span>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn21167BuRCwvo4amdA104Ndutf-qkQQqWog&s" alt="Sponsor 1" className="h-8" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRz9F9iyV0osDRu5ZhX1t32sCsPgQTfiokw&s" alt="Sponsor 2" className="h-8" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq9knjRAorVsFbd5CAvAFFEWB9ukrkQdiYPQ&s" alt="Sponsor 3" className="h-8" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
