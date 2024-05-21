import React from "react";

const SkeletonPulse = () => {
  return (
    <div className="bg-gray-300 animate-pulse rounded-lg">
      <div className="flex justify-between px-4 py-3">
        <div className="h-6 bg-gray-400 rounded-full w-24"></div>
        <div className="h-6 bg-gray-400 rounded-full w-12"></div>
      </div>
      <div className="h-4 bg-gray-400 rounded-full mx-4 mb-2"></div>
      <div className="h-4 bg-gray-400 rounded-full mx-4 mb-4"></div>
      <div className="h-16 bg-gray-400 rounded-lg mx-4 mb-4"></div>
      <div className="flex justify-between px-4 mb-4">
        <div className="h-6 bg-gray-400 rounded-full w-16"></div>
        <div className="h-6 bg-gray-400 rounded-full w-20"></div>
      </div>
    </div>
  );
};

export default SkeletonPulse;
