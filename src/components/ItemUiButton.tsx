import React from "react";

const ItemUiButton = ({ title, handleClick }) => {
  return (
    <button
      className="px-4 py-3 bg-cyan-500 text-white rounded-lg"
      onClick={handleClick}
    >
      {title}
    </button>
  );  
};

export default ItemUiButton;
