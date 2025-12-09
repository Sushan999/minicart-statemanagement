import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/data";

const ProductsSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
        <ProductCard products={products} />
      </div>
    </div>
  );
};

export default ProductsSection;
