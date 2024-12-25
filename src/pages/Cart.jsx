import React, { useState, useRef } from 'react';
import { useCart } from '../components/CartContext';
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import animationData1 from "../assets/Animation - 1731262377297.json"; // Replace with your Lottie JSON file path

const Cart = () => {
  const { cart, clearCart } = useCart();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [discount, setDiscount] = useState(0);
  const [manualCoupon, setManualCoupon] = useState('');
  const lottieRef = useRef(); // Reference for the Lottie animation

  // Sample coupons with discounts and expiration dates
  const validCoupons = [
    {
      code: 'DISCOUNT10',
      discount: 10,  // 10% discount
      expirationDate: '2024-12-31',
    },
    {
      code: 'DISCOUNT20',
      discount: 20,  // 20% discount
      expirationDate: '2025-01-15',
    },
    {
      code: 'DISCOUNT30',
      discount: 30,  // 30% discount
      expirationDate: '2024-12-20',
    },
    {
      code: 'NEWYEAR50',
      discount: 50,  // 50% discount for New Year
      expirationDate: '2024-12-31',
    },
    {
      code: 'FESTIVE25',
      discount: 25,  // 25% discount for festive season
      expirationDate: '2024-12-25',
    },
    {
      code: 'SUMMERSALE15',
      discount: 15,  // 15% discount for summer sale
      expirationDate: '2025-06-30',
    },
    {
      code: 'BLACKFRIDAY40',
      discount: 40,  // 40% discount for Black Friday
      expirationDate: '2024-11-29',
    },
    {
      code: 'SPRINGDEAL5',
      discount: 5,  // 5% discount for spring sale
      expirationDate: '2025-04-15',
    },
    {
      code: 'CYBERMONDAY45',
      discount: 45,  // 45% discount for Cyber Monday
      expirationDate: '2024-12-02',
    },
    {
      code: 'WELCOME2024',
      discount: 20,  // 20% discount for new users
      expirationDate: '2024-12-31',
    },
  ];

  // Function to check if the coupon is expired
  const isCouponExpired = (expirationDate) => {
    const today = new Date();
    const expiration = new Date(expirationDate);
    return today > expiration;
  };

  // Calculate the total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalWithDiscount = totalPrice - (totalPrice * discount) / 100;

  // Handle coupon change from dropdown
  const handleCouponChange = (event) => {
    const selectedCouponCode = event.target.value;
    const coupon = validCoupons.find(c => c.code === selectedCouponCode);
    
    if (coupon) {
      if (isCouponExpired(coupon.expirationDate)) {
        alert(`The coupon ${coupon.code} has expired!`);
        setSelectedCoupon(null);
        setDiscount(0);
      } else {
        setSelectedCoupon(coupon);
        setDiscount(coupon.discount);
      }
    }
  };

  // Handle manual coupon input
  const handleManualCouponChange = (event) => {
    setManualCoupon(event.target.value);
  };

  const applyManualCoupon = () => {
    const coupon = validCoupons.find(c => c.code === manualCoupon);
    if (coupon) {
      if (isCouponExpired(coupon.expirationDate)) {
        alert(`The coupon ${coupon.code} has expired!`);
        setManualCoupon('');
        setDiscount(0);
      } else {
        setSelectedCoupon(coupon);
        setDiscount(coupon.discount);
      }
    } else {
      alert('Invalid coupon code!');
      setManualCoupon('');
      setDiscount(0);
    }
  };

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
                <li key={index} className="flex items-center justify-between py-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500">{`Quantity: ${item.quantity}`}</p>
                    </div>
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

              {/* Discount Box */}
              {discount > 0 && (
                <div className="flex justify-between items-center mt-4 text-green-600">
                  <p>Coupon Applied:</p>
                  <p>{`-${discount}%`}</p>
                </div>
              )}

              {/* Final Price After Discount */}
              <div className="flex justify-between items-center font-semibold text-lg mt-4">
                <p className="text-gray-700">Total After Discount:</p>
                <p className="text-gray-700">{`₹${totalWithDiscount.toFixed(2)}`}</p>
              </div>
            </div>

            {/* Coupon Dropdown */}
            <div className="flex items-center mt-6">
              <select
                value={selectedCoupon ? selectedCoupon.code : ''}
                onChange={handleCouponChange}
                className="px-4 py-2 w-3/4 rounded-md border border-gray-300"
              >
                <option value="">Select Coupon</option>
                {validCoupons.map((coupon) => (
                  <option key={coupon.code} value={coupon.code}>
                    {coupon.code} - Expires: {coupon.expirationDate}
                  </option>
                ))}
              </select>
            </div>

            {/* Manual Coupon Input */}
            <div className="flex items-center mt-4">
              <input
                type="text"
                value={manualCoupon}
                onChange={handleManualCouponChange}
                className="px-4 py-2 w-3/4 rounded-md border border-gray-300"
                placeholder="Enter Coupon Code"
              />
              <button
                onClick={applyManualCoupon}
                className="px-4 py-2 ml-2 rounded-md text-white bg-pink-600 hover:bg-pink-700 transition"
              >
                Apply Coupon
              </button>
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