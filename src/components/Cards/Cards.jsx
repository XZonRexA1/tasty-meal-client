import React, { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = () => {
  const [chefData, setChefData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://tasty-meal-server-me-xzonrexa1.vercel.app/chefDetailsRecipes")
      .then((res) => res.json())
      .then((data) => {
        setChefData(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <h2 className="mt-4 font-extrabold text-3xl text-orange-700 mx-4 rounded py-4 bg-black ">
        Our Chefs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {chefData.map((chefInfo) => (
          <Card key={chefInfo._id} chefInfo={chefInfo}></Card>
        ))}
      </div>
    </>
  );
};

export default Cards;
