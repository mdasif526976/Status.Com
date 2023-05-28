import React from 'react';
import Navbar from '../../Compunent/Navbar/Navbar';
import Footer from '../../Compunent/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

const Main = () => {
    return (
        <div className='w-full h-full'>
           <Navbar/>
           <Outlet/>
        </div>
    );
};

export default Main;