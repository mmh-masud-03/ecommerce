"use client";
import Link from "next/link";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/features/cart/cartSlice";
import toast from "react-hot-toast";

function ProductCard({ product }) {
  const { _id, name, price, description, imageUrl } = product;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({ _id, name, price, description, imageUrl, quantity: 1 })
    );
    toast.success(`${name} added to cart`);
  };

  return (
    <div className="flex flex-col items-center bg-slate-200 p-4 text-center pb-8 rounded">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`Image of ${name}`}
          className="rounded-lg w-64 h-56 mx-auto mb-3 hover:scale-110"
        />
      ) : (
        <div className="h-48 w-24 bg-gray-300 flex items-center justify-center">
          <span>No Image Available</span>
        </div>
      )}
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm my-3 line-clamp-2 break-words">{description}</p>
      <p className="text-xl font-semibold ">${price}</p>
      <div className="flex flex-row justify-between items-center gap-5 mt-5">
        <button
          onClick={handleAddToCart}
          className="flex flex-row justify-center items-center gap-5 bg-blue-600 px-4 py-2 rounded-lg text-lg text-white"
        >
          <FaCartShopping /> <span>Add to cart</span>
        </button>
        <Link href={""}>
          <FaHeart className="text-4xl text-gray-400" />
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
