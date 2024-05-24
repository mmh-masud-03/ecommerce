"use client";

import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import SkeletonPulse from "@/components/SkeletonPulse";
import FilterProducts from "@/components/FilterProducts";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getAllProducts = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    setProducts(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return isLoading ? (
    <SkeletonPulse />
  ) : (
    <div className="flex flex-col gap-2 mb-6">
      <span className=" text-xl md:text-3xl font-semibold my-5 mx-3 text-center">
        Explore All Products of Our Shop
      </span>
      <FilterProducts />
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 md:mx-8 mx-2">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
