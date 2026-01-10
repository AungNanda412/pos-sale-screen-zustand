import React, { useState } from "react";
import ProductCard from "./ProductCard";
import useCategoryStore from "../store/useCategoryStore";
import useProductStore from "../store/useProductStore";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

const ProductList = () => {
  // const [products, setProduct] = useState();
  // const { filteredProducts, q } = useProductStore();
  // const { activeCategory } = useCategoryStore();

  const {data:products} = useSWR("http://localhost:8000/products",fetcher)

  return (
    <div className=" grid grid-cols-3 gap-5">
      {/* {filteredProducts(activeCategory, q).length === 0 && (
        <div className="col-span-full last:block hidden">
          <div className="product-card border border-gray-300 overflow-hidden rounded-lg bg-white p-5 flex flex-col items-center justify-center">
            <img src="/empty.svg" alt="" className="h-[100px] mb-5" />
            <p> There is no Product</p>
          </div>
        </div>
      )} */}
      {products?.map((el) => (
        <ProductCard product={el} key={el.id} />
      ))}
    </div>
  );
};

export default ProductList;
