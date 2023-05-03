import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [chefData, setChefData] = useState([]);
  useEffect(() => {
    fetch("https://tasty-meal-server-me-xzonrexa1.vercel.app/chefDetails")
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);
  console.log(chefData);
  return (
    <>
    <h2 className="mt-4 font-extrabold text-3xl text-orange-700 mx-4 rounded py-4 bg-black ">Our Chefs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {chefData.map((chefInfo) => (
          <Card key={chefInfo.id} chefInfo={chefInfo}></Card>
        ))}
      </div>
    </>
  );
};

export default Cards;
