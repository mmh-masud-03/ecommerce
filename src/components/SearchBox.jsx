"use client";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/features/search/searchSlice";
import { fetchSearchProducts } from "@/features/search/searchThunk";
import { useState } from "react";
import { useRouter } from "next/navigation";

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSearch = (searchQuery) => {
    router.push("/products");
    dispatch(setSearchQuery(searchQuery));
    dispatch(fetchSearchProducts(searchQuery));
  };

  return (
    <div className="flex flex-row gap-1 items-center bg-gray-200 w-1/3 justify-between rounded-lg">
      <input
        type="text"
        placeholder="Search items by name or category"
        className="px-3 py-2 w-11/12 outline-none text-black rounded-lg"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FaMagnifyingGlass
        size={24}
        className="text-black ml-2 cursor-pointer"
        onClick={() => handleSearch(searchTerm)}
      />
    </div>
  );
}

export default SearchBox;
