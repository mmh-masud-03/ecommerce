"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { useParams } from "next/navigation";
import SkeletonPulse from "@/components/SkeletonPulse";
import ProductNotFound from "@/components/ProductNotFound";
function ProductPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const params = useParams();
  const { searchQuery } = params;

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`/api/products/search/${searchQuery}`);
        if (response.status === 404) {
          setNotFound(true);
        } else if (!response.ok) {
          throw new Error("Something went wrong!");
        } else {
          const data = await response.json();
          setSearchResults(data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearchResults();
  }, [searchQuery]);

  if (isLoading) {
    return <SkeletonPulse />;
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display the error message properly
  }

  return (
    <div className="mx-2 md:mx-8 my-6">
      {searchResults.length > 0 && (
        <div className="text-xl md:text-3xl text-center font-semibold mb-6">
          Search results for {searchQuery}
        </div>
      )}
      {notFound ? (
        <ProductNotFound />
      ) : (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
          {searchResults.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductPage;
