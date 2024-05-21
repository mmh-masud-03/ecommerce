"use client";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
function FilteredProducts() {
  const filterResults = useSelector((state) => state.filter.filterResults);
  const isLoading = useSelector((state) => state.filter.isLoading);
  const error = useSelector((state) => state.filter.error);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
      {filterResults.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default FilteredProducts;
