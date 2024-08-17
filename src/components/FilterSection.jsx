import React, { useState } from "react";
import { useProductContext } from "../context/productContext";

const FilterSection = () => {
  const [item, setItem] = useState("All");
  const [item2, setItem2] = useState("All");
  const {
    filters: { text, category },
    updateFilterValue,
    clearFilters,
  } = useProductContext();

  // to get unique data

  const getUniqueData = (data, property) => {
    let newData = data.map((curr) => {
      return curr[property];
    });
    return (newData = ["All", ...new Set(newData)]);
  };

  const { filters, copyProducts, products } = useProductContext();

  const categoryData = getUniqueData(products, "category");
  const companyData = getUniqueData(products, "company");
  const handleCategoryClick = (event) => {
    const { name, value } = event.target;
    updateFilterValue(event); // Call the existing updateFilterValue function
    setItem(value); // Update the selected category
  };

  const handleCompany = (event) => {
    const { name, value } = event.target;
    updateFilterValue(event);
    setItem2(value);
  };

  const handleClearFilter = (event) => {
    const { name, value } = event.target;
    clearFilters(event);
    setItem("All");
    setItem2("All");
  };

  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            className="mx-12 mt-4 mb-8 border border-gray-500 rounded px-2  focus:border-red-500 focus:border-2 focus:outline-none"
            placeholder="Search"
          />
        </form>
        {/* {
          (console.log("Filters:", filters),
          console.log("Copy Products:", copyProducts))
        } */}
      </div>
      <div>
        <div>
          <h3 className="mx-12 my-2 font-bold">Category</h3>
          <div className="flex flex-col items-start justify-start mx-12">
            {categoryData.map((curr, i) => {
              return (
                <button
                  key={i}
                  type="button"
                  name="category"
                  value={curr}
                  //onClick={updateFilterValue}
                  onClick={handleCategoryClick}
                  className={`cursor-pointer ${
                    item === curr
                      ? "text-red-500" // Active button style
                      : "" // Inactive button style
                  }`}
                >
                  {curr}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <h3 className="mx-12 my-2 font-bold">Company</h3>
        <form action="#">
          <select
            name="company"
            id="company"
            onClick={handleCompany}
            className="p-1 cursor-pointer border border-gray-300 rounded mx-12 focus:border-red-500 focus:border-2 focus:outline-none"
          >
            {companyData.map((curr, i) => {
              return (
                <option value={curr} name="company" key={i}>
                  {curr}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      {/* <div>
        <h3>Price</h3>
      </div> */}
      <div className="mx-12 my-8">
        <button
          onClick={handleClearFilter}
          className="bg-red-500 px-2 py-1 text-white rounded hover:bg-red-400"
        >
          Clear Filters
        </button>
      </div>
    </>
  );
};

export default FilterSection;
