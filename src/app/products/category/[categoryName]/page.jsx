"use client";
import HeroSection from "@/components/HeroSection";
import React, { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { useParams } from "next/navigation";

function CategoryPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const params = useParams();
  const { categoryName } = params;
  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`/api/products/search/${categoryName}`, {
          cache: "no-store",
        });
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearchResults();
  }, [categoryName]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="mx-8 mb-6">
      <div className="text-3xl font-semibold text-center m-4">
        All Products under {categoryName} category
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {searchResults.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
