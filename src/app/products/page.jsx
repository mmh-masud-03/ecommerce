"use client";

import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="flex flex-col gap-2 mb-6">
      <span className="text-4xl font-semibold my-5 mx-3">
        Explore All Products of Our Shop
      </span>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 md:mx-8 mx-2">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
