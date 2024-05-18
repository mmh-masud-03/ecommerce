"use client";
import { useEffect, useState } from "react";
import { getAllCategories } from "@/utils/utilityFunctions";
import { useDispatch } from "react-redux";
import { setFilterQuery } from "@/features/filter/filterSlice";
import { fetchFilterProducts } from "@/features/filter/filterThunk";
import FilteredProducts from "./FilteredProducts";
function FilterProducts() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const dispatch = useDispatch();
  const query = `category=${selectedCategory}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
  console.log(query);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getAllCategories();
        setCategories(categories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = (e, filteQuery) => {
    e.preventDefault();
    dispatch(setFilterQuery(filteQuery));
    dispatch(fetchFilterProducts(filteQuery));
  };

  return (
    <div>
      <div className="bg-slate-200 p-4 rounded-md mx-8 my-6">
        <div className="mb-4">
          <span className="block text-2xl font-semibold mb-6">
            Get the best product within your budget
          </span>
          <form
            className="flex flex-row gap-4"
            onSubmit={(e) => handleSubmit(e, query)}
          >
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
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
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
              className="bg-blue-500 text-white p-2 rounded-md mt-7 h-10"
            >
              Find
            </button>
          </form>
        </div>
      </div>
      <div className="mx-8 mb-6">
        <FilteredProducts />
      </div>
    </div>
  );
}

export default FilterProducts;
