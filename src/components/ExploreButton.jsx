"use client";
import { useRouter } from "next/navigation";
function ExploreButton() {
  const router = useRouter();
  return (
    <div className="relative bg-gradient-to-r from-indigo-100 to-red-200 w-full h-[9rem] ml-4 mt-10 rounded-lg">
      <div className="text-xl font-semibold px-3 py-3">
        {" "}
        Products From Your Trusted Brands{" "}
        <button
          className="absolute bottom-2 right-2 border rounded px-3 py-2 bg-blue-400 text-white"
          onClick={(e) => router.push("/products")}
        >
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default ExploreButton;
