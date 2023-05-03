import React from "react";

const Card = ({ chefInfo }) => {
  const {
    chef_picture,
    chef_name,
    years_of_experience,
    number_of_recipes,
    likes,
    id,
  } = chefInfo;
  return (
    <>
      <div className="relative m-4 py-4 flex flex-col text-left bg-black rounded-md">
        <img
          className="w-40 h-40 m-4 rounded-md"
          src={chef_picture}
          alt="chef picturer"
        />
        <h2 className="font-bold uppercase mx-4 text-orange-600">Chef Name</h2>
        <div className="mx-4 text-orange-400 ">
          <em>{chef_name}</em>
        </div>
        <div className="mx-4 text-orange-400 font-bold">
          {years_of_experience}
          <span className="font-bold uppercase mx-2 text-orange-600">
            Years of experience
          </span>
        </div>
        <div className="mx-4 text-orange-400 font-bold">
          {number_of_recipes}
          <span className="font-bold uppercase mx-2 text-orange-600">
            Numbers of recipes
          </span>
        </div>

        <div className="mx-4 text-orange-400 font-bold">
          {likes}
          <span className="font-bold uppercase mx-2 mb-4 text-orange-600">
            Likes
          </span>
        </div>
        <button
          className="rounded-lg bg-orange-500
      hover:bg-orange-300 w-28 mx-4 md:mx-56  text-white px-2 py-2 mt-2 text-1xl"
        >
          View Recipes
        </button>
      </div>
    </>
  );
};

export default Card;
