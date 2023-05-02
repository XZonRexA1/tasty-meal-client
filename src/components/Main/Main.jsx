import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Hero from '../Hero/Hero';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;