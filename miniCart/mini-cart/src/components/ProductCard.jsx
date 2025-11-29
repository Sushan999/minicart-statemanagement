import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";

const ProductCard = ({ products }) => {
  const { addToCart } = useCartContext();

  return (
    <>
      {products.map((product, id) => (
        <div key={id}>
          <Link to={`/product/${product.id}`} className="group">
            <div className="px-2 mt-2">
              <img
                src={product.image}
                alt=""
                className="h-60 w-60 md:w-90 md:h-90  object-cover hover:scale-105 transition duration-300"
              />
              <div className="text-center mt-2">{product.name}</div>
              <div className="text-center mt-2">Rs. {product.price}</div>
            </div>
          </Link>
          <div className="text-center">
            <button
              onClick={() => addToCart(product)}
              className="px-4 py-1 border rounded-md mt-1 cursor-pointer hover:bg-gray-100"
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
