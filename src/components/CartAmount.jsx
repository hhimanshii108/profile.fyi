import React from "react";
import { NavLink } from "react-router-dom";

const CartAmount = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="flex w-full justify-between gap-8">
      <div className="flex gap-4 items-center">
        <button
          onClick={() => setDecrease()}
          className="hover:bg-gray-100 rounded-full w-5"
        >
          -
        </button>
        <div className="text-sky-500 text-lg">{amount}</div>
        <button
          onClick={() => setIncrease()}
          className="hover:bg-gray-100 rounded-full w-5"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartAmount;
