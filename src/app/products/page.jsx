"use client";
import { useSelector } from "react-redux";
import HeroSection from "@/components/HeroSection";
import React from "react";
import ProductCard from "@/components/ProductCard";

function productPage() {
  const searchResults = useSelector((state) => state.search.searchResults);
  const isLoading = useSelector((state) => state.search.isLoading);
  const error = useSelector((state) => state.search.error);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <HeroSection />
      <div className="grid grid-cols-4">
        {searchResults.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default productPage;
