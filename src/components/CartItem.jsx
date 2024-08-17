import React from "react";
import FormatPrice from "../helpers/FormatPrice";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { useCartContext } from "../context/cartContext";
import CartAmount from "./CartAmount";

const CartItem = ({ id, name, image, price, amount }) => {
  const { removeItem, setDecrease, setIncrease } = useCartContext();
  return (
    // <div className="">
    //   <div className="flex items-center justify-between mt-4 border border-red-500 gap-20">
    //     <div className="flex items-center ">
    //       <div className="flex gap-4 items-center">
    //         <img src={image} alt={id} className="h-10" />
    //         <p>{name}</p>
    //       </div>
    //     </div>
    //     <div className="">
    //       <p>
    //         <FormatPrice price={price} />
    //       </p>
    //     </div>
    //     <div>{amount}</div>

    //     <div>{subtotal}</div>
    //     <div>Delete </div>
    //   </div>
    // </div>
    <div className="grid grid-cols-5 gap-4 items-center text-center py-2 border-b ">
      {/* Image and Name */}
      <div className="flex items-center gap-4">
        <img src={image} alt={name} className="w-20 h-12 object-cover" />
        <p className="text-left">{name}</p>
      </div>

      {/* Price */}
      <p>
        <FormatPrice price={price} />
      </p>

      {/* Quantity */}
      {/* <p>{amount}</p> */}
      <div className="items-center ml-12">
        <CartAmount
          amount={amount}
          setDecrease={() => setDecrease(id)}
          setIncrease={() => setIncrease(id)}
        />
      </div>

      {/* Subtotal */}
      <p>
        <FormatPrice price={price * amount} />
      </p>

      {/* Remove Button */}
      <div className="items-center">
        <DeleteForeverIcon
          style={{ color: "red" }}
          onClick={() => removeItem(id)}
          className="cursor-pointer"
        />
      </div>
      {/* <button className="text-red-500 hover:text-red-700">Remove</button> */}
    </div>
  );
};

export default CartItem;
