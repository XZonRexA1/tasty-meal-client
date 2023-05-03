import React from "react";
import mealPhoto from "../../../public/mealPhoto.avif";
const AboutUs = () => {
  return (
    <>
      <h2 className="mt-28 mb-12  font-extrabold text-3xl text-orange-700 mx-auto">
        About Us
      </h2>
      <div className="bg-orange-500 grid grid-cols-1 gap-x-28 mx-4  rounded md:grid-cols-2">
        <div className="m-8">
          <h2 className="text-5xl mb-4 text-white  md:mt-0 font-extrabold text-left">
            Experience The Sublime!!!!
          </h2>
          <p className="text-left text-2xl font-bold font-mono">
            Tasty Meal is a website offering an array of delicious recipes for
            every taste bud. With easy-to-follow guides and step-by-step
            instructions, 
            Tasty Meal has something for everyone, including vegetarian, vegan,
            and gluten-free options. Explore new flavors and cuisines, and
            elevate your cooking game with Tasty Meal.
          </p>
        </div>
        <img
          className="w-full md:ps-44 rounded"
          src={mealPhoto}
          alt="meal picture"
        />
      </div>
    </>
  );
};

export default AboutUs;
