"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProductDetails from "@/components/ProductDetails";

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const getProduct = async () => {
    try {
      const response = await fetch(`/api/products/${productId}`, {
        cache: "no-store",
      });
      const product = await response.json();
      setProduct(product);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  };
  useEffect(() => {
    getProduct();
  }, [productId]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!product) {
    return <div>Product not found</div>;
  }
  return <ProductDetails product={product} />;
}

export default ProductPage;
