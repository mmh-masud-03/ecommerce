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
    <div className="flex flex-col gap-2">
      <span className="text-4xl font-semibold my-5 mx-auto">
        Explore All Products of Our Shop
      </span>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mx-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
