import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
const Product = (curr) => {
  const { id, name, image, price, category } = curr;
  return (
    <>
      <NavLink to={`/singleProduct/${id}`}>
        <div className="relative w-52 m-2 bg-white flex flex-col items-center justify-center transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300 ...">
          <div>
            <img src={image} className="w-52 h-40" />
            <figcaption className="absolute top-1.5 right-1.5 text-gray-500 bg-gray-100 px-4 py-1 rounded-full">
              {category}
            </figcaption>
          </div>
          <div className="w-full p-2 flex items-center justify-between">
            <h3>{name}</h3>
            <p className="text-sky-500">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Product;
