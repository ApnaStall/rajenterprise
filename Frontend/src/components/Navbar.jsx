import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";

import { FaHome, FaTrophy, FaInfoCircle } from "react-icons/fa";
import { BsShopWindow } from "react-icons/bs";
import { PiPackageFill } from "react-icons/pi";
import { RiWechatLine } from "react-icons/ri";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-full transition 
     ${isActive ? "bg-white text-[#03519f]" : "text-[#b3c7d2]"}`;

  return (
    <>
    <nav className="w-full bg-linear-to-r from-[#00e0e8] to-[#03519f] text-white fixed top-0 left-0 z-50">
      <div className="max-w-10xl mx-auto flex items-center justify-between px-4 py-6">

        <div
          className="flex items-center justify-between w-full md:w-auto cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full mr-3" />
          <h1 className="text-2xl font-bold tracking-wide">Raj Enterprice</h1>
          <span className="md:hidden text-white text-3xl ml-4 mr-5">☰</span>
        </div>

        <ul className="hidden md:flex gap-6 text-lg font-medium">

          <NavLink to="/" className={linkClasses}>
            <FaHome /> Home
          </NavLink>

          <NavLink to="/shop" className={linkClasses}>
            <BsShopWindow /> Shop
          </NavLink>

          <NavLink to="/services" className={linkClasses}>
            <PiPackageFill /> Services
          </NavLink>

          <NavLink to="/quality" className={linkClasses}>
            <FaTrophy /> Quality
          </NavLink>

          <NavLink to="/about" className={linkClasses}>
            <FaInfoCircle /> About Us
          </NavLink>

          <NavLink to="/contact" className={linkClasses}>
            <RiWechatLine /> Contact Us
          </NavLink>

        </ul>
      </div>

      {open && (
        <ul className="items-center md:hidden flex flex-col gap-4 py-4 px-6 text-lg font-medium">

          <NavLink to="/" className={linkClasses}>
            <FaHome /> Home
          </NavLink>

          <NavLink to="/shop" className={linkClasses}>
            <BsShopWindow /> Shop
          </NavLink>

          <NavLink to="/services" className={linkClasses}>
            <PiPackageFill /> Services
          </NavLink>

          <NavLink to="/quality" className={linkClasses}>
            <FaTrophy /> Quality
          </NavLink>

          <NavLink to="/about" className={linkClasses}>
            <FaInfoCircle /> About Us
          </NavLink>

          <NavLink to="/contact" className={linkClasses}>
            <RiWechatLine /> Contact Us
          </NavLink>

        </ul>
      )}
    </nav>
    </>
  );
}

export default Navbar;
