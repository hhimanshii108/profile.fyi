import React from "react";
import landingImage from "../assets/landingImage.jpg";
import Services from "../components/Services";
import { NavLink } from "react-router-dom";
import Trusted from "../components/Trusted";
const Home = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="w-11/12 h-auto grid grid-cols-2 px-20 gap-2 items-center justify-center no-scrollbar py-20">
          <div className="flex flex-col justify-start gap-4">
            <p className="text-xl text-gray-500">WELCOME TO</p>
            <p className="text-5xl font-bold">
              The <span className="text-red-500">Gift</span> Store
            </p>
            <p className="text-gray-900">
              Welcome to our gift store, where every present tells a story and
              every item is chosen with care. Whether you're celebrating a
              special occasion or just want to show someone you care, we offer a
              diverse selection of unique and thoughtful gift.
            </p>
            <NavLink to="/products">
              {" "}
              <button className="w-32 bg-red-500 py-2 text-white text-sm hover:bg-red-600">
                SHOP NOW
              </button>
            </NavLink>
          </div>
          <div className="flex justify-end">
            <div className="h-64 w-96 bg-gray-100 relative ml-8 mb-20"></div>
            <img
              src={landingImage}
              className="h-64 w-96  absolute top-44 mr-12"
            />
          </div>
        </div>
      </div>
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
