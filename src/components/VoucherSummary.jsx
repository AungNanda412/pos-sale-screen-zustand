import React from "react";
import useVoucherStore from "../store/useVoucherStore";

const VoucherSummary = () => {
  const { items } = useVoucherStore();
  const total = items.reduce(
    (pv, cv) => pv + cv.product.price * cv.quantity,
    0
  );
  const tax = total * 0.05;

  const netTotal = total + tax;

  return (
    <div id="summary" className="p-5">
      <table className="w-full font-mono">
        <tbody>
          <tr className="text-sm text-end">
            <td className="py-1">Total :</td>
            <td className="py-1">{total}</td>
          </tr>
          <tr className="text-sm text-end">
            <td className="py-1">Tax (5%) :</td>
            <td className="py-1">{tax}</td>
          </tr>
          <tr className="text-sm text-end">
            <td className="py-1">Net Total :</td>
            <td className="py-1">{netTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VoucherSummary;
