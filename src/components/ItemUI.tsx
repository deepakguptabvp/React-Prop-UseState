import React from "react";
import ItemUiButton from "./ItemUiButton";

const ItemUI = ({ handleEdit, handleDelete, item, index }) => {
  return (
    <div
      key={index}
      className="grid grid-cols-4 gap-4 mx-auto items-center max-w-md mb-4 p-4 bg-white rounded-lg shadow-lg"
    >
      {/* Input */}
      <h2 type="text" className="text-lg text-gray-700">
        {item?.name}
      </h2>
      <h2 type="text" className="text-lg text-gray-700">
        {item?.age}
      </h2>

      <ItemUiButton title={"delete"} handleClick={() => handleDelete(item)} />
      <ItemUiButton title={"edit"} handleClick={() => handleEdit(item)} />

      {/* <button
        className="px-4 py-2 bg-red-500 text-white rounded-lg"
        onClick={() => handleDelete(item)}
      >
        Delete
      </button>

      
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-lg"
        onClick={() => handleEdit(item)}
      >
        Edit
      </button> */}
    </div>
  );
};

export default ItemUI;
