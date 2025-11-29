import { useContext, useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // const addToCart = (product) => {
  //   setCart((prevCart) => [
  //     ...prevCart,
  //     {
  //       id: product.id,
  //       name: product.name,
  //       rating: product.rating,
  //       image: product.image,
  //       price: product.price,
  //     },
  //   ]);
  //   alert("Added to Cart");
  // };

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product already exists in cart
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // If it exists, increase quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If it doesn't exist, add new with quantity 1
        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            image: product.image,
            rating: product.rating,
            price: product.price,
            quantity: 1,
          },
        ];
      }
    });
  };
  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product));
  };

  const value = {
    cart,
    removeFromCart,
    counter,
    setCounter,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
