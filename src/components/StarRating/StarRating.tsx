import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({ starList }) => {
  const [rating, setRating] = useState(0);
  const handleRatingCount = (index) => {
    const newRating = index + 1;
    setRating(newRating);
  };
  return (
    <div className="flex items-center justify-center p-3 gap-4">
      {starList.map((item, index) => {
        return (
          <Star
          key={index}
            item={item}
            index={index}
            rating={rating}
            handleRatingCount={handleRatingCount}
          />
        );
      })}
      <h1>{rating}</h1>
    </div>
  );
};

export default StarRating;
