import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return(
    <nav className="bg-white border-b-2 border-gray-800 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="Adidas_logo.svg" alt="Logo 1" className="h-8" />
          <div className="h-8 border-l-2 border-gray-800"></div>
          <img src="https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg" alt="Logo 2" className="h-10" />
        </div>
        <ul className="flex space-x-8 text-lg font-semibold">
          <li className="hover:text-blue-400"><Link to="/">Home</Link></li>
          <li className="hover:text-blue-400"><Link to="/news">News</Link></li>
          <li className="hover:text-blue-400"><Link to="/team">Players</Link></li>
          <li className="hover:text-blue-400"><Link to="/fixtures">Fixtures</Link></li>
          <li className="hover:text-blue-400"><a href="https://insider.in/football-in-online">Tickets</a></li>
        </ul>
        <div className="flex items-center space-x-8">
          <Link to="/shopping"><FaShoppingCart className="text-xl text-gray-800" /></Link>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"><Link to="/login">Sign In</Link></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
