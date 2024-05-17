"use client";
import { useEffect, useState } from "react";

function FilterProducts() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState({});

  const getAllProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleFilter = (e) => {
    e.preventDefault();
    // Construct query parameters based on selected filters
    const queryParams = {};
    if (selectedCategory) queryParams.category = selectedCategory;
    if (minPrice) queryParams.minPrice = minPrice;
    if (maxPrice) queryParams.maxPrice = maxPrice;
    // Call onFilter function with constructed query parameters
    setQuery(queryParams);
  };

  return (
    <div className="bg-slate-200 p-4 rounded-md">
      <div className="mb-4">
        <span className="block text-lg font-semibold mb-2">
          Get the best product within your budget
        </span>
        <form onSubmit={handleFilter} className="flex flex-row gap-4">
          <div>
            <label htmlFor="category" className="block mb-1">
              Category:
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-2 border rounded-md w-full"
            >
              {...products.map((product) => (
                <option value={product.category}>{product.category}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="minPrice" className="block mb-1">
              Minimum Price:
            </label>
            <input
              type="number"
              id="minPrice"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="p-2 border rounded-md w-full"
              placeholder="Enter minimum price"
            />
          </div>
          <div>
            <label htmlFor="maxPrice" className="block mb-1">
              Maximum Price:
            </label>
            <input
              type="number"
              id="maxPrice"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="p-2 border rounded-md w-full"
              placeholder="Enter maximum price"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md mt-4"
          >
            Find
          </button>
        </form>
      </div>
    </div>
  );
}

export default FilterProducts;
