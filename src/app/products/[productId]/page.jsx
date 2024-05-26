"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProductDetails from "@/components/ProductDetails";
import SkeletonPulse from "@/components/SkeletonPulse";
import ProductNotFound from "@/components/ProductNotFound";

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const getProduct = async () => {
    try {
      const response = await fetch(`/api/products/${productId}`);
      if (response.status === 500) {
        setNotFound(true);
        setLoading(false);
        return;
      }
      console.log("----------", response.status);
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
    return <SkeletonPulse />;
  }

  return (
    <>{notFound ? <ProductNotFound /> : <ProductDetails product={product} />}</>
  );
}

export default ProductPage;
