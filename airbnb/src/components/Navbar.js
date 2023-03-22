import React from "react";
import airBnb from "../assets/airbnb.png";

export default function Navbar() {
  return (
    <nav className="shadow-shadow-nav h-20 flex py-5 px-9">
      <img src={airBnb} className="max-w-full" alt="logo" />
    </nav>
  );
}
