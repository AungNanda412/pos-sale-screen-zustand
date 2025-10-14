import { X } from "lucide-react";
import useProductStore from "../store/useProductStore";
import ProductCreateForm from "./ProductCreateForm";

const CreateProductDrawer = ({}) => {
  const { productDrawerStatus, setProductDrawerStatus } = useProductStore();
  const handleClose = () => {
    // setProductDrawerStatus(false);
  };
  return (
    <div
      className={`top-0 left-0 z-40 fixed h-screen w-[400px] bg-white duration-300 ${
        productDrawerStatus ? "translate-x-0 shadow-2xl" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-start p-5 mb-5">
        <h3 className="font-bold text-xl">Create new category</h3>
        <X onClick={handleClose} />
      </div>
      <ProductCreateForm />
    </div>
  );
};

export default CreateProductDrawer;
