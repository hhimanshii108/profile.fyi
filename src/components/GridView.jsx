import React from "react";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <>
      <section className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((curr) => {
            return <Product key={curr.id} {...curr} />;
          })}
        </div>
      </section>
    </>
  );
};

export default GridView;
