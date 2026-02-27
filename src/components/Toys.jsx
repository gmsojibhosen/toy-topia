import React from 'react';

const Toys = ({ toys }) => {
    const { toyName, rating, availableQuantity, price, pictureURL } = toys;
    return (
      <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition">
        <div className="rounded-2xl">
          <img
            className="w-full bg-white h-50 rounded-2xl"
            src={pictureURL}
            alt="Kids Toys"
          />
        </div>
        <h2 className="text-xl font-bold text-gray-700 mb-2 mt-5">{toyName}</h2>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500 text-lg">⭐</span>
            <span className="text-gray-600 font-medium">{rating}</span>
          </div>

          <p className="text-gray-600 mb-1">
            <span className="font-medium">Remaining:</span> {availableQuantity}
          </p>
        </div>

        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-medium text-gray-600">$ {price}</p>

          <button className="w-1/2 bg-yellow-400  py-2 rounded-xl hover:bg-yellow-400 transition">
            View More
          </button>
        </div>
      </div>
    );
};

export default Toys;