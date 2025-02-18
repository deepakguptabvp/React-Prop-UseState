import React, { useState } from "react";

const productArr = [
  { id: 1, name: "Daal", price: 200 },
  { id: 2, name: "Atta", price: 150 },
];

const Home = ({ cartItems, handleIncreaseQuantity }) => {
  const [productItems, setProductItems] = useState(productArr);

  console.log(cartItems);

  const handleAddQuantity = (id) => {
    // let newProductItems = [...productItems];
    // for (let i = 0; i < productItems.length; i++) {
    //   if (id === productItems[i].id) {
    //     newProductItems[i].quantity = productItems[i].quantity + 1;
    //   }
    // }
    // console.log(newProductItems);
    // setProductItems(newProductItems);
  };
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productItems.map((item) => {
          let productInCart = null;
          for (let i = 0; i < cartItems.length; i++) {
            if (item.id === cartItems[i].id) {
              productInCart = cartItems[i];
            }
          }
          console.log(productInCart);
          return (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-2">
                {/* <p className="text-sm text-gray-500">Product #{item.id}</p> */}
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-green-600 font-medium">₹{item.price}</p>
                <p className="text-sm text-gray-600">
                  Quantity: {productInCart?.quantity || 0}
                </p>
                <button
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md
                 hover:bg-blue-700 transition-colors"
                  onClick={() => {
                    handleIncreaseQuantity(item.id, item);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
