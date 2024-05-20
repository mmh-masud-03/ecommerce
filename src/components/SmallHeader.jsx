"use client";
import React from "react";
import Link from "next/link";
import { FaCartShopping, FaHeart, FaU, FaUser } from "react-icons/fa6";
import SearchBox from "./SearchBox";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import { useSelector } from "react-redux";
import Image from "next/image";
import { getUserNameFromCookie } from "@/utils/utilityFunctions";
import UserDropdown from "./UserDropdown";

const SmallHeader = () => {
  const [showCart, setShowCart] = React.useState(false);
  const [showWishlist, setShowWishlist] = React.useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalWishlist = useSelector(
    (state) => state.wishlist.totalWishlistItems
  );

  const toggleCart = () => {
    setShowCart(!showCart);
  };
  const toggleWishlist = () => {
    setShowWishlist(!showWishlist);
  };
  const username = getUserNameFromCookie();

  return (
    <header className="fixed bottom-0 left-0 right-0 bg-blue-800 text-slate-300 p-4 z-50 shadow-md md:hidden">
      <nav className="flex justify-between items-center">
        <div>
          <Link href="/" className="text-2xl font-semibold">
            <Image src={"/assets/logo.jpg"} alt="logo" width={50} height={50} />{" "}
          </Link>
        </div>
        <ul className="flex flex-row items-stretch space-x-3 gap-4 text-4xl mr-3">
          <li>
            <Link className="text-xl" href={"/products/all"}>
              <Image
                src={"/assets/products.svg"}
                alt="menu"
                width={35}
                height={35}
                className="text-white"
              />
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
            <button className="hover:text-gray-300" onClick={toggleWishlist}>
              {totalWishlist > 0 && (
                <span className="absolute  bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {totalWishlist}
                </span>
              )}
              <FaHeart />
            </button>
          </li>
          {/* <li>
            <UserDropdown username={username} />
          </li> */}
        </ul>
      </nav>
      {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
      {showWishlist && (
        <Wishlist
          showWishlist={showWishlist}
          setShowWishlist={setShowWishlist}
        />
      )}
    </header>
  );
};

export default SmallHeader;
