import React from "react";
import trusted from "../assets/trusted.png";
const Trusted = () => {
  return (
    <div className="w-full h-40 bg-red-500 px-20 flex flex-col gap-8 items-center justify-center mt-20 mb-20">
      <h1 className="text-lg text-white font-semibold">
        Trusted By 100+ Customers
      </h1>
      <img src={trusted} />
    </div>
  );
};

export default Trusted;
