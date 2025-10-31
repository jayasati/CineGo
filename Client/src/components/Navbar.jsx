import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { MenuIcon, SearchIcon, XIcon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 bg-black/80 backdrop-blur-md">
      {/* Logo */}
      <Link to="/" className="max-md:flex-1">
        <img src={assets.logo} alt="QuickShow Logo" className="w-36 h-auto" />
      </Link>

      {/* Navigation Menu */}
      <div
        className={`${
          isOpen ? 'max-md:translate-x-0' : 'max-md:-translate-x-full'
        } 
        max-md:fixed max-md:top-0 max-md:left-0 max-md:w-full max-md:h-screen 
        bg-black/95 md:bg-transparent flex flex-col md:flex-row items-center 
        justify-center gap-8 md:static md:translate-x-0 transition-transform duration-300`}
      >
        {/* Close Icon (mobile only) */}
        <XIcon
          className="absolute top-6 right-6 w-6 h-6 text-white md:hidden cursor-pointer"
          onClick={() => setIsOpen(false)}
        />

        {/* Links */}
        <Link
          to="/"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
          className="text-white md:text-gray-200 hover:text-primary transition"
        >
          Home
        </Link>
        <Link
          to="/movies"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
          className="text-white md:text-gray-200 hover:text-primary transition"
        >
          Movies
        </Link>
        <Link
          to="/theaters"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
          className="text-white md:text-gray-200 hover:text-primary transition"
        >
          Theaters
        </Link>
        <Link
          to="/releases"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
          className="text-white md:text-gray-200 hover:text-primary transition"
        >
          Releases
        </Link>
        <Link
          to="/favourites"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
          className="text-white md:text-gray-200 hover:text-primary transition"
        >
          Favourites
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <SearchIcon className="max-md:hidden w-6 h-6 text-white cursor-pointer" />
        <button className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer text-white">
          Login
        </button>
        <MenuIcon
          className="max-md:ml-4 md:hidden w-8 h-8 text-white cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>
    </div>
  );
};

export default Navbar;
