import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartContext } from "../context/cartContext";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { total_item } = useCartContext();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <>
      <div className="bg-gray-100 ... pl-8 pr-12 p-2 flex flex-row items-center justify-between ">
        <div>
          <NavLink to="/">
            <img src={logo} className="h-8" />
          </NavLink>
        </div>
        <div className="flex gap-12 ">
          <NavLink to="/" className="hover:text-red-500">
            <p className="font-semibold">Home</p>
          </NavLink>

          <NavLink to="/products" className="hover:text-red-500">
            {" "}
            <p className="font-semibold">Products</p>
          </NavLink>
          <NavLink to="/contact" className="hover:text-red-500">
            {" "}
            <p className="font-semibold">Contact</p>
          </NavLink>
          {/* <p className="text-gray-500">Welcome, Himanshi</p> */}
          {isAuthenticated && <h1 className="text-gray-500">{user.name}</h1>}

          {isAuthenticated ? (
            <button
              className="px-2 bg-red-500 text-sm text-white hover:bg-red-600"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              LOG OUT
            </button>
          ) : (
            <button
              className="px-2 bg-red-500 text-sm text-white hover:bg-red-600"
              onClick={() => loginWithRedirect()}
            >
              LOG IN
            </button>
          )}

          <NavLink to="/cart" className="relative">
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
