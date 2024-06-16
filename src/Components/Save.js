import React from 'react';

const Save = () => {
  const data = [
    { size: 'Small', color: 'Red', price: 345, available: 20 },
    { size: 'Small', color: 'Blue', price: 345, available: 20 },
    { size: 'Medium', color: 'Red', price: 45, available: 20 },
    { size: 'Medium', color: 'Blue', price: 23, available: 20 },
  ];

  const totalAvailable = data.reduce((total, item) => total + item.available, 0);
  const priceRange = [Math.min(...data.map(item => item.price)), Math.max(...data.map(item => item.price))];

  return (
    
    <div className="flex flex-col items-center">
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2 bg-gray-800 text-white">Size</th>
            <th className="border border-gray-400 px-4 py-2 bg-gray-800 text-white">Color</th>
            <th className="border border-gray-400 px-4 py-2 bg-gray-800 text-white">Price</th>
            <th className="border border-gray-400 px-4 py-2 bg-gray-800 text-white">Available</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-400 px-4 py-2">{item.size}</td>
              <td className="border border-gray-400 px-4 py-2">{item.color}</td>
              <td className="border border-gray-400 px-4 py-2">{item.price}</td>
              <td className="border border-gray-400 px-4 py-2">{item.available}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex mt-4">
        <div className="border border-gray-400 px-4 py-2">
          <span className="font-bold">Available</span>: {totalAvailable}
        </div>
        <div className="border border-gray-400 px-4 py-2 ml-2">
          <span className="font-bold">Price range</span>: {priceRange.join('-')}
        </div>
      </div>
    </div>
  );
};

export default Save;
