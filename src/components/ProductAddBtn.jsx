import { Plus } from "lucide-react";
import React from "react";
import CreateProductDrawer from "./CreateProductDrawer";
import useProductStore from "../store/useProductStore";

const ProductAddBtn = () => {
  const { setProductDrawerStatus } = useProductStore();
  const handleClick = () => {
    setProductDrawerStatus(true);
  };

  return (
    <>
      <button onClick={handleClick} className="absolute size-10 text-white bg-blue-600 rounded-full flex justify-center items-center bottom-5 right-5 active:scale-90 duration-200">
        <Plus className="size-6" />
      </button>
      <CreateProductDrawer />
    </>
  );
};

export default ProductAddBtn;
