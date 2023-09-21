import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    // <header className="bg-blue-900 text-white shadow-lg ">
    <header className="bg-black  shadow-lg outline-none ">
    {/* // <header className="bg-blue-500 bg-opacity-50 p-4 text-white"> */}
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold  ml-8 text-white">
            E- Court
          </Link>
          <nav  className='mr-8'>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:underline text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/Judge" className="hover:underline text-white">
                 Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
