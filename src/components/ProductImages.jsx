import React from "react";
import { useState } from "react";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState("");
  return (
    <>
      <div className="grid grid-cols-[0.4fr_1fr] gap-2">
        <div className="m-2">
          {images.map((curr, index) => {
            return (
              <figure
                onClick={() => {
                  setMainImage(curr);
                }}
                className="p-2"
                key={index}
              >
                <img src={curr.url} alt={curr.filename} key={index} />
              </figure>
            );
          })}
        </div>
        <div className="grid place-items-center order-1">
          <img
            className="max-w-full h-auto shadow-md"
            src={mainImage ? mainImage.url : images[0].url}
            alt={mainImage.filename}
          />
        </div>
      </div>
    </>
  );
};

export default ProductImages;
