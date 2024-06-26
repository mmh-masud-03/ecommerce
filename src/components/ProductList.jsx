"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const res = await fetch("/api/products/");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
      {products.slice(0, 12).map((product) => (
        <ProductCard key={product._id} product={product} /> // Using product.id as key
      ))}
    </div>
  );
}

export default ProductList;
