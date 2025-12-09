import { createContext, useContext, useEffect, useReducer } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const reducer = (state, action) => {
    if (action.type === "ADD") {
      alert(`Added to cart ${action.payload.name}`);
      return [...state, action.payload];
    }

    if (action.type === "REMOVE") {
      return state.filter((item) => item.id !== action.payload.id);
    }

    return state;
  };

  // Load cart from localStorage when app starts
  const initializer = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [cart, dispatch] = useReducer(reducer, [], initializer);

  // Save cart automatically when it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
