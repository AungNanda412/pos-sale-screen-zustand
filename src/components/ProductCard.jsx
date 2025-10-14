import React from "react";
import useVoucherStore from "../store/useVoucherStore";
import { toast } from "sonner";

const ProductCard = ({ product: { id, title, image, price, category } }) => {
  const { items, addItems, updateQuantity } = useVoucherStore();
  const isExistedItem = items.find((el) => el.product.id === id);

  const handleClick = () => {
    if (isExistedItem) {
      updateQuantity(isExistedItem.id, 1);
    } else {
      const newItem = {
        id: Date.now(),
        product: { id, title, price },
        quantity: 1,
      };
      addItems(newItem);
      toast.success("Added to voucher", {
        position: "top-center"
      })
    }
  };

  return (
    <div
      onClick={handleClick}
      className=" relative product-card border border-gray-300 overflow-hidden rounded-lg bg-white active:scale-95 duration-200"
    >
      {isExistedItem && (<div className=" absolute right-3 top-3 bg-blue-500 text-white rounded-full text-xs px-2 py-1 "> Added</div>)}
      <img
        src={image}
        alt="product photo"
        className="h-36 w-full object-cover product-img"
      />
      <div className="p-4 flex flex-col h-[140px] border-t border-blue-100">
        <div>
          <span className="text-xs text-blue-600 bg-blue-50 border border-blue-400 rounded px-2 py-0.5 product-category-name">
            {category}
          </span>
        </div>
        <h5 className="text-sm my-2 line-clamp-2 product-name">{title}</h5>
        <div className="flex items-center gap-2 text-gray-500 mt-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p className="text-sm">
            <span className="font-mono product-price">{price}</span>
            Kyat
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
