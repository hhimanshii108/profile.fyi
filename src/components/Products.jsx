import React from "react";
import { useProductContext } from "../context/productContext";
import FilterSection from "./FilterSection";
import Sort from "./Sort";
import ProductList from "./ProductList";
import HashLoader from "react-spinners/HashLoader";

const Products = () => {
  const { products, isLoading } = useProductContext();
  //console.log(products);
  if (isLoading) {
    return (
      <>
        <div className="w-full h-screen flex items-center justify-center">
          <HashLoader
            color="#FF2422"
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </>
    );
  }
  return (
    <div className="w-full grid grid-cols-custom">
      <div>
        <FilterSection />
      </div>
      <section>
        <div>
          <Sort />
        </div>
        <div>
          <ProductList />
        </div>
      </section>
    </div>
  );
};

export default Products;
