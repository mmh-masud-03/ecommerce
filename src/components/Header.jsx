"use client";
import React from "react";
import Link from "next/link";
import { FaCartShopping, FaHeart, FaUser } from "react-icons/fa6";
import SearchBox from "./SearchBox";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import Image from "next/image";

const Header = () => {
  const [showCart, setShowCart] = React.useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-800 text-white p-4 z-50 shadow-md ">
      <nav className="flex justify-between items-center">
        <div>
          <Link href="/" className="text-2xl font-semibold">
            <Image src={"/assets/logo.jpg"} alt="logo" width={50} height={50} />{" "}
          </Link>
        </div>
        <SearchBox />
        <ul className="flex space-x-3 gap-4 text-2xl mr-3">
          <li>
            <Link className="text-xl" href={"/products/all"}>
              All Products
            </Link>
          </li>
          <li>
            <button
              className="relative hover:text-gray-300"
              onClick={toggleCart}
            >
              {totalQuantity > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {totalQuantity}
                </span>
              )}
              <FaCartShopping />
            </button>
          </li>
          <li>
            <button className="hover:text-gray-300">
              <FaHeart />
            </button>
          </li>
          <li>
            <Link href="/account" className="hover:text-gray-300 ">
              <FaUser />
            </Link>
          </li>
        </ul>
      </nav>
      {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
    </header>
  );
};

export default Header;
