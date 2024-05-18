"use client";
import React from "react";
import Link from "next/link";
import { FaCartShopping, FaHeart, FaUser } from "react-icons/fa6";
import SearchBox from "./SearchBox";
import Cart from "./Cart";
const Header = () => {
  const [showCart, setShowCart] = React.useState(false); // Add state to track the cart visibility

  const toggleCart = () => {
    setShowCart(!showCart); // Toggle the cart visibility
  };

  return (
    <header className="bg-blue-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <div>
          <Link href="/" className="text-2xl font-semibold">
            Gadget Hub
          </Link>
        </div>
        <SearchBox />
        <ul className="flex space-x-3 gap-4 text-2xl mr-3">
          <li>
            <button className="hover:text-gray-300" onClick={toggleCart}>
              <FaCartShopping />
            </button>
          </li>
          <li>
            <button className="hover:text-gray-300">
              <FaHeart />
            </button>
          </li>
          <li>
            <Link href="/account" className="hover:text-gray-300">
              <FaUser />
            </Link>
          </li>
        </ul>
      </nav>
      {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}{" "}
      {/* Render the Cart component conditionally */}
    </header>
  );
};

export default Header;
