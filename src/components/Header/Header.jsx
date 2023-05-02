import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-orange-700 text-white p-4 rounded md:flex justify-between m-4 text-left md:items-center">
      <h3 className="font-semibold text-3xl font-mono">TastyMeal</h3>
      <nav className="flex space-x-4 font-mono">
        <Link to="/home">Home</Link>
        <Link to="/home">Blog</Link>
        <span><img src="../../assets/TastyMealShop.svg" alt="User Profile" /></span>
      </nav>
    </div>
  );
};

export default Header;
