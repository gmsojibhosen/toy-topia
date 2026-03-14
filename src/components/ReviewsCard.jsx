import React from 'react';

const ReviewsCard = ({ review }) => {
    const { customerName, rating, comment, date } = review;
 
    
    return (
      <div className="bg-white shadow-lg p-6 rounded-xl">
        <h3 className="text-black font-semibold text-lg">{customerName}</h3>

        <p className="text-gray-600 mt-2">"{comment}"</p>
        <div className="flex items-center justify-between mt-3">
          <p className="text-yellow-500">⭐ {rating}</p>

          <p className="text-yellow-500">{date}</p>
        </div>
      </div>
    );
};

export default ReviewsCard;