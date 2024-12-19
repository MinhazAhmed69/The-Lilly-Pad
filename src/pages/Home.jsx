import React, { useState } from 'react';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import Accordion from '../components/Accordion';
import { useCart } from '../components/CartContext'; // Import Cart Context

const Home = () => {
  const [activeTab, setActiveTab] = useState('promotional');
  const { addToCart } = useCart(); // Access the addToCart function

  const seasonalItems = [
    { title: 'BlueBerry Smoothie', description: 'A refreshing tropical drink, perfect for summer.', price: 100, imageUrl: 'https://images.unsplash.com/photo-1457518919282-b199744eefd6?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Autumn Salad', description: 'A fresh salad with autumn vegetables and a tangy dressing.', price: 90, imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  ];

  const promotionalItems = [
    { title: 'Beverages', description: 'A Cool and Refreshing Branded Beverages', price: 50, imageUrl: 'https://images.unsplash.com/photo-1641311304269-1000f9dcbdb1?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Holiday Burger', description: 'A festive burger with cranberry sauce and turkey.', price: 180, imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2598&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  ];

  const popularItems = [
    { title: 'Classic Spaghetti', description: 'A timeless pasta dish with rich tomato sauce.', price: 150, imageUrl: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Margherita Pizza', description: 'A simple pizza with fresh mozzarella and basil.', price: 220, imageUrl: 'https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  ];

  const getTabContent = () => {
    const items = activeTab === 'seasonal' ? seasonalItems : activeTab === 'promotional' ? promotionalItems : popularItems;
    return items.map(item => (
      <div className="card glass w-80 h-96" key={item.title}>
        <figure className="h-48 w-full">
          <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p>{item.description}</p>
          <p className="text-xl font-bold text-green-600">{`₹${item.price}`}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => addToCart({ ...item, quantity: 1 })} // Add to cart with default quantity of 1
            >
              Buy now!
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Hero />
      <Timeline />
      <Accordion />

      {/* Tab Navigation */}
      <div role="tablist" className="tabs tabs-bordered w-full mb-16 mt-16">
        <a
          role="tab"
          className={`tab ${activeTab === 'seasonal' ? 'tab-active' : ''} text-xl font-medium`}
          onClick={() => setActiveTab('seasonal')}
        >
          Seasonal
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === 'promotional' ? 'tab-active' : ''} text-xl font-medium`}
          onClick={() => setActiveTab('promotional')}
        >
          Promotional
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === 'popular' ? 'tab-active' : ''} text-xl font-medium`}
          onClick={() => setActiveTab('popular')}
        >
          Popular
        </a>
      </div>

      {/* Tab Content */}
      <div className="w-full max-w-4xl flex flex-wrap justify-center gap-4">
        {getTabContent()}
      </div>
    </div>
  );
};

export default Home;