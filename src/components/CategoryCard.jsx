"use client";
import React from "react";

import { useRouter } from "next/navigation";

function CategoryCard({ category, product }) {
  const router = useRouter();
  const handleSearch = (searchQuery) => {
    router.push(`/products/category/${category}`);
  };

  return (
    <button
      key={category}
      className="flex flex-row gap-3 bg-blue-300 justify-center items-center p-4 rounded-md hover:bg-blue-400"
      onClick={() => handleSearch(category)}
    >
      <img
        src={product.imageUrl}
        alt={category}
        className="rounded-full h-10 w-10"
      />{" "}
      <div className="hover:text-gray-700">{category}</div>
    </button>
  );
}

export default CategoryCard;
