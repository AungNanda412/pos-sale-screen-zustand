import { Search } from "lucide-react";
import React, { useRef, useState } from "react";
import useProductStore from "../store/useProductStore";

const ProductSearchInput = () => {
//   const [keyword, setKeyword] = useState("");

    const inputRef = useRef();

  const{ setQ } = useProductStore();
//   console.log(keyword);

  const handleChange = (e) => {
    setQ(inputRef.current.value);
  };

  return (
    <div id="search-form">
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search className="size-5 text-gray-500" />
        </div>
        <input
          type="search"
          onChange={handleChange}
          ref={inputRef}
          
          id="search"
          name="search"
          className="block w-full px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-trabg-transparent0 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          required
        />
      </div>
    </div>
  );
};

export default ProductSearchInput;
