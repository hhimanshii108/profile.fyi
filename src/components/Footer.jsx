import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <div className="w-full bg-gray-100 bottom-0 border-t p-8 flex items-center justify-between mb-0">
      <div>
        <NavLink to="/">
          <img src={logo} className="h-8" />
        </NavLink>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold">Our Links</h4>
        <h4>Our Storytelling Masterclass</h4>
        <h4>Privacy Policy</h4>
        <h4>Terms of Use</h4>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold">Our Social Media</h4>
        <FacebookIcon style={{ color: "#0F91F3" }} />
        <InstagramIcon style={{ color: "#FF0060" }} />
        <TwitterIcon style={{ color: "#1DA1F2" }} />
      </div>
    </div>
  );
};

export default Footer;
