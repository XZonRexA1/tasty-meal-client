import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Cards from '../Cards/Cards';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <Cards></Cards>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;