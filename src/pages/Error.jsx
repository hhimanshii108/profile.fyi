import React from "react";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-8xl text-slate-400 pb-8 m-4 mt-20">404</h2>
        <p className="pb-8 m-8">
          <center>
            The page you are looking for does not exist. But you can click the
            button below to go back to the products page.
          </center>
        </p>
        <NavLink to="/">
          <button className="p-2 m-8 bg-red-500 text-white rounded-full">
            Go Back →
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
