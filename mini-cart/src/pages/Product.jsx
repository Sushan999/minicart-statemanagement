import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/data";
import { useCartContext } from "../context/cartContext";

const Product = () => {
  const { addToCart } = useCartContext();
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <div>Product not found</div>;
  return (
    <div className="text-center mt-10 ">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="mx-auto mt-4 w-96 h-auto rounded-lg"
      />
      <p className="mt-2">Rating: {product.rating}</p>
      <div className="text-center">
        <button
          onClick={() => addToCart(product)}
          className="px-4 py-1 border rounded-md mt-1 cursor-pointer hover:bg-gray-100"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
