import React, { useState } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import Product from "../../ShoppingCartApp/Product";

const   Body = ({ activeTab }) => {
  const [cartItems, setCartItems] = useState([
    // { id: 1, name: "Daal", price: 200, quantity: 0 },
    // { id: 2, name: "Atta", price: 150, quantity: 0 },
  ]);

  const handleIncreaseQuantity = (id, product) => {
    console.log(id);
    let newCartItems = [...cartItems];
    let flag = 0;
    for (let i = 0; i < cartItems.length; i++) {
      if (id === cartItems[i].id) {
        newCartItems[i].quantity = newCartItems[i].quantity + 1;
        flag = 1;
      }
    }
    setCartItems(newCartItems);
    if (flag === 0) {
      newCartItems.push({ ...product, quantity: 1 });
      setCartItems(newCartItems);
    }
  };
  const handleDecreaseQuantity = (id) => {
    let newCartItems = [...cartItems];
    for (let i = 0; i < cartItems.length; i++) {
      if (id === cartItems[i].id) {
        newCartItems[i].quantity = newCartItems[i].quantity - 1;
      }
    }
    setCartItems(newCartItems);
    // console.log(id);
  };

  if (activeTab === "Home") {
    return (
      <Home
        cartItems={cartItems}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleIncreaseQuantity={handleIncreaseQuantity}
      />
    );
  } else if (activeTab === "About") {
    return <About />;
  } else if (activeTab === "Contact") {
    return <Contact />;
  } else if (activeTab === "Cart") {
    return (
      <Cart
        cartItems={cartItems}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
      />
    );
  }

  return <div>Body</div>;
};

export default Body;
