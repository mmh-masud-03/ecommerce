"use client";
import { useSelector } from "react-redux";
import HeroSection from "@/components/HeroSection";
import React from "react";
import ProductCard from "@/components/ProductCard";

function CategoryPage() {
  const searchResults = useSelector((state) => state.search.searchResults);
  const isLoading = useSelector((state) => state.search.isLoading);
  const error = useSelector((state) => state.search.error);
  const categoryName = useSelector((state) => state.search.searchQuery);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <div className="text-3xl font-semibold text-center m-4">
        All Products under {categoryName} category
      </div>
      <div className="grid grid-cols-4 gap-4">
        {searchResults.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
