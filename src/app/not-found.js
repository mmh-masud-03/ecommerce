import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-md mx-auto text-center">
        <div className="text-9xl font-bold text-indigo-600">404 🚫</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/">
          <a className="bg-indigo-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-600 transition duration-300">
            Go Back Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
