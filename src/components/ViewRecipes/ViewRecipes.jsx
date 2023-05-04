import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewRecipes = () => {
  const { viewRecipesId } = useParams();

  const data = useLoaderData();
  console.log(data);
  const [chefRecipeData, setChefRecipeData] = useState({});
  useEffect(() => {
    const newData = data?.find(
      (db) => parseInt(db._id) === parseInt(viewRecipesId)
    );
    setChefRecipeData(newData);

  }, []);


  const {
    chef_picture,
    chef_name,
    short_description,
    likes,
    number_of_recipes,
    years_of_experience,
    recipe_name,
    ingredients,
    cooking_method,
    rating,
  } = chefRecipeData;

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    toast("My Favorite Recipe");
    setIsFavorite(true);
  };
  return (
    <div>
      <div className="max-w-lg mx-auto bg-orange-500 rounded p-8">
        <div className="mb-8">
          <img
            src={chef_picture}
            alt="chef picture"
            className="w-64 h-64 rounded-md mx-auto mb-4"
          />
          <h2 className="text-3xl font-bold text-center mb-2">{chef_name}</h2>
          <p className="text-center text-gray-200">{short_description}</p>
        </div>
        <table className="table-auto mb-8">
          <tbody>
            <tr>
              <td className="font-bold pr-4">Years of Experience:</td>
              <td>{years_of_experience}</td>
            </tr>
            <tr>
              <td className="font-bold pr-4">Number of Recipes:</td>
              <td>{number_of_recipes}</td>
            </tr>
            <tr>
              <td className="font-bold pr-4 text-left">Likes:</td>
              <td>{likes}</td>
            </tr>
            <tr>
              <td className="font-bold pr-4 text-left">Rating:</td>
              <td>{rating}</td>
            </tr>
            <tr>
              <td className="font-bold pr-4 text-left">Recipe:</td>
              <td>{recipe_name}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <div className="text-center font-bold font-mono text-2xl">
            Ingredients
          </div>
          {ingredients?.map((id) => (
            <li className="text-left">{id}</li>
          ))}
        </div>
        <div>
          <div className="text-center mb-4 font-bold mt-4 font-mono text-2xl">
            How to Cook this Recipe
          </div>
          {cooking_method?.map((cm) => (
            <li className="text-left list-none">{cm}</li>
          ))}
        </div>
        <button
          onClick={handleFavoriteClick}
          disabled={isFavorite}
          className={`rounded-lg bg-orange-800 hover:bg-orange-300 w-22 font-bold md:mx-24 text-orange-200 px-4 py-2 mt-4 text-1xl ${
            isFavorite ? "opacity-50 cursor-default" : ""
          }`}
        >
          {isFavorite ? "Added to favorites" : "Favorite"}
        </button>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default ViewRecipes;
