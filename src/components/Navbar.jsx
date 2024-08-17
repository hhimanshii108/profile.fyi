import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartContext } from "../context/cartContext";
const Navbar = () => {
  const { total_item } = useCartContext();
  return (
    <>
      <div className="bg-gray-100 ... pl-8 pr-12 p-2 flex items-center justify-between ">
        <div>
          <NavLink to="/">
            <img src={logo} className="h-8" />
          </NavLink>
        </div>
        <div>
          <NavLink to="/cart" className="relative ">
            {" "}
            <ShoppingCartIcon
              className="relative"
              style={{ color: "#1D3966" }}
            />
            <span
              className="absolute w-6 h-6 bg-red-500 text-white rounded-full grid place-items-center"
              style={{ top: "-40%", left: "70%" }}
            >
              {total_item}
            </span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
