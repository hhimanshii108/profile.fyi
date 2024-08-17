import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <div className="w-full bottom-0 border-t border-black-500 px-8 p-2 flex items-center justify-between ">
      <div>
        <NavLink to="/">
          <img src={logo} className="h-8" />
        </NavLink>
      </div>
      <div>
        <h4>Our Storytelling Masterclass</h4>
        <h4>Privacy Policy</h4>
        <h4>Terms of Use</h4>
      </div>
    </div>
  );
};

export default Footer;
