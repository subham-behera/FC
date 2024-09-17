import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaUserAlt } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative" style={{ backgroundImage: 'url(https://www.mancity.com/meta/media/nmpfxv2w/li105295-f-1920x1080-c8b9678.jpg?width=1136)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      {/* Overlay for dimming the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative bg-white bg-opacity-90 backdrop-blur-sm p-10 rounded-lg shadow-xl w-full max-w-md">
        {/* Club logo */}
        <div className="flex justify-center mb-6">
          <img src="https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg" alt="Club Logo" className="w-20 h-20" />
        </div>
        
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Member Log In</h2>
        
        <form noValidate>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              aria-label="Email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              aria-label="Password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300"
          >
            Log In
          </button>
        </form>

        {/* Social login */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">or log in with</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://facebook.com" aria-label="Log in with Facebook" className="text-blue-700 hover:text-blue-900 transition">
              <FaFacebookF className="text-2xl" />
            </a>
            <a href="https://twitter.com" aria-label="Log in with Twitter" className="text-blue-400 hover:text-blue-600 transition">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://google.com" aria-label="Log in with Google" className="text-red-500 hover:text-red-700 transition">
              <FaGoogle className="text-2xl" />
            </a>
            <a href="#" aria-label="Log in as Guest" className="text-gray-700 hover:text-gray-900 transition">
              <FaUserAlt className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Forgot password and sign up */}
        <div className="mt-6 text-center">
          <a href="#" className="text-blue-600 hover:text-blue-800 transition">Forgot password?</a>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-700">Don't have an account? <a href="#" className="text-blue-600 hover:text-blue-800 transition">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
