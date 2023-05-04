import React from "react";
import { Outlet } from "react-router-dom";
import Hero from "../Hero/Hero";
import Cards from "../Cards/Cards";
import Menu from "../Menu/Menu";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div>
      <Hero></Hero>
      <Cards></Cards>
      <Menu></Menu>
      <AboutUs></AboutUs>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
