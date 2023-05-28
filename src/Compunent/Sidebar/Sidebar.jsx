import React from 'react';

const Sidebar = () => {
  return (
    <div className=''>
      <aside className="w-full p-6 sm:w-60 text-gray-900 bg-gray-100">
	<nav className="space-y-8 text-sm ">
		<div className="space-y-2 mx-10 mb-20">
			<img className='rounded'
       src="https://source.unsplash.com/100x100/?portrait" alt="" />
      <p className='text-xl font-medium'>Ryan Dhall</p>
		</div>
		<div className="space-y-2">
			<h2 className="text-[18px] font-semibold tracking-widest
       uppercase text-orange-600 pb-3">Explore panel</h2>
			<div className="flex py-3 flex-col space-y-1">
				<div className='flex gap-3 items-center'>
        <span className=''>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        strokeWidth={1.5} stroke="currentColor" className="w-10 rounded bg-[#46b4eb]
         h-10 text-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
        </span>
         <p className='text-xl font-medium'>Profile</p>
        </div>
			</div>
			<div className="flex py-3 flex-col space-y-1">
				<div className='flex gap-3 items-center'>
        <span className=''>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
        className="w-10 rounded bg-[#46b4eb]
        h-10 text-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
</svg>

        </span>
         <p className='text-xl font-medium'>Find Friends</p>
        </div>
			</div>
			<div className="flex py-3 flex-col space-y-1">
				<div className='flex gap-3 items-center'>
        <span className=''>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
        className="w-10 rounded bg-[#46b4eb]
        h-10 text-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
</svg>

        </span>
         <p className='text-xl font-medium'>Friend Request</p>
        </div>
			</div>
		</div>
		<div className="space-y-2">
			<h2 className="text-sm font-semibold tracking-widest 
      uppercase text-gray-400">Pages</h2>
			<div className="flex flex-col space-y-1">
				<a  href="#">Homepage</a>
				<a  href="#">Users</a>
				<a  href="#">Tools</a>
				<a  href="#">Settings</a>
			</div>
		</div>
		<div className="space-y-2">
			<h2 className="text-sm font-semibold tracking-widest uppercase text-gray-400">Misc</h2>
			<div className="flex flex-col space-y-1">
				<a  href="#">Tutorials</a>
				<a  href="#">Changelog</a>
			</div>
		</div>
	</nav>
</aside>
    </div>
  );
};

export default Sidebar;