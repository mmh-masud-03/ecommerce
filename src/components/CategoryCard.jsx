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
      className="flex flex-row gap-3 bg-green-100 justify-center items-center p-4 rounded-md"
      onClick={() => handleSearch(category)}
    >
      <img
        src={product.imageUrl}
        alt={category}
        className="rounded-full h-10 w-10"
      />{" "}
      <div>{category}</div>
    </button>
  );
}

export default CategoryCard;
