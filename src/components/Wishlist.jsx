"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromWishlist } from "@/features/wishlist/wishlistSlice";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { addItemToCart } from "@/features/cart/cartSlice";

const Wishlist = ({ setShowWishlist }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center min-h-[40vh]">
      <div
        className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full max-h-screen overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={() => setShowWishlist(false)}
        >
          <FaTimes />
        </button>
        <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
        {wishlistItems.length === 0 ? (
          <p className="text-red-600">Your wishlist is empty</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {wishlistItems.map((item) => (
              <li
                key={item._id}
                className="py-4 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      {item.name}
                    </h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaShoppingCart className="md:hidden text-3xl bg-blue-500 px-4 py-4 mr-3" />
                  <button
                    disabled
                    onClick={() => handleAddToCart(item)}
                    className="hidden md:flex bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => dispatch(removeItemFromWishlist(item._id))}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  >
                    <FaTimes />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-8">
          <Link
            href="/products/all"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
