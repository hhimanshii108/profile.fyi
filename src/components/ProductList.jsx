import React from "react";
import { useProductContext } from "../context/productContext";
import GridView from "./GridView";
const ProductList = () => {
  const { copyProducts } = useProductContext();
  return <GridView products={copyProducts} />;
};

export default ProductList;
