import React from "react";
import { useCartContext } from "../context/cartContext";

const CartPage = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCartContext();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="max-w-7xl mx-auto mt-4 rounded-sm">
      {cart.length == 0 ? (
        <div className="text-2xl font-medium">Your cart is Empty</div>
      ) : (
        <div className="space-y-3">
          {cart.map((c, i) => (
            <div className="border px-2 py-4  border-gray-400 flex justify-between">
              <div className="">
                <img src={c.image} alt="" className="h-30 w-30 rounded-md" />
                <div>{c.name}</div>
                <div>{c.rating}</div>
                <div>
                  Rs. {c.price} * {c.quantity} = Rs. {c.price * c.quantity}
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <button onClick={() => removeFromCart(c.id)}>Remove</button>
                <div className="flex gap-3">
                  <button
                    onClick={() => increaseQuantity(c.id)}
                    className="border px-4 rounded-sm cursor-pointer"
                  >
                    +
                  </button>
                  <span>{c.quantity}</span>
                  <button
                    onClick={() => decreaseQuantity(c.id)}
                    className="border px-4 rounded-sm cursor-pointer"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="text-right mt-8 text-2xl">Total: Rs. {totalPrice}</div>
    </div>
  );
};

export default CartPage;
