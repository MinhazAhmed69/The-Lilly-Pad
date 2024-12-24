import React from 'react';
import { useCart } from '../components/CartContext';
import offerImageOne from '../assets/one.jpg'; // Add relevant images for offers
import offerImageTwo from '../assets/two.jpg'; 
import offerImageThree from '../assets/three.jpg'; 
import { motion } from 'framer-motion';

const OfferPage = () => {
  const { addToCart } = useCart();

  const offers = [
    {
      title: 'Buy 1 Get 1 Free - Gourmet Burger',
      description: 'Indulge in our juicy burgers and get one free on every order!',
      price: 200,
      img: offerImageOne,
    },
    {
      title: '50% Off - Exotic Pizza',
      description: 'Savor the unique flavors of our exotic pizza at half the price!',
      price: 150, // Discounted price
      img: offerImageTwo,
    },
    {
      title: 'Family Combo Deal',
      description: 'Get 2 Pastas, 1 Pizza, and 4 Soft Drinks for just ₹800.',
      price: 800,
      img: offerImageThree,
    },
  ];

  const handleAddToCart = (offer) => {
    addToCart({ ...offer, quantity: 1 });
    alert(`Added "${offer.title}" to the cart!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
        <article className="prose lg:prose-xl text-center mb-12">
          <h1 className="text-4xl font-extrabold">Today's Special Offers</h1>
          <p>Don't miss out on these amazing deals!</p>
        </article>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl transform transition hover:scale-105 hover:shadow-2xl"
            >
              <figure
                className="w-full h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${offer.img})` }}
              ></figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-semibold">{offer.title}</h2>
                <p>{offer.description}</p>
                <p className="text-lg font-bold text-primary">₹{offer.price}</p>
                <div className="card-actions justify-end mt-4">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(offer)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default OfferPage;