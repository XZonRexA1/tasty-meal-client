import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Cards from '../Cards/Cards';
import Menu from '../Menu/Menu';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <Cards></Cards>
            <Menu></Menu>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;