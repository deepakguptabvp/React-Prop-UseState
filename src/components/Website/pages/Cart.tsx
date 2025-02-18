import React from "react";

const Cart = ({
  cartItems,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="space-y-4">
        {cartItems.map((item) => {
          return (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                {/* <p className="text-gray-600">ID: {item.id}</p> */}
                <p className="text-green-600 font-medium">
                  Price: ₹{item.price}
                </p>
                <div className="flex items-center space-x-2">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <p className="text-sm text-gray-600"> {item.quantity}</p>
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition-colors"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
