import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import imageOne from '../assets/one.jpg';
import imageTwo from '../assets/two.jpg';
import imageThree from '../assets/three.jpg';
import imageFour from '../assets/four.jpg';
import imageFive from '../assets/five.jpg';
import imageSix from '../assets/six.jpg';
import imageSeven from '../assets/seven.jpg';
import imageEight from '../assets/eight.jpg';
import imageNine from '../assets/nine.jpg';
import imageTen from '../assets/ten.jpg';
import imageEleven from '../assets/eleven.jpg';
import imageTwelve from '../assets/tweleve.jpg';
import imageThirteen from '../assets/thirteen.jpg';
import imageFourteen from '../assets/fourteen.jpg';
import imageFifteen from '../assets/fifteen.jpg';
import imageSixteen from '../assets/sixteen.jpg';
import imageSeventeen from '../assets/seventeen.jpg';
import imageEighteen from '../assets/eighteen.jpg';
import imageNineteen from '../assets/nineteen.jpg';
import imageTwenty from '../assets/twenty.jpg';
import imageTwentyOne from '../assets/twentyone.jpg';
import imageTwentyTwo from '../assets/twentytwo.jpg';
import imageTwentyThree from '../assets/twentythree.jpg';
import imageTwentyFour from '../assets/twentyfour.jpg';
import imageTwentyFive from '../assets/twentyfive.jpg';
import imageTwentySix from '../assets/twentysix.jpg';
import imageTwentySeven from '../assets/twentyseven.jpg';
import imageTwentyEight from '../assets/twentyeight.jpg';
import imageTwentyNine from '../assets/twentynine.jpg';
import imageThirty from '../assets/thirty.jpg';
import imageThirtyOne from '../assets/thirtyone.jpg';
import imageThirtyTwo from '../assets/thirtytwo.jpg';
import imageThirtyThree from '../assets/thirtythree.jpg';
import imageThirtyFour from '../assets/thirtyfour.jpg';
import imageThirtyFive from '../assets/thirtyfive.jpg';
import imageThirtySix from '../assets/thirtysix.jpg';
import Lottie from 'lottie-react';
import animationData from '../assets/Animation - 1731226949859.json';
import { motion } from 'framer-motion';

const Menu = () => {
  const { addToCart } = useCart();
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [filters, setFilters] = useState([]); // Track selected dietary filters
  const [selectedAddOns, setSelectedAddOns] = useState([]); // Track selected add-ons

  const cardData = [
    { title: 'Refreshing Drink', description: 'Cool beverage.', price: 80, img: imageOne, tags: ['vegan', 'gluten-free'], addOns: [{ name: "Extra Sugar", price: 10 }, { name: "Lemon Slice", price: 15 }] },
    { title: 'Delicious Pasta', description: 'Fresh ingredients.', price: 180, img: imageTwo, tags: ['vegetarian'], addOns: [{ name: "Extra Cheese", price: 30 }, { name: "Garlic Bread", price: 20 }] },
    { title: 'Gourmet Burger', description: 'Juicy burger.', price: 200, img: imageThree, tags: ['non-vegetarian'], addOns: [{ name: "Double Patty", price: 50 }, { name: "Extra Sauce", price: 10 }] },
    { title: 'Exotic Pizza', description: 'Unique flavors.', price: 300, img: imageFour, tags: ['vegetarian'], addOns: [{ name: "Extra Cheese", price: 40 }, { name: "Olives", price: 20 }] },
    { title: 'Classic Pancakes', description: 'Fluffy pancakes.', price: 150, img: imageFive, tags: ['vegetarian'], addOns: [{ name: "Maple Syrup", price: 25 }, { name: "Whipped Cream", price: 20 }] },
    { title: 'Exotic Salad', description: 'Fresh salad.', price: 100, img: imageSix, tags: ['vegan', 'gluten-free'], addOns: [{ name: "Extra Avocado", price: 30 }, { name: "Olive Oil Dressing", price: 10 }] },
    { title: 'Tacos', description: 'Flavorful wraps.', price: 120, img: imageSeven, tags: ['vegetarian', 'gluten-free'], addOns: [{ name: "Sour Cream", price: 15 }, { name: "Extra Guacamole", price: 20 }] },
    { title: 'Donuts', description: 'Fluffy delight.', price: 80, img: imageEight, tags: ['vegetarian'], addOns: [{ name: "Chocolate Glaze", price: 10 }, { name: "Sprinkles", price: 5 }] },
    { title: 'Baked Alaska', description: 'Fiery elegance.', price: 180, img: imageNine, tags: ['vegetarian'], addOns: [{ name: "Extra Marshmallow", price: 15 }, { name: "Fruit Topping", price: 20 }] },
    { title: 'Macarons', description: 'Creamy goodness.', price: 120, img: imageTen, tags: ['vegetarian'], addOns: [{ name: "Extra Filling", price: 15 }, { name: "Fruit Jam", price: 10 }] },
    { title: 'Ratatouille', description: 'Vegetable medley.', price: 280, img: imageEleven, tags: ['vegan'], addOns: [{ name: "Garlic Butter", price: 25 }, { name: "Extra Olives", price: 15 }] },
    { title: 'Ramen', description: 'Soul food.', price: 250, img: imageTwelve, tags: ['non-vegetarian'], addOns: [{ name: "Extra Noodles", price: 30 }, { name: "Soft Boiled Egg", price: 20 }] },
    { title: 'Bagels', description: 'Freshly baked bagels with your choice of spread.', price: 90, img: imageThirteen, tags: ['vegetarian'], addOns: [{ name: "Cream Cheese", price: 20 }, { name: "Avocado Spread", price: 25 }] },
    { title: 'Avocado Toast', description: 'Smashed avocado on artisan bread with toppings.', price: 120, img: imageFourteen, tags: ['vegan'], addOns: [{ name: "Extra Avocado", price: 30 }, { name: "Poached Egg", price: 25 }] },
    { title: 'Cheese Corn Balls', description: 'Crispy and cheesy snack bites.', price: 100, img: imageFifteen, tags: ['vegetarian'], addOns: [{ name: "Extra Cheese", price: 20 }, { name: "Spicy Dip", price: 15 }] },
    { title: 'French Fries', description: 'Crispy golden fries served with ketchup.', price: 80, img: imageSixteen, tags: ['vegetarian', 'gluten-free'], addOns: [{ name: "Cheese Dip", price: 15 }, { name: "Spicy Seasoning", price: 10 }] },
    { title: 'Mochi', description: 'Soft and chewy Japanese rice cakes with fillings.', price: 150, img: imageSeventeen, tags: ['vegetarian'], addOns: [{ name: "Extra Filling", price: 20 }, { name: "Matcha Dusting", price: 15 }] },
    { title: 'Shawarma', description: 'Delicious wraps with fresh veggies and sauces.', price: 180, img: imageEighteen, tags: ['non-vegetarian'], addOns: [{ name: "Extra Meat", price: 50 }, { name: "Extra Sauce", price: 20 }] },
    { title: 'Stuffed Dates', description: 'Dates filled with almond butter and drizzled with dark chocolate.', price: 130, img: imageNineteen, tags: ['vegan', 'gluten-free'], addOns: [{ name: "Extra Almond Butter", price: 20 }, { name: "Chia Seeds", price: 10 }] },
    { title: 'Cauliflower Steak', description: 'Roasted cauliflower steak with chimichurri sauce, served with mashed sweet potatoes.', price: 300, img: imageTwenty, tags: ['vegan', 'gluten-free'], addOns: [{ name: "Extra Chimichurri", price: 20 }, { name: "Caramelized Onions", price: 15 }] },
    { title: 'Jackfruit Carnitas with Coconut Rice', description: 'Smoky jackfruit served over fragrant coconut rice, topped with mango salsa.', price: 320, img: imageTwentyOne, tags: ['vegan', 'gluten-free'], addOns: [{ name: "Extra Mango Salsa", price: 25 }, { name: "Roasted Pineapple", price: 20 }] },
    { title: 'Smoothie Bowl', description: 'A refreshing blend of fruits topped with granola, seeds, and fresh berries.', price: 180, img: imageTwentyTwo, tags: ['vegan', 'gluten-free'], addOns: [{ name: "Extra Berries", price: 20 }, { name: "Chia Seeds", price: 10 }] },
    { title: 'British Breakfast', description: 'A classic hearty breakfast with baked beans, sautéed mushrooms, grilled tomatoes, hash browns, and toast.', price: 250, img: imageTwentyThree, tags: ['vegetarian'], addOns: [{ name: "Extra Hash Browns", price: 20 }, { name: "Vegan Sausage", price: 30 }] },
    { title: 'Sushi', description: 'Assorted sushi rolls with fresh fish, vegetables, and tangy soy sauce.', price: 350, img: imageTwentyFour, tags: ['non-vegetarian'], addOns: [{ name: "Extra Wasabi", price: 15 }, { name: "Pickled Ginger", price: 10 }] },
    { title: 'Dumplings', description: 'Steamed or fried dumplings stuffed with a savory filling of vegetables or meat, served with soy sauce.', price: 250, img: imageTwentyFive, tags: ['non-vegetarian'], addOns: [{ name: "Extra Soy Sauce", price: 10 }, { name: "Chili Oil", price: 20 }] },
    { title: 'Chicken Tikka', description: 'Juicy pieces of chicken marinated in a blend of Indian spices, grilled to perfection.', price: 400, img: imageTwentySix, tags: ['non-vegetarian', 'spicy'], addOns: [{ name: "Mint Chutney", price: 20 }, { name: "Extra Spices", price: 15 }] },
    { title: 'Tofu Steak', description: 'Grilled tofu steak marinated with herbs and spices, served with sautéed vegetables.', price: 300, img: imageTwentySeven, tags: ['vegetarian', 'vegan'], addOns: [{ name: "Extra Sauce", price: 25 }, { name: "Grilled Vegetables", price: 30 }] },
    { title: 'Fugu' , description: 'Known for its subtle flavor and dangerous preparation' , price:800,img: imageTwentyEight, tags:['non-vegetarian'],addOns: [{ name: "Extra Wasabi", price: 15 }, { name: "Pickled Ginger", price: 10 }] },
    { title: 'Caesar Salad' , description: 'A popular salad consisting of romaine lettuce, croutons, parmesan cheese, and Caesar dressing ' , price:300,img: imageTwentyNine, tags:['non-vegetarian','salad'],addOns: [{ name: "Extra Olives", price: 25 }, { name: "Extra Chillies", price: 10 }] },
    { title: 'Vegan Tacos' , description: 'Corn tortillas filled with plant-based fillings ' , price:400,img: imageThirty, tags:['vegan'],addOns: [{ name: "Extra Olives", price: 25 }, { name: "Tobasco Sos", price: 40 }] },
    { title: 'Tiramisu' , description: 'Tiramisu is a classic Italian dessert made with layers of coffee-soaked ladyfingers, creamy mascarpone cheese, and a dusting of cocoa powder.' , price:100,img: imageThirtyOne, tags:['veg'],addOns: [{ name: "Extra Maple Syrup", price: 25 }, { name: "Extra Cream", price: 40 }] },
    { title: 'Seitan' , description: 'Seitan is a plant-based protein made from wheat gluten, often used as a meat substitute  ' , price:200,img: imageThirtyTwo, tags:['vegan'],addOns: [{ name: "Extra Olives", price: 25 }, { name: "Extra Spices Added", price: 40 }] },
    { title: 'Chicken 65' , description: 'Chicken 65 , a popular and spicy South Indian fried chicken dish known for its bold flavors' , price:300,img: imageThirtyThree, tags:['non-vegetarian'],addOns: [{ name: "Extra Chilies", price: 25 }, { name: "Finely Cut Onions", price: 40 }] },
    { title: 'Greek Salad(Vegan Version)' , description: 'A refreshing mix of cucumbers, tomatoes, onions, olives, and vegan feta, tossed in tangy olive oil vinaigrette.' , price:100,img: imageThirtyFour, tags:['vegan','gluten-free'],addOns: [{ name: "Extra Olives", price: 25 }, { name: "Finely Cut Onions", price: 40 }] },
    { title: 'Cheese Garlic Bread' , description: 'Toasted bread topped with garlic butter, melted cheese, and herbs.' , price:150,img: imageThirtyFive, tags:['vegetarian'],addOns: [{ name: "Extra Olives", price: 25 }, { name: "Finely Cut Onions", price: 40 }] },
    { title: 'Cheese Croissant with Chocolate Syrup' , description: 'A buttery, chocolaty , flaky pastry filled with melted cheese, often served as a snack or breakfast item' , price:90,img: imageThirtySix, tags:['vegetarian'],addOns: [{ name: "Maple Syrup", price: 25 }, { name: "Honey", price: 40 }] }
    ];

  const dietaryFilters = ['vegan', 'vegetarian', 'gluten-free', 'non-vegetarian'];

  const toggleFilter = (filter) => {
    setFilters((prevFilters) =>
      prevFilters.includes(filter) ? prevFilters.filter((f) => f !== filter) : [...prevFilters, filter]
    );
  };

  const filteredData = filters.length
    ? cardData.filter((item) => filters.every((filter) => item.tags.includes(filter)))
    : cardData;

  const handleOrderNow = (itemTitle) => {
    setSelectedItem(cardData.find((item) => item.title === itemTitle));
  };

  const handleCancel = () => {
    setSelectedItem(null);
    setQuantity(1);
    setSelectedAddOns([]);
  };

  const handlePlaceOrder = () => {
    if (selectedItem) {
      const totalAddOnPrice = selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0);
      const totalPrice = (selectedItem?.price || 0) * quantity + totalAddOnPrice;

      addToCart({ ...selectedItem, quantity, totalPrice, addOns: selectedAddOns });
      alert(`Added ${quantity} x "${selectedItem.title}" with add-ons to the cart.`);
      setSelectedItem(null);
      setQuantity(1);
      setSelectedAddOns([]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
        <article className="prose lg:prose-xl text-center mb-12">
          <h1 className="text-4xl font-extrabold">Welcome to Our Menu</h1>
          <p>Explore our wide range of delectable dishes!</p>
        </article>

        {/* Dietary Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          {dietaryFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={`btn ${filters.includes(filter) ? 'btn-primary' : 'btn-secondary'}`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((card, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl transform transition hover:scale-105 hover:shadow-2xl"
            >
              <figure
                className="w-full h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.img})` }}
              ></figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-semibold">{card.title}</h2>
                <p>{card.description}</p>
                <p className="text-lg font-bold text-primary">₹{card.price}</p>
                <div className="card-actions justify-end mt-4">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleOrderNow(card.title)}
                  >
                    Order Now
                  </button>
                  <button
                    className="btn btn-secondary ml-4"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedItem && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96 shadow-lg text-center">
              <h2 className="text-xl font-semibold mb-4">{`Order: ${selectedItem.title}`}</h2>

              {/* Quantity Selection */}
              <label className="block mb-4">
                <span className="text-lg font-medium">Select Quantity:</span>
                <select
                  className="mt-2 p-2 border rounded w-full"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                >
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
              </label>

              {/* Add-ons */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Customize Your Order</h3>
                {selectedItem.addOns.map((addOn) => (
                  <div key={addOn.name} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={addOn.name}
                      value={addOn.name}
                      onChange={(e) => {
                        setSelectedAddOns((prevAddOns) =>
                          e.target.checked
                            ? [...prevAddOns, addOn]
                            : prevAddOns.filter((item) => item.name !== addOn.name)
                        );
                      }}
                    />
                    <label htmlFor={addOn.name} className="text-sm">
                      {addOn.name} (+₹{addOn.price})
                    </label>
                  </div>
                ))}
              </div>

              <p className="mt-4 font-bold text-lg">
              Price: ₹{(selectedItem?.price || 0) * quantity + selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0)}
              </p>

              <div className="mt-4">
                <button
                  className="btn btn-primary w-full"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
                <button
                  className="btn btn-secondary w-full mt-4"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Menu;