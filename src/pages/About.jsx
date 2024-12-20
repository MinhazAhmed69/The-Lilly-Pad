import React, { useState } from 'react';
import { motion } from 'framer-motion';
import vivekImage from '../assets/Vivek.jpg';
import arvindImage from '../assets/arvind.jpg';
import kushalImage from '../assets/Kushal.jpg';
import minhazImage from '../assets/Minhaz.jpg';
import saketImage from '../assets/Saket.jpg';

const About = () => {
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    if (name.trim() && review.trim() && rating > 0) {
      alert(`Review Submitted:\nName: ${name}\nRating: ${rating} Stars\nReview: ${review}`);
      setReview('');
      setName('');
      setRating(0);
    } else {
      alert('Please fill in all the fields before submitting your review.');
    }
  };

  const handleReviewChange = (e) => {
    const text = e.target.value;
    const wordCount = text.split(' ').filter(Boolean).length;
    if (wordCount <= 500) {
      setReview(text);
    }
  };

  const wordCount = review.split(' ').filter(Boolean).length;
  const remainingWords = 500 - wordCount;

  const teamMembers = [
    {
      name: 'Minhaz Ahmed',
      role: 'Head Chef & Owner',
      image: minhazImage,
      bio: 'Minhaz brings 15 years of culinary excellence, combining passion and creativity to craft unforgettable dishes.',
    },
    {
      name: 'Arvind',
      role: 'Pastry Chef',
      image: arvindImage,
      bio: 'Arvind’s expertise in crafting delicate pastries and desserts ensures every bite is a sweet masterpiece.',
    },
    {
      name: 'Saket',
      role: 'Sous Chef',
      image: saketImage,
      bio: 'Saket specializes in innovative fusion cuisine, blending diverse global flavors with local ingredients.',
    },
    {
      name: 'Kushal',
      role: 'Sommelier',
      image: kushalImage,
      bio: 'Kushal expertly curates wine pairings, enhancing every meal with the perfect glass.',
    },
    {
      name: 'Vivek',
      role: 'Restaurant Manager',
      image: vivekImage,
      bio: 'Vivek ensures a seamless and memorable dining experience for every guest with his exceptional management skills.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white text-black min-h-screen p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* About Section - Left half */}
          <div className="flex-1">
            <article className="prose lg:prose-xl text-gray-900">
              <h1 className="text-5xl font-bold text-gray-900">Welcome to The Lilly Pad</h1>
              <p className="text-xl mt-4 text-gray-800">
                Nestled in the heart of the city, The Lilly Pad is a serene retreat where food meets art. Our culinary
                haven offers more than just dishes — we craft experiences. With every plate, we aim to evoke emotions and
                create memories.
              </p>
              <p className="text-xl text-gray-800">
                Our philosophy is rooted in sustainability and creativity. At The Lilly Pad, we source the freshest
                ingredients from local farmers and infuse each creation with love and passion. Whether it's an intimate
                dinner or a lively celebration, our goal is to bring people together through the joy of dining.
              </p>
              <p className="text-xl text-gray-800">
                From handcrafted appetizers to decadent desserts, every dish is a masterpiece designed to delight your
                senses. The soothing ambiance, combined with our world-class service, ensures a dining experience unlike
                any other. Join us and let us take you on a journey of flavors and aromas that you'll cherish forever.
              </p>
              <blockquote className="mt-8 p-4 bg-gray-100 border-l-4 border-green-500 italic">
                <p className="text-xl text-gray-700">{"“Good food is the foundation of genuine happiness.”"}</p>
                <footer className="mt-4 text-lg text-right text-gray-700 font-medium">
                  - Auguste Escoffier
                </footer>
              </blockquote>

              {/* Inspirational Button */}
              <div className="mt-6">
                <a
                  href="https://www.youtube.com/watch?v=VaAYjBGTZRE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full lg:w-auto"
                >
                  Inspiring Words from Our Founder
                </a>
              </div>
            </article>
          </div>

          {/* Contact Section - Right half */}
          <div className="flex-1">
            <article className="prose lg:prose-xl text-gray-900">
              <h2 className="text-5xl font-bold text-gray-900">Contact Us</h2>
              <p className="text-xl mt-4 text-gray-800">
                Your feedback is the lifeline of The Lilly Pad. Whether you have questions about our menu or suggestions
                to improve your experience, we are here to listen. Share your thoughts, and help us grow!
              </p>

              {/* Review Form */}
              <form onSubmit={handleReviewSubmit} className="space-y-4 mt-6">
                <div className="form-control">
                  <label htmlFor="name" className="label text-gray-900">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input input-bordered w-full text-gray-900"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-control">
                  <label htmlFor="review" className="label text-gray-900">
                    <span className="label-text">Your Review</span>
                  </label>
                  <textarea
                    id="review"
                    value={review}
                    onChange={handleReviewChange}
                    className="textarea textarea-bordered w-full text-gray-900"
                    placeholder="Write your review here"
                    maxLength={500}
                    required
                  ></textarea>
                  <p className="text-right text-gray-500 text-sm">{wordCount} / 500 words</p>
                </div>

                <div className="form-control">
                  <label htmlFor="rating" className="label text-gray-900">
                    <span className="label-text">Your Rating</span>
                  </label>
                  <select
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="select select-bordered w-full text-gray-900"
                    required
                  >
                    <option value="" disabled>
                      Select rating
                    </option>
                    {[...Array(5)].map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1} Star{ i > 0 && 's'}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-control mt-4">
                  <button 
                    type="submit" 
                    className={`btn btn-primary w-full ${remainingWords < 0 ? 'cursor-not-allowed opacity-50' : ''}`} 
                    disabled={remainingWords < 0}
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </article>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative group overflow-hidden">
                <div className="bg-white p-6 rounded-lg shadow-xl transition-all transform group-hover:scale-105 hover:shadow-2xl">
                  <div className="relative overflow-hidden rounded-full w-32 h-32 mx-auto mb-4 group-hover:opacity-90 transition-opacity">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full transition-transform transform group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-center text-gray-900">{member.name}</h3>
                  <p className="text-center text-gray-700">{member.role}</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
                  <p className="text-lg text-white text-center mt-2 px-4">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;