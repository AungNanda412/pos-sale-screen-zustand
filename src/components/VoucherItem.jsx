import { Minus, Plus } from "lucide-react";
import React from "react";
import useVoucherStore from "../store/useVoucherStore";
import { toast } from "sonner";

const VoucherItem = ({
  item: {
    id,
    product: { title, price },
    quantity,
  },
}) => {
  const { updateQuantity, removeItem } = useVoucherStore();

  const handleClickAdd = () => {
    updateQuantity(id, 1);
  };

  const handleClickMinus = () => {
    if (quantity > 1) {
      updateQuantity(id, -1);
    } else {
      if (confirm("Are you sure to remove item?")) {
        removeItem(id);
        toast.success("Item remove successfully", {
          position: "top-center"
        })
      }
    }
  };

  return (
    <div className="order-card border-b border-gray-300 py-3 px-5">
      <div className="flex justify-between items-start mb-2">
        <p>{title}</p>
        <div className="flex gap-1 items-center">
          <button className="bg-blue-50 border border-blue-400 rounded p-1 active:scale-95 duration-200">
            <Minus
              onClick={handleClickMinus}
              className="lucide lucide-minus size-3 text-blue-600"
            />
          </button>
          <p className="font-mono text-end w-5 text-xl items-center">
            {quantity}
          </p>
          <button className="bg-blue-50 border border-blue-400 rounded p-1 active:scale-95 duration-200">
            <Plus
              onClick={handleClickAdd}
              className="lucide lucide-minus size-3 text-blue-600"
            />
          </button>
        </div>
      </div>
      <div className="flex justify-between text-gray-500">
        <div className="flex gap-2 items-center">
          <p className="font-mono text-xl">{quantity}</p>
          <p className="font-mono text-xl">x</p>
          <p className="font-mono text-xl">{price}</p>
        </div>
        <p>{quantity * price}</p>
      </div>
    </div>
  );
};

export default VoucherItem;
