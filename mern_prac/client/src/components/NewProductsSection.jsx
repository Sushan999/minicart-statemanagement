import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const NewProductsSection = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/product/products");

      if (!res.ok) return alert("Error fetching products");

      const data = await res.json();

      setProducts(data.products);
    } catch (error) {
      alert("Internal Server Error");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, i) => (
          <Link to="/check">
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewProductsSection;
