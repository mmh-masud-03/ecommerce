import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductById } from "@/features/products/productThunk"; // Assuming you have a thunk to fetch product by ID
import ProductDetails from "@/components/ProductDetails"; // Assuming you have a ProductDetails component
import { useSearchParams } from "next/navigation";
const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const isLoading = useSelector((state) => state.products.isLoading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(productId));
    }
  }, [productId, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto">
      {product && <ProductDetails product={product} />}
    </div>
  );
};

export default ProductPage;
