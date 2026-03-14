import { useEffect, useState } from "react";
import ReviewsCard from "./ReviewsCard";

const Reviews = () => {
  const [customerReviews, setCustomerReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setCustomerReviews(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-12">
      <h2 className="text-black text-3xl font-bold text-center my-6">
        Customer Reviews
        <span className="block w-24 h-1 bg-yellow-400 mx-auto mt-2 rounded"></span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {customerReviews.map((review) => (
          <ReviewsCard review={review} key={review.id}></ReviewsCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
