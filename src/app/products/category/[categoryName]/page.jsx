"use client";
import HeroSection from "@/components/HeroSection";
import React, { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { useParams } from "next/navigation";
import SkeletonPulse from "@/components/SkeletonPulse";
import ProductNotFound from "@/components/ProductNotFound";

function CategoryPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const params = useParams();
  const { categoryName } = params;
  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`/api/products/search/${categoryName}`);
        if (response.status === 404) {
          setNotFound(true);
          setIsLoading(false);
          return;
        }
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
    return <SkeletonPulse />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return notFound ? (
    <ProductNotFound />
  ) : (
    <div className=" mx-2 md:mx-8 mb-6">
      <div className="text-xl md:text-3xl font-semibold text-center m-4">
        All Products under {categoryName} category
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {searchResults.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
