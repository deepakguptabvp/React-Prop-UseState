import React from "react";
import CartList from "./CartList";

const Cart = ({ totalPrice, cart, updateQuantity, removeFromCart }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <CartList
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      )}
      <h3>Total: ₹{totalPrice}</h3>
    </div>
  );
};

export default Cart;
