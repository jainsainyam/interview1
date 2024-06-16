// src/VariantSelector.js
import React, { useState } from 'react';

const Product = () => {
  const [prices, setPrices] = useState({
    small: { blue: 345.30, red: 345.30 },
    medium: { blue: 23.00, red: 45.00 },
  });

  const [availability, setAvailability] = useState({
    small: { blue: 20, red: 20 },
    medium: { blue: 20, red: 20 },
  });

  const handlePriceChange = (size, color, value) => {
    setPrices({
      ...prices,
      [size]: {
        ...prices[size],
        [color]: parseFloat(value),
      },
    });
  };

  const handleAvailabilityChange = (size, color, value) => {
    setAvailability({
      ...availability,
      [size]: {
        ...availability[size],
        [color]: parseInt(value),
      },
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Variants</h1>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">COLOR</h2>
        <div className="flex space-x-2 mt-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Blue</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Red</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Add colour</button>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">SIZE</h2>
        <div className="flex space-x-2 mt-2">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Small</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Medium</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Add size</button>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Group by:</h2>
        <select className="bg-gray-200 text-gray-700 px-4 py-2 rounded mt-2">
          <option>Size</option>
          <option>Color</option>
        </select>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Variants</h2>

        <div className="mt-4">
          {Object.keys(prices).map((size) => (
            <div key={size} className="mb-4">
              <h3 className="text-md font-medium">{size.charAt(0).toUpperCase() + size.slice(1)}</h3>
              <div className="ml-4">
                {Object.keys(prices[size]).map((color) => (
                  <div key={color} className="flex items-center space-x-4 mt-2">
                    <span>{size} | {color}</span>
                    <input
                      type="number"
                      value={prices[size][color]}
                      
                      onChange={(e) => handlePriceChange(size, color, e.target.value)}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
                    />
                    <input
                      type="number"
                      value={availability[size][color]}
                      onChange={(e) => handleAvailabilityChange(size, color, e.target.value)}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Save</button>
    </div>
  );
};

export default Product;
