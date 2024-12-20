import React, { useState, useRef } from 'react';
import { useCart } from '../components/CartContext';
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import animationData1 from "../assets//Animation - 1731262377297.json"; // Replace with your Lottie JSON file path

const Cart = () => {
  const { cart, clearCart } = useCart();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const lottieRef = useRef(); // Reference for the Lottie animation

  // Calculate the total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleOrderNow = () => {
    setIsOrderPlaced(true);
    clearCart(); // Clear the cart after placing the order
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">No items in the cart.</p>
        ) : (
          <div>
            <ul className="divide-y divide-gray-200">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between py-4">
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">{`Quantity: ${item.quantity}`}</p>
                  </div>
                  <p className="text-lg font-bold text-gray-700">{`₹${item.price * item.quantity}`}</p>
                </li>
              ))}
            </ul>

            {/* Total Price Box */}
            <div className="bg-gray-50 p-6 mt-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center font-semibold text-lg">
                <p className="text-gray-700">Total:</p>
                <p className="text-gray-700">{`₹${totalPrice}`}</p>
              </div>
            </div>

            {/* Buttons for clearing the cart and placing the order */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={clearCart}
                className="px-6 py-2 rounded-md text-white bg-pink-400 hover:bg-pink-500 transition"
              >
                Clear Cart
              </button>
              <button
                onClick={handleOrderNow}
                className="px-6 py-2 rounded-md text-white bg-pink-600 hover:bg-pink-700 transition"
              >
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Confirmation Prompt */}
      {isOrderPlaced && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Order Confirmed!</h2>
            <p className="text-gray-700 mb-4">Thank you for your order. It will be processed shortly.</p>
            <button
              onClick={() => setIsOrderPlaced(false)}
              className="px-4 py-2 rounded-md text-white bg-red-600 hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Bottom Right Lottie Animation */}
     {/* Bottom Right Lottie Animation */}
<motion.div
  initial={{ y: 0 }}
  animate={{ y: [0, -10, 0] }} // Smooth up-and-down movement
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="fixed bottom-0 right-0 w-[600px] h-[600px] pointer-events-none" // Increased size
>
  <Lottie
    lottieRef={lottieRef}
    animationData={animationData1}
    loop={true} // Enables continuous playback
  />
</motion.div>
    </div>
  );
};

export default Cart; 