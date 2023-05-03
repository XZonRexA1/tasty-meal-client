import React from "react";
import menuPhoto from "../../../public/menuPhoto.avif";
const Menu = () => {
  return (
    <>
      <h2 className="mt-4 font-extrabold text-3xl text-orange-700  bg-orange-300 py-2 mx-4 rounded">
        Menus
      </h2>
      <div className="grid md:grid-cols-2 mt-12 gap-x-4 mx-4">
        <img className="h-50 rounded" src={menuPhoto} alt="Menu Photo" />
        <div>
          <h2 className="text-3xl mt-8 md:mt-0 font-extrabold text-left">
            Browse our traditional menus <br /> or let us create something new
            for you!!!
          </h2>
          <hr className="border-orange-500 mt-2 h-4" />
          <ol className="text-left space-y-4 text-3xl text-orange-300 mx-8 mt-4 font-bold list-disc">
            <li>Dinner Menu</li>
            <li>Lunch Menu</li>
            <li>BreakFast Menu</li>
            <li>Brunch Menu</li>
            <li>Happy Hour Menu</li>
            <li>Dessert Menu</li>
            <li>Kids Menu</li>
            <li>Vegetarian Menu</li>
            <li>Vegan Menu</li>
        
          </ol>
        </div>
      </div>
    </>
  );
};

export default Menu;
