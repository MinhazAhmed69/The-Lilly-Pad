import React, { useState } from 'react';
import imageRoyaldine from '../assets/Royaldine.jpg';
import imageCentrahall from '../assets/Centralhall.jpg';
import imageMarriagehall from '../assets/Marriagehall.jpg';

const PrivateEvent = () => {
  const privatePackages = [
    {
      title: 'Breakfast Bliss',
      description: 'Start your mornings right with our curated breakfast platters featuring pastries, fresh fruits, and artisanal coffee.',
      details: 'This package includes a selection of croissants, muffins, seasonal fruits, and freshly brewed coffee. Perfect for corporate meetings and morning events.',
      price: 10000,
      image: imageRoyaldine,
    },
    {
      title: 'High Tea Elegance',
      description: 'Delight your guests with an array of sandwiches, scones, and premium tea selections.',
      details: 'This package offers finger sandwiches, scones with clotted cream, and a variety of teas to elevate your high tea gatherings.',
      price: 15000,
      image: imageCentrahall,
    },
    {
      title: 'Custom Event Menu',
      description: 'Tailor-made menus crafted to suit your event and preferences. Perfect for birthdays and celebrations.',
      details: 'Our chefs work with you to create a personalized menu, ensuring every dish matches your taste and occasion.',
      price: 'Varies',
      image: imageMarriagehall,
    },
  ];

  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleLearnMore = (pkg) => {
    setSelectedPackage(pkg);
  };

  const handleCloseDetails = () => {
    setSelectedPackage(null);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Private Elegant Event Management</h1>
        <p className="text-lg text-gray-600">
        Whether it’s a cozy gathering, a sophisticated high tea, or an unforgettable celebratory feast, our private hall is the perfect venue to host your special moments. Immerse your guests in an ambiance of elegance, complemented by our signature dishes and curated cafe charm.
        From meticulously sourced ingredients to a menu bursting with delightful flavors, we bring culinary artistry and warm hospitality to every occasion. Our flexible event packages are tailored to accommodate gatherings of all sizes, ensuring a seamless and personalized experience for you and your guests.
        Let us transform your event into a memorable affair, with every detail thoughtfully planned to create moments of joy, celebration, and connection.
        </p>
        <button className="btn btn-primary mt-6 px-6 py-2 text-white rounded-lg bg-green-600 hover:bg-green-700">
          Contact Us If you want to host a private event 
        </button>
      </div>

      {/* Catering Packages */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
        {cateringPackages.map((pkg) => (
          <div className="card glass w-80" key={pkg.title}>
            <figure className="h-48">
              <img
                src={pkg.image} // Corrected here to use `pkg.image` instead of `pkg.imageUrl`
                alt={pkg.title}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{pkg.title}</h2>
              <p className="text-gray-600">{pkg.description}</p>
              <p className="text-xl font-bold text-green-600">
                {pkg.price === 'Varies' ? pkg.price : `₹${pkg.price}`}
              </p>
              <button
                className="btn btn-primary mt-4"
                onClick={() => handleLearnMore(pkg)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Details and Order Form Section */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
            <h2 className="text-2xl font-bold mb-4">{selectedPackage.title}</h2>
            <p className="text-gray-700 mb-4">{selectedPackage.details}</p>
            <p className="text-xl font-bold text-green-600 mb-4">
              {selectedPackage.price === 'Varies' ? selectedPackage.price : `₹${selectedPackage.price}`}
            </p>

            {/* Order Form */}
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number (with Country Code)
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="+91 1234567890"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="guests" className="block text-gray-700 font-medium mb-2">
                  Number of Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter number of guests"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Place Order
              </button>
            </form>

            {/* Close Button */}
            <button
              className="btn bg-red-500 text-white mt-4 px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={handleCloseDetails}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivateEvent;