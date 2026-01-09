import React, { useEffect, useState } from "react";
import CategoryBtn from "./CategoryBtn";
import CategoryAddBtn from "./CategoryAddBtn";
import useCategoryStore from "../store/useCategoryStore";
import CategorySkeletonLoader from "./CategorySkeletonLoader";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())
const CategoryList = () => {

  // const { categories,setCategory } = useCategoryStore();
  // const [isLoading, setIsLoading] = useState(true);
  const {data: categories, isLoading, error} = useSWR("http://localhost:8000/categories",fetcher)

  useEffect(() =>{
    //data fetch
    // fetch("http://localhost:8000/categories")
    // .then((res) => res.json() )
    // .then((json) => setCategory(json) )
    // setIsLoading(false)
  } ,[]);

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
        {isLoading && <CategorySkeletonLoader />}
        {categories?.map((el) => (
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
