import React from "react";
import { useCartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart, dispatch } = useCartContext();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0)
    return <h2 className="text-center mt-10 text-xl">Your cart is empty 😐</h2>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6 text-center">Your Cart</h1>

      <div className="space-y-4">
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border p-4 rounded-lg shadow-sm"
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="h-20 w-20 object-cover rounded-md"
            />

            {/* Product Info */}
            <div className="flex-1 ml-4">
              <h2 className="font-medium">{item.name}</h2>
              <p className="text-gray-600">Rs. {item.price}</p>
            </div>

            {/* Remove Button */}
            <button
              onClick={() =>
                dispatch({ type: "REMOVE", payload: { id: item.id } })
              }
              className="px-3 py-1 border rounded-md hover:bg-gray-100"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div className="text-right mt-6 text-xl font-semibold">
        Total: Rs. {totalPrice}
      </div>
    </div>
  );
};

export default CartPage;
