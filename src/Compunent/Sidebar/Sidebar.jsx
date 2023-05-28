import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen,setOpen] =  useState(false);
  const Open=()=>{
    setOpen(!isOpen);
  }
  return (
    <div onMouseEnter={Open} onMouseLeave={Open} 
    className={` ${isOpen && 'h-full w-full delay-500' } 
    h-full duration-300 w-20`}>
      <div className='bg-white '>
        <div className={`inline-flex`}>
         {/* <img className='w-[100px] h-[100px] rounded-xl' src="" alt="" /> */}   
         <svg xmlns="http://www.w3.org/2000/svg" 
         className={` w-[100px] h-[100px] rounded-xl ${!isOpen && 'w-4 h-4'}`} 
         fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> 
        <p>Rayan dhall</p>
         
        </div>
        {/* <div className='bg-red-500 h-16'></div>
        <div className='bg-red-500 h-16'></div> */}
      </div>
    </div>
  );
};

export default Sidebar;