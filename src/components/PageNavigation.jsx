import React from "react";
import { NavLink } from "react-router-dom";

const PageNavigation = ({ title }) => {
  return (
    <div className="h-10 flex justify-start items-center text-md pl-5">
      <NavLink to="/" className="hover:text-red-500">
        Products{" "}
      </NavLink>
      /{title}
    </div>
  );
};

export default PageNavigation;
