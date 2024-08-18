import React from "react";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import { useProductContext } from "../context/productContext";

const Sort = () => {
  const { products, sorting } = useProductContext();
  return (
    <div className="flex justify-between m-1 p-2 pr-20">
      <div>
        <button>
          <ViewCompactIcon className="bg-gray-200" />
        </button>
      </div>
      <div> Products Available </div>
      <div className="p-1 cursor-pointer">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            onClick={sorting}
            className="p-1 cursor-pointer border border-gray-300 rounded focus:border-red-500 focus:border-2 focus:outline-none"
          >
            <option value="lowest">Price (lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price (highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">A-Z</option>
            <option value="#" disabled></option>
            <option value="z-a">Z-A</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
