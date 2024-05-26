import React from "react";
import { Link } from "react-alice-carousel";

const ProductNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <div className="text-9xl font-bold text-gray-600">🕵🏻‍♀️</div>
        <h1 className="text-4xl font-bold text-gray-800 mt-8">
          Product Not Found
        </h1>
        <p className="text-gray-600 mt-4">
          Oops! The product you&apos;re looking for doesn&apos;t seem to exist.
        </p>
      </div>
      <div className="mt-8">
        <Link
          href="/"
          className="bg-indigo-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-600 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ProductNotFound;
