import React from "react";

const CategorySkeletonLoader = () => {
    const widths = ["w-full", "w-4/5", "w-3/4", "w-5/6", "w-2/3"];
  return (
    <div className="flex flex-col gap-3 mb-6 animate-pulse">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="h-9 w-full rounded-lg bg-gray-200"
        />
      ))}
    </div>
  );
};

export default CategorySkeletonLoader;
