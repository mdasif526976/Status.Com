import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Authprovider/Authprovider';

function MobileNav() {
    const {logOut} = useContext(UserContext);
 const [isOpen, setIsOpen] = useState(false);

 return (
   <nav className="md:hidden flex items-center justify-between flex-wrap p-6">
     <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
       <h1 className="w-100 text-2xl h-10 mr-2" alt="Logo">Status.com</h1>
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block flex-grow lg:flex lg:items-center mt-2 
        lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-xl lg:flex-grow border mb-2 bg-gray-200 rounded px-2 pb-2">
         <Link to='/' className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold mr-4">
          Home
         </Link>
       </div>

       <div className="text-xl lg:flex-grow border mb-2 bg-gray-200 rounded px-2 pb-2">
         <Link to='/about' className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold mr-4">
          About me
         </Link>
       </div>
       <div className="text-xl lg:flex-grow border mb-2 bg-gray-200 rounded px-2 pb-2">
         <button onClick={()=> logOut()} className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold mr-4">
          Logout
         </button>
       </div>
       <div>
       </div>
     </div>
   </nav>
 );
}
export default MobileNav;