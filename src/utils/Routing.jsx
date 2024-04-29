import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Details from "../components/Details";
import Products from "../components/Products";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Details" element={<Details />} />
      <Route path="/Products" element={<Products />} />
    </Routes>
  );
}

export default Routing;
