import React, { useState } from "react";
import ProductCard from "./ProductCard";
import useCategoryStore from "../store/useCategoryStore";
import useProductStore from "../store/useProductStore";

const ProductList = () => {
  // const [products, setProduct] = useState();
  const { filteredProducts, q } = useProductStore();
  const { activeCategory } = useCategoryStore();

  return (
    <div className=" grid grid-cols-3 gap-5">
      {filteredProducts(activeCategory, q).length === 0 && (
        <div className="col-span-full last:block hidden">
          <div className="product-card border border-gray-300 overflow-hidden rounded-lg bg-white p-5 flex flex-col items-center justify-center">
            <img src="/empty.svg" alt="" className="h-[100px] mb-5" />
            <p> There is no Product</p>
          </div>
        </div>
      )}
      {filteredProducts(activeCategory,q).map((el) => (
        <ProductCard product={el} key={el.id} />
      ))}
    </div>
  );
};

export default ProductList;
