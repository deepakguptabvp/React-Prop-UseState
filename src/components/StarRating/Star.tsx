import React from "react";

const Star = ({index, rating, handleRatingCount, item}) => {
  return (
    <div
      className="flex flex-row "
      style={{ backgroundColor: index < rating ? "gray" : "" }}
    >
      <button
        onClick={() => {
          handleRatingCount(index);
        }}
      >
        {item}
      </button>
    </div>
  );
};

export default Star;
