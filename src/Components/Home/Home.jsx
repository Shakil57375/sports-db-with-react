import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className='px-24'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;