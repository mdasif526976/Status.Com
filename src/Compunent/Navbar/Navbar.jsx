import React, { useContext } from 'react';
import MobileNav from '../MobileNav/MobileNav';
import { UserContext } from '../Authprovider/Authprovider';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const {user,logOut} = useContext(UserContext);
  const {displayName,photoURL} = user;
	return (
	    <div>
			<div>
			<MobileNav></MobileNav>
			</div>
			<div className=' bg-[#A9DEF9] md:flex hidden  gap-14 justify-center items-center
		 h-[135px] w-full'>
			<div className='flex gap-8 items-center'>
             <h3 className='w-[55px] mt-2 rounded h-[55px] text-3xl mr-[76px]'>Status.com</h3>
			 <input className='p-3 rounded bg-white w-[625px]' type="text" />
			</div>
			<div className='flex gap-3 justify-left'>
				<div className='flex gap-3 items-center'>
                   <img className='w-14 h-14 rounded' 
				   src={photoURL} alt="" />
				   <p className=' text-orange-400 font-bold font-body'>{displayName}</p>
				</div>
				<button className='w-14 h-14 rounded bg-white pl-[11px]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
				viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
				 className="w-8 h-8 text-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg></button>
				<button className='w-14 h-14 rounded bg-white pl-[11px]'>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
			 className="w-8 h-8 text-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
</svg>
				</button>
				<button onClick={()=> logOut()} className='w-14 h-14 rounded bg-white pl-[11px]'>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
				 fill="currentColor"  className="w-8 h-8 text-black">
  <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
</svg>
				</button>
				<Link to='/about' className='mt-2 '><Button>About me</Button></Link>
			</div>
		</div>
		</div>
	);
};

export default Navbar;