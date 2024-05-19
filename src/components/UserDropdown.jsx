"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";

const UserDropdown = ({ username }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className=" border rounded-full hover:text-gray-300 flex items-center"
      >
        {username ? (
          <div className="text-sm text-white p-2">{username}</div>
        ) : (
          <FaUser />
        )}
      </button>
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50 text-base">
          <Link href="/profile">
            <div className="block px-4 py-2 hover:bg-gray-200">Profile</div>
          </Link>
          <Link href="/orders">
            <div className="block px-4 py-2 hover:bg-gray-200">Orders</div>
          </Link>
          <Link href="/address-book">
            <div className="block px-4 py-2 hover:bg-gray-200">
              Address Book
            </div>
          </Link>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-200"
            onClick={() => {
              // Add your logout logic here
              console.log("Logout clicked");
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
