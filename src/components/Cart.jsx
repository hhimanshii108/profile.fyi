import React from "react";
import { useCartContext } from "../context/cartContext";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FormatPrice from "../helpers/FormatPrice";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  console.log(cart);
  if (cart.length === 0)
    return (
      <>
        <div className="w-full h-screen flex flex-col items-center justify-center gap-8">
          <h1 className="text-7xl font-bold text-gray-300">OOPS</h1>
          <h1 className="text-xl">
            Cart is empty! <ShoppingCartCheckoutIcon style={{ color: "red" }} />
          </h1>
          <NavLink to="/">
            <button className="p-2 bg-red-500 cursor-pointer text-white">
              Continue Shopping
            </button>
          </NavLink>
        </div>
      </>
    );
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center w-3/4">
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4 w-full text-center font-semibold m-2 py-2">
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
            <p>Remove</p>
          </div>
          <hr className="w-full" />

          {/* Table Rows */}
          <div className="w-full max-h-[50vh] overflow-y-auto">
            {cart.map((curr) => {
              return <CartItem key={curr.id} {...curr} />;
            })}
          </div>
        </div>
        <hr className="w-3/4 mb-4"></hr>
        <div className="w-3/4 flex justify-between">
          <NavLink to="/">
            <button className="bg-sky-500 text-white py-2 px-2 cursor-pointer">
              Continue Shopping
            </button>
          </NavLink>
          <button
            className="bg-red-500 text-white py-2 px-2 cursor-pointer mr-12"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
        <div className="w-3/4 flex justify-center mt-2">
          <div className="w-72">
            <div className="grid grid-rows-3 gap-2 bg-gray-100 p-2 ">
              <div className="grid grid-cols-2 gap-4">
                <p className="text-gray-500 text-sm">Subtotal :</p>
                <p className="font-bold text-sm">
                  <FormatPrice price={total_price} />
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <p className="text-gray-500 text-sm">Shipping Fee :</p>
                <p className="font-bold text-sm">
                  <FormatPrice price={shipping_fee} />
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <p className="text-gray-500 text-sm">Order Total :</p>
                <p className="font-bold text-sm">
                  <FormatPrice price={shipping_fee + total_price} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-3/4 flex justify-end">
        <div className="w-72">
          <div className="grid grid-rows-3 gap-4 bg-gray-100 p-4 rounded">
            <div className="grid grid-cols-2 gap-4">
              <p className="text-gray-500">Subtotal :</p>
              <p className="font-bold">
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <p className="text-gray-500">Shipping Fee :</p>
              <p className="font-bold">
                <FormatPrice price={shipping_fee} />
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <p className="text-gray-500">Order Total :</p>
              <p className="font-bold">
                <FormatPrice price={shipping_fee + total_price} />
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Cart;
