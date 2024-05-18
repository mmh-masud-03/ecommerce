"use client";
import { FaCircleDot } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { setSearchQuery } from "@/features/search/searchSlice";
import { fetchSearchProducts } from "@/features/search/searchThunk";
import { useDispatch } from "react-redux";

function TopCategoryCard({ name }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSearch = (searchQuery) => {
    router.push(`/products/${name}`);
    dispatch(setSearchQuery(searchQuery));
    dispatch(fetchSearchProducts(searchQuery));
  };
  return (
    <button
      className=" flex flex-row text-lg gap-1 items-center px-2 cursor-pointer"
      onClick={() => handleSearch(name)}
    >
      <FaCircleDot className="text-slate-600 mr-1" />
      <span>{name}</span>
    </button>
  );
}

export default TopCategoryCard;
