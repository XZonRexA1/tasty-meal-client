import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main.jsx";
import ViewRecipePage from "./components/ViewRecipes/ViewRecipes.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Cards from "./components/Cards/Cards.jsx";
import ViewRecipes from "./components/ViewRecipes/ViewRecipes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Main></Main>
      </Layout>
    ),
  },
  {
    path: "viewRecipes/:viewRecipesId",
    element: (
      <Layout>
        <ViewRecipes></ViewRecipes>
      </Layout>
    ),
    loader: ({ params }) => fetch("https://tasty-meal-server-me-xzonrexa1.vercel.app/chefDetailsRecipes")
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
