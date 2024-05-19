"use client";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/features/cart/cartSlice";
import { toast } from "react-hot-toast";

const ProductDetails = ({ product }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="text-yellow-500">
          &#9733;
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-500">
          &#9734;
        </span>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">
          &#9733;
        </span>
      );
    }

    return stars;
  };
  const { _id, name, price, description, imageUrl } = product;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    toast.success(`${name} added to cart`);
    dispatch(
      addItemToCart({ _id, name, price, description, imageUrl, quantity: 1 })
    );
  };

  return (
    <div className="max-w-4xl mx-auto pt-6">
      <div className="grid px-3 md:px-0 grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            {renderStars()}
            <span className="ml-2 text-gray-600">
              {/* {product.rating.toFixed(1)} ({product.reviews.length} reviews) */}
            </span>
          </div>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-3xl font-semibold text-green-600 mb-8">
            ${product.price}
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        {product.reviews.map((review) => (
          <div key={review.id} className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex items-center mb-2">
              <span className="ml-2 text-gray-600">{review.author}</span>
            </div>
            <p className="text-gray-700">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
