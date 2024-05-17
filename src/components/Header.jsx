"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaMagnifyingGlass,
  FaCartShopping,
  FaHeart,
  FaUser,
} from "react-icons/fa6";

const Header = () => {
  const [search, setSearch] = useState("");
  const handleSearchProduct = async () => {
    const res = await fetch(`/api/products/search/${search}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <header className="bg-blue-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <div>
          <Link href="/" className="text-2xl font-semibold">
            Gadget Hub
          </Link>
        </div>
        <div className="flex flex-row gap-1 items-center bg-gray-200 w-1/3 justify-between rounded-lg">
          <FaMagnifyingGlass
            onClick={handleSearchProduct}
            size={24}
            className="text-black ml-2"
          />
          <input
            type="text"
            placeholder="Search items by name or category"
            className="px-3 py-2 w-11/12 outline-none text-black rounded-lg"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <ul className="flex space-x-3 gap-4 text-2xl mr-3">
          <li>
            <Link href="/cart" className="hover:text-gray-300">
              <FaCartShopping />
            </Link>
          </li>
          <li>
            <Link href="/wishlist" className="hover:text-gray-300">
              <FaHeart />
            </Link>
          </li>
          <li>
            <Link href="/account" className="hover:text-gray-300">
              <FaUser />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
