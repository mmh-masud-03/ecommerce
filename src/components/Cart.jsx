"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItemFromCart,
} from "@/features/cart/cartSlice";
import { FaTimes } from "react-icons/fa";

const Cart = ({ setShowCart }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full max-h-screen overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={() => setShowCart(false)}
        >
          <FaTimes />
        </button>
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty</p>
        ) : (
          <div>
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
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
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-600">
                        {item.quantity} x ${item.price} = ${item.totalPrice}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item._id))}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l"
                    >
                      -
                    </button>
                    <span className="bg-gray-100 text-gray-800 font-bold py-2 px-4">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(increaseQuantity(item._id))}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r"
                    >
                      +
                    </button>
                    <button
                      onClick={() => dispatch(removeItemFromCart(item._id))}
                      className="ml-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex justify-end">
              <div className="bg-gray-100 rounded-md px-4 py-2">
                <p className="text-gray-600">Total Quantity: {totalQuantity}</p>
                <p className="text-gray-600 font-bold">
                  Total Price: ${totalPrice.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
