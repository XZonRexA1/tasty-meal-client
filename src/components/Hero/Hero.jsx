import React from "react";

const Hero = () => {
  return (
    <div className="flex m-4 justify-center gap-x-6  bg-orange-400 rounded">
      <div className="text-left ml-4">
      <h3 className="font-bold font-sans text-6xl ml-4 mt-52">
        Welcome and Enjoy
        Our Delicious Tasty Meal
      </h3>
      <button className="rounded-lg bg-orange-500
      hover:bg-orange-300 text-white px-4 py-2 mt-4 ml-5 text-1xl">Contact Us</button>
      </div>
      <img 
      className="rounded"
        src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
        alt="food banner Image"
      />
    </div>
  );
};

export default Hero;
