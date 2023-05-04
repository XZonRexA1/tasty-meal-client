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
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Blog from "./components/Blog/Blog.jsx";

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
      <PrivateRoute>
        <Layout>
          <ViewRecipes></ViewRecipes>
        </Layout>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(
        "https://tasty-meal-server-me-xzonrexa1.vercel.app/chefDetailsRecipes"
      ),
  },
  {
    path: "login",
    element: (
      <Layout>
        <Login></Login>
      </Layout>
    ),
  },
  {
    path: "register",
    element: (
      <Layout>
        <Register></Register>
      </Layout>
    ),
  },
  {
    path: "blog",
    element: (
      <Layout>
        <Blog></Blog>
      </Layout>
    ),
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
