import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.image} className="h-80 w-full rounded-md" alt="" />
      <span>{product.name}</span>
    </div>
  );
};

export default ProductCard;
