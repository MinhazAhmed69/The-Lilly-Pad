import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { themeChange } from 'theme-change';
import Lottie from 'react-lottie';
import animationData from '../assets/Animation - 1734367893126.json';

const Navbar = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 flex items-center">
        {/* Lottie Animation */}
        <div className="w-16 h-16 mr-4">
          <Lottie options={defaultOptions} height={64} width={64} />
        </div>

        {/* Title */}
        <Link to="/" className="btn btn-ghost text-xl">The Lily Pad</Link>
      </div>

      {/* Mobile Navigation - Hamburger Dropdown */}
      <div className="md:hidden flex-none z-10">
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Open drawer button */}
            <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost">
              <GiHamburgerMenu />
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content with navigation links */}
              <li><Link to="/" className="btn btn-ghost">Home</Link></li>
              <li><Link to="/menu" className="btn btn-ghost">Menu</Link></li>
              <li><Link to="/contact" className="btn btn-ghost">Cart</Link></li>
              <li><Link to="/about" className="btn btn-ghost">About</Link></li>
              <li><Link to="/profile" className="btn btn-ghost">Profile</Link></li>

              {/* Theme select */}
              <li>
                <Link to="/login" className="btn btn-ghost w-full">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="btn btn-ghost w-full">Sign Up</Link>
              </li>
              <li>
                <select data-choose-theme className="btn w-full">
                  <option value="lemonade">Lemonade</option>
                  <option value="coffee">Coffee</option>
                  <option value="valentine">Valentine</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation Links (visible on desktop) */}
      <div className="hidden md:flex">
        <Link to="/" className="btn btn-ghost">Home</Link>
        <Link to="/menu" className="btn btn-ghost">Menu</Link>
        <Link to="/contact" className="btn btn-ghost">Cart</Link>
        <Link to="/about" className="btn btn-ghost">Contact Us</Link>
        {/* Theme select */}
        <Link to="/login" className="btn btn-ghost ml-2">Login</Link>
        <Link to="/signup" className="btn btn-ghost ml-2">Sign Up</Link>
        <Link to="/profile" className="btn btn-ghost">Profile</Link>
        <select data-choose-theme className="btn hidden lg:block">
          <option value="valentine">Valentine</option>
          <option value="lemonade">Lemonade</option>
          <option value="coffee">Coffee</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;