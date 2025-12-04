import React from "react";
import { useCartContext } from "../context/cartContext";

const ContextTest = () => {
  const { counter, setCounter } = useCartContext();
  return (
    <div className="text-center text-xl mt-9 space-x-6">
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <span>{counter}</span>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
};

export default ContextTest;
