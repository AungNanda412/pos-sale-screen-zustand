import React from "react";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import CategoryAddBtn from "./CategoryAddBtn";
import ProductAddBtn from "./ProductAddBtn";
import InventoryHeader from "./InventoryHeader";

const InventorySection = () => {
  return (
    <section className="h-full col-span-5 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 relative flex flex-col">
      
      <InventoryHeader />
      <div className="grid grid-cols-6 gap-5 px-5 flex-1">
        <div className="col-span-1">
          <CategoryList />
        </div>
        <div className="col-span-5 relative">
          <div className="h-[850px] overflow-scroll">
            <ProductList />
            <ProductAddBtn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventorySection;
