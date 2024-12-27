import React, { useState } from "react";

const CateringMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const cardData = [
    {
      title: "Delicious Pasta",
      description: "Fresh ingredients combined for a flavorful delight.",
      price: 180,
      tags: ["vegetarian"],
      addOns: [
        { name: "Extra Cheese", price: 30 },
        { name: "Garlic Bread", price: 20 },
      ],
    },
    {
      title: "Gourmet Burger",
      description: "Juicy and loaded with fresh toppings.",
      price: 200,
      tags: ["non-vegetarian"],
      addOns: [
        { name: "Double Patty", price: 50 },
        { name: "Extra Sauce", price: 10 },
      ],
    },
    {
      title: "Exotic Salad",
      description: "A healthy and refreshing choice made with the freshest ingredients.",
      price: 100,
      tags: ["vegan", "gluten-free"],
      addOns: [
        { name: "Extra Avocado", price: 30 },
        { name: "Olive Oil Dressing", price: 10 },
      ],
    },
    {
      title: "Classic Pancakes",
      description: "Soft and fluffy pancakes served with optional toppings.",
      price: 150,
      tags: ["vegetarian"],
      addOns: [
        { name: "Maple Syrup", price: 25 },
        { name: "Whipped Cream", price: 20 },
      ],
    },
    {
      title: "Smoothie Bowl",
      description: "A refreshing and nutritious fruit blend topped with granola and fresh berries.",
      price: 180,
      tags: ["vegan", "gluten-free"],
      addOns: [
        { name: "Extra Berries", price: 20 },
        { name: "Chia Seeds", price: 10 },
      ],
    },
  ];

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="p-8 bg-gray-50">
      {/* Button to toggle custom menu */}
      <button
        className="btn bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        onClick={handleShowMenu}
      >
        {showMenu ? "Hide Custom Menu" : "Show Custom Menu"}
      </button>

      {/* Display the menu list */}
      {showMenu && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-md bg-white"
            >
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-green-600 font-semibold">₹{item.price}</p>
              <p className="text-sm text-gray-500 mb-2">
                Tags: {item.tags.join(", ")}
              </p>
              <ul className="text-sm text-gray-500">
                {item.addOns.map((addOn, idx) => (
                  <li key={idx}>
                    {addOn.name} (+₹{addOn.price})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CateringMenu;