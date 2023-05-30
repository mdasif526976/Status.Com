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
         h-10 text-white">
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
        h-10 text-white">
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
        h-10 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
</svg>

        </span>
         <p className='text-xl font-medium'>Friend Request</p>
        </div>
			</div>
		</div>
		<div className="space-y-2">
    <h2 className="text-[18px] font-semibold tracking-widest
       uppercase text-orange-600 pb-3">Settings</h2>
					<div className="flex py-3 flex-col space-y-1">
				<div className='flex gap-3 items-center'>
        <span className=''>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          className="w-10 rounded bg-[#46b4eb]
          h-10 text-white">
  <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
</svg>
        </span>
         <p className='text-xl font-medium'>Setting</p>
        </div>
			</div>
      <div className="flex py-3 flex-col space-y-1">
				<div className='flex gap-3 items-center'>
        <span className=''>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          className="w-10 rounded bg-[#46b4eb]
          h-10 text-white">
  <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
</svg>

        </span>
         <p className='text-xl font-medium'>Secure Data</p>
        </div>
			</div>
					<div className="flex py-3 flex-col space-y-1">
				<div className='flex gap-3 items-center'>
        <span className=''>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
          className="w-10 rounded bg-red-400
          h-10 text-white">
  <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
</svg>

        </span>
         <p className='text-xl font-medium'>Profile</p>
        </div>
			</div>
		</div>
	</nav>
</aside>
    </div>
  );
};

export default Sidebar;