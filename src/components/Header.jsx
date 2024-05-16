"use client";
import Link from "next/link";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Header = () => {
  const [search, setSearch] = useState("");
  const handleSearchProduct = async () => {
    const res = await fetch(`/api/products/search/${search}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <div>
          <Link href="/" className="text-xl font-bold">
            Next Commerce
          </Link>
        </div>
        <div className="flex flex-row gap-1 items-center bg-gray-200 w-1/3 justify-between">
          <FaMagnifyingGlass
            onClick={handleSearchProduct}
            size={24}
            className="text-black ml-2"
          />
          <input
            type="text"
            placeholder="Search items by name or category"
            className="px-3 py-2 w-11/12 outline-none text-black"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/shop" className="hover:text-gray-300">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/cart" className="hover:text-gray-300">
              Cart
            </Link>
          </li>
          <li>
            <Link href="/account" className="hover:text-gray-300">
              Account
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
