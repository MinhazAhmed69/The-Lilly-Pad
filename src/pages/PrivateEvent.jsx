import React, { useState } from 'react';
import imageRoyaldine from '../assets/Royaldine.jpg';
import imageCentralhall from '../assets/Centralhall.jpg';
import imageMarriagehall from '../assets/Marriagehall.jpg';
import imageSeminarHall from '../assets/SeminarHall.jpg';
import imagePrivateLounge from '../assets/PrivateLounge.jpg';
import imageSmallRoyal from '../assets/SmallRoyal.jpg';

const PrivateEvent = () => {
  const privateeventPackages = [
    {
      title: 'The Royal Dining',
      description: 'We promise to serve you like our royals , and will not leave even a scope for complaint in that aspect',
      details: 'Book our royal dining hall for the day and enjoy exclusive services, including personalized catering, a dedicated staff, customizable decor, and state-of-the-art amenities. Perfect for weddings, corporate events, and special celebrations, your event will be handled with elegance and care.',
      price: 30000,
      image: imageRoyaldine,
    },
    {
      title: 'Central Hall Excellence',
      description: 'Host your event in our spacious and elegant Central Hall with exceptional service and ambiance.',
      details: 'Our Central Hall package includes versatile seating arrangements, premium catering options, and personalized decor to suit any occasion. Whether it’s a corporate event, wedding, or celebration, we provide a refined atmosphere and expert service to make your event unforgettable.',
      price: 50000,
      image: imageCentralhall, // Use the relevant image for Central Hall
    },
    {
      title: 'Marriage Hall Elegance',
      description: 'Celebrate your special day in our beautifully decorated Marriage Hall with exquisite services',
      details: 'Our Marriage Hall package includes customizable decor, gourmet catering options, and dedicated service to create the perfect setting for your wedding day. We provide everything from the ceremony to the reception, ensuring a seamless and memorable experience.',
      price: 100000,
      image: imageMarriagehall, // Use the relevant image for the Marriage Hall
    },
    {
      title: 'Seminar Hall Excellence',
      description: 'Host productive and professional events in our fully equipped Seminar Hall, designed for comfort and success.',
      details: 'Our Seminar Hall package includes state-of-the-art audio-visual equipment, flexible seating arrangements, and personalized catering options to suit your event needs. Ideal for conferences, seminars, and workshops, ensuring a seamless and impactful experience.',
      price: 5000,
      image: imageSeminarHall,
    },
    {
      title: 'Grande salone',
      description: 'Gather your loved ones for a delightful family tea experience with a selection of sandwiches, scones, and premium teas.',
      details: 'This package includes finger sandwiches, scones with clotted cream, and a variety of teas, offering a perfect family gathering experience. Enjoy a warm, intimate atmosphere for all ages.',
      price: 5000,
      image: imagePrivateLounge, // Use the relevant image for the Family Lounge

    },
    {
      title: 'Royal Cube',
      description: 'You can experience the Royals even if you cannot afford the royal dining and experience who you can be - a Royal',
      details: 'You will get benefits like personalised orders and music themes as well',
      price: 4000,
      image: imageSmallRoyal,
    }
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
        <br/>
        <p className="text-lg text-gray-600">
          Our private hall is the ideal venue for any occasion, from intimate gatherings to grand celebrations. Enjoy elegant ambiance, signature dishes, and tailored event packages for all sizes, ensuring a memorable experience for you and your guests.
        </p>
        <button className="btn btn-primary mt-6 px-6 py-2 text-white rounded-lg bg-green-600 hover:bg-green-700">
          Contact Us if you want to host a private event 
        </button>
      </div>

      {/* Catering Packages */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
        {privateeventPackages.map((pkg) => (
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