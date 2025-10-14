import React, { useState } from "react";
import CategoryBtn from "./CategoryBtn";
import CategoryAddBtn from "./CategoryAddBtn";
import useCategoryStore from "../store/useCategoryStore";

const CategoryList = () => {

  const { categories } = useCategoryStore();
  // const [categories, setCategory] = useState([
  //   { id: 0, title: "All" },
  //   { id: 1, title: "Bread" },
  //   { id: 2, title: "Cake" },
  //   { id: 3, title: "Coffee" },
  //   { id: 4, title: "Smoothie" },
  // ]);

  // const [activeCategory, setactiveCategory] = useState(0);

  // const storeCategory = (newCategoryTitle) => {
  //   const newCategory = {
  //     id: Date.now(),
  //     title: newCategoryTitle,
  //   };
  //   setCategory([...categories, newCategory]);
  // };

  return (
    <>
      <div className=" flex flex-col gap-3 mb-6">
        {categories.map((el) => (
          <CategoryBtn
            key={el.id}
            category={el}
            // activeCategory={activeCategory}
            // setactiveCategory={setactiveCategory}
          />
        ))}
      </div>
      <CategoryAddBtn />
    </>
  );
};

export default CategoryList;
