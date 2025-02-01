import React from "react";

const CartList = ({ cart, updateQuantity, removeFromCart }) => {
  
  return (
    <div>
      {" "}
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price} x {item.quantity} = ₹
            {item.price * item.quantity}
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartList;
