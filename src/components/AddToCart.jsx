import React from "react";
import { useState } from "react";
import CartAmount from "./CartAmount";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cartContext";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock } = product;
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <>
      <div>
        <CartAmount
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />
        <NavLink to="/cart" onClick={() => addToCart(id, amount, product)}>
          <button className="text-decoration-none max-w-auto bg-indigo-600 text-white py-3.5 px-6 border-none uppercase text-center cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-95">
            Add To Cart
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default AddToCart;
