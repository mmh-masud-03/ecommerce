"use client";

import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

function AllCategories() {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const res = await fetch("/api/products/");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  // Extract unique categories
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div className="flex flex-col mx-2 md:mx-8 mb-7">
      <span className="text-xl mb-2">All Categories</span>
      <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-7 ">
        {categories.map((category) => {
          const product = products.find(
            (product) => product.category === category
          );
          return (
            <CategoryCard
              category={category}
              product={product}
              key={category}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AllCategories;
