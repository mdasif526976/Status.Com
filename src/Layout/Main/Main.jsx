import React from 'react';
import Navbar from '../../Compunent/Navbar/Navbar';
import Footer from '../../Compunent/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

const Main = () => {
    return (
        <div className='w-full h-full bg-[#d6e9e7] '>
           <Navbar/>
           <div className='mb-8'>
           <Outlet/>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Main;