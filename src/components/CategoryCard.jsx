"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/features/search/searchSlice";
import { fetchSearchProducts } from "@/features/search/searchThunk";
import { useRouter } from "next/navigation";

function CategoryCard({ category, product }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSearch = (searchQuery) => {
    router.push(`/products/category/${category}`);
    dispatch(setSearchQuery(searchQuery));
    dispatch(fetchSearchProducts(searchQuery));
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
