import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black/70 h-10 w-full text-white flex items-center gap-10 justify-center px-10">
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-400" : "",
            e.isActive ? "font-medium" : "",
          ].join(" ");
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-400" : "",
            e.isActive ? "font-medium" : "",
          ].join(" ");
        }}
        to="/Details"
      >
        Details
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-400" : "",
            e.isActive ? "font-medium" : "",
          ].join(" ");
        }}
        to="/Products"
      >
        Products
      </NavLink>
    </nav>
  );
}

export default Navbar;
