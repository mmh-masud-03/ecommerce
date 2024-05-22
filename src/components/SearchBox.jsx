"use client";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import { useRouter } from "next/navigation";

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const handleSearch = (searchQuery) => {
    router.push(`/products/search/${searchQuery}`);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(searchTerm);
    }
  };
  return (
    <div className="flex flex-row gap-1 items-center bg-gray-200 md:w-1/3 justify-between rounded-lg w-full">
      <input
        type="text"
        placeholder="Search items by name or category"
        className="px-3 py-2 w-11/12 outline-none text-black rounded-lg text-sm"
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <FaMagnifyingGlass
        size={24}
        className="text-black ml-2 cursor-pointer mx-3"
        onClick={() => handleSearch(searchTerm)}
      />
    </div>
  );
}

export default SearchBox;
