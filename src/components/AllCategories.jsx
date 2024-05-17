"use client";

import { useEffect, useState } from "react";

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
    <div className="flex flex-col mx-8 mb-7">
      <span className="text-xl mb-2">All Categories</span>
      <div className="grid grid-cols-7 gap-4 ">
        {categories.map((category) => {
          const product = products.find(
            (product) => product.category === category
          );
          return (
            <div
              key={category}
              className="flex flex-row gap-3 bg-green-100 justify-center items-center p-4 rounded-md"
            >
              <img
                src={product.imageUrl}
                alt={category}
                className="rounded-full h-10 w-10"
              />{" "}
              <div>{category}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllCategories;
