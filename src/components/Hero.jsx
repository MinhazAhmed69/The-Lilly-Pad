import React from 'react';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import { useNavigate } from 'react-router-dom';
import animationData from '../assets/Animation - 1731218580905.json';

const Hero = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  return (
    <div className="bg-base-100 text-base-content min-h-screen flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col md:flex-row items-center w-full max-w-6xl"
      >
        {/* Left Side - Hero Text Content */}
        <div className="flex-1 md:pr-16 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Welcome to The Lily Pad
          </h1>
          <p className="text-xl text-gray-600 max-w-lg">
            Discover our wide selection of delicious and carefully crafted dishes. Whether you're
            looking for a quick bite or a gourmet meal, we have something for every taste.
          </p>
          <button
            className="mt-8 px-6 py-3 bg-primary text-white text-lg rounded-lg shadow-lg"
            onClick={() => navigate('/menu')} // Navigate to the Menu component
          >
            Explore Menu
          </button>
        </div>

        {/* Right Side - Lottie Animation */}
        <div className="flex-1 mt-8 md:mt-0 flex justify-center md:justify-end">
          <div className="w-full sm:w-3/4 lg:w-full">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;