import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SecurityIcon from "@mui/icons-material/Security";
import PublicIcon from "@mui/icons-material/Public";
const Services = () => {
  return (
    <>
      <div className="w-full px-20 flex items-center justify-center">
        <div className="w-11/12 flex items-center justify-between gap-8 px-10">
          <div className="w-full h-52 bg-gray-100 rounded-[20px] flex flex-col items-center justify-center gap-4">
            <div className="bg-white p-2 rounded-full cursor-pointer">
              <LocalShippingIcon style={{ color: "red" }} />
            </div>
            <p className="font-medium">Super Fast and Free Delivery</p>
          </div>
          <div className="w-full h-52 flex flex-col gap-8">
            {" "}
            <div className="h-28 w-full bg-gray-100 rounded-[20px] flex flex-row items-center justify-center gap-4">
              <div className="bg-white p-2 rounded-full cursor-pointer">
                <PublicIcon style={{ color: "red" }} />
              </div>
              <p className="font-semibold">Non-Contact Shipping</p>
            </div>
            <div className="h-28 w-full bg-gray-100 rounded-[20px] flex flex-row items-center justify-center gap-4">
              <div className="bg-white p-2 rounded-full cursor-pointer">
                <SecurityIcon style={{ color: "red" }} />
              </div>

              <p className="font-semibold">Money Back Guarantee</p>
            </div>
          </div>
          <div className="w-full h-52 bg-gray-100 rounded-[20px]">
            <div className="w-full h-52 bg-gray-100 rounded-[20px] flex flex-col items-center justify-center gap-4">
              <div className="bg-white p-2 rounded-full cursor-pointer">
                <CurrencyRupeeIcon style={{ color: "red" }} />
              </div>
              <p className="font-semibold">Super Secure Payment System</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
