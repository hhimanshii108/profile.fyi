import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "../context/productContext";
import PageNavigation from "./PageNavigation";
import ProductImages from "./ProductImages";
import FormatPrice from "../helpers/FormatPrice";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import SecurityIcon from "@mui/icons-material/Security";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Star from "./Star";
import AddToCart from "./AddToCart";
import HashLoader from "react-spinners/HashLoader";
//API
const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <HashLoader
          color="#FF2422"
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  return (
    <>
      <PageNavigation title={name} />
      <div className="w-full px-20 text-sm">
        <div className="grid gap-16 grid-cols-2">
          <div className="flex justify-center items-center">
            <ProductImages images={image} />
          </div>
          <div className="flex flex-col items-start justify-center gap-2">
            <h2 className="text-xl font-bold">{name}</h2>
            <Star stars={stars} reviews={reviews} />
            <p className="font-bold">
              MRP:{" "}
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="font-bold text-sky-500">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="w-full flex justify-between items-center  mb-2">
              <div className="text-center">
                <LocalShippingIcon
                  className="bg-gray-200/50 rounded-full"
                  style={{
                    color: "red",
                    height: "40px",
                    width: "40px",
                    padding: "8px",
                  }}
                />
                <p>Free Delivery</p>
              </div>
              <div className="text-center">
                <PublishedWithChangesIcon
                  className="bg-gray-200/50 rounded-full"
                  style={{
                    color: "red",
                    height: "40px",
                    width: "40px",
                    padding: "8px",
                  }}
                />
                <p>Replacement</p>
              </div>
              <div className="text-center">
                <SecurityIcon
                  className="bg-gray-200/50 rounded-full"
                  style={{
                    color: "red",
                    height: "40px",
                    width: "40px",
                    padding: "8px",
                  }}
                />
                <p>2 Year Warranty</p>
              </div>
              <div className="text-center">
                <EmojiEventsIcon
                  className="bg-gray-200/50 rounded-full"
                  style={{
                    color: "red",
                    height: "40px",
                    width: "40px",
                    padding: "8px",
                  }}
                />
                <p>Claim Reward</p>
              </div>
            </div>
            <hr className="w-full"></hr>

            <div className="flex justify-between gap-24 text-md ">
              <p>
                Available:{" "}
                <span className="font-bold">
                  {stock > 0 ? "In Stock" : "Out Of Stock"}
                </span>
              </p>
              <p>
                ID: <span className="font-bold">{id}</span>
              </p>
              <p>
                Brand: <span className="font-bold">{company}</span>
              </p>
            </div>
            <hr className="w-full"></hr>
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
