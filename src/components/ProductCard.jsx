"use client";
import Link from "next/link";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/features/cart/cartSlice";
import { addItemToWishlist } from "@/features/wishlist/wishlistSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

function ProductCard({ product }) {
  const router = useRouter();
  const { _id, name, price, description, imageUrl } = product;
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  //filtering the wishlist items to check if the product is already in the wishlist
  const isItemInWishlist = wishlistItems.find((item) => item._id === _id);
  const handleAddToCart = () => {
    dispatch(
      addItemToCart({ _id, name, price, description, imageUrl, quantity: 1 })
    );
    toast.success(`${name} added to cart`);
  };
  const handleAddToWishlist = () => {
    dispatch(addItemToWishlist({ _id, name, price, description, imageUrl }));
    toast.success(`${name} added to wishlist`);
  };
  const handleClick = (e) => {
    router.push(`/products/${_id}`);
  };

  return (
    <div className="flex flex-col hover:bg-slate-200 justify-between items-center bg-slate-100 p-4 text-center pb-8 rounded ">
      <div onClick={handleClick} className="cursor-pointer">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`Image of ${name}`}
            className="rounded-lg w-44 h-32 md:w-64 md:h-56 mx-auto mb-3 hover:scale-110"
          />
        ) : (
          <div className="h-48 w-24 bg-gray-300 flex items-center justify-center">
            <span>No Image Available</span>
          </div>
        )}
        <h2 className=" text-lg md:text-xl font-semibold">{name}</h2>
        <p className="text-xs md:text-sm my-3 line-clamp-2 break-words">
          {description}
        </p>
        <p className="text-green-600 text-md md:text-xl font-semibold ">
          ${price}
        </p>
      </div>

      <div className="flex flex-row justify-between items-center gap-5 mt-5">
        <button
          onClick={handleAddToCart}
          className="flex flex-row justify-center items-center gap-5 bg-blue-600 px-4 py-2 rounded-lg text-lg text-white hover:scale-105"
        >
          <FaCartShopping /> <span className="hidden md:flex">Add to cart</span>
        </button>
        <button onClick={handleAddToWishlist}>
          <FaHeart
            className={
              isItemInWishlist
                ? `text-4xl text-red-600`
                : `text-4xl text-gray-400`
            }
          />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
