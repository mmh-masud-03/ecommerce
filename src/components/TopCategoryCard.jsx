"use client";
import { FaCircleDot } from "react-icons/fa6";
import { useRouter } from "next/navigation";

function TopCategoryCard({ name }) {
  const router = useRouter();
  const handleSearch = () => {
    router.push(`/products/category/${name}`);
  };
  return (
    <button
      className=" flex flex-row text-lg gap-1 items-center px-2 cursor-pointer hover:text-blue-600"
      onClick={() => handleSearch(name)}
    >
      <FaCircleDot className="text-slate-600 mr-1" />
      <span>{name}</span>
    </button>
  );
}

export default TopCategoryCard;
