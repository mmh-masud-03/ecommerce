import React from "react";
import ProductList from "./ProductList";

function FlashSale() {
  const timer = Date.now;
  return (
    <div className="flex flex-col gap-3 mx-8">
      <span className="text-xl">Just For You</span>
      <ProductList />
    </div>
  );
}

export default FlashSale;
