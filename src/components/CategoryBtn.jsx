import React from "react";
import useCategoryStore from "../store/useCategoryStore";

const CategoryBtn = ({
  category: { id, title },
  // activeCategory,
  // setactiveCategory,
}) => {
  const { activeCategory, selectCategory } = useCategoryStore();

  const isActive = title === activeCategory;
  // const isActive = id === false;

  const baseClasses =
    "duration-200 text-sm text-end px-4 py-2 rounded-lg hover:bg-blue-100 hover:border-blue-400 active:bg-blue-100 active:border-blue-400";
  const activeClasses = "bg-blue-100 border border-blue-400 text-blue-600";
  const inactiveClasses = "bg-transparent border border-transparent text-black";

  const handleClick = () => {
    // setactiveCategory(id);
    selectCategory(title);
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {title}
    </button>
  );
};

export default CategoryBtn;
