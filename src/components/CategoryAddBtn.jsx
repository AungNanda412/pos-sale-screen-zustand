import { Plus } from "lucide-react";
import React, { useState } from "react";
import CreateCategoryDrawer from "./CreateCategoryDrawer";

const CategoryAddBtn = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleClick = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="active:scale-90 duration-200 hover:scale-90 bg-transparent border border-transparent text-sm text-end px-4 py-2 rounded-lg w-full flex justify-end items-center gap-2"
      >
        <Plus className="size-3" />
        <span>Create</span>
      </button>

      <CreateCategoryDrawer setOpenDrawer={setOpenDrawer} openDrawer={openDrawer}  />
    </>
  );
};

export default CategoryAddBtn;
