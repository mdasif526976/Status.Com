import { Button } from '@material-tailwind/react';
import React from 'react';

const Aside = () => {
    // const 
    return (
        <div>
            <div className='h-full  mx-3'>
              <div>
                <h1 className='text-orange-400 text-2xl 
                font-semibold py-3'>People you may know  </h1>
                <div className="flex w-52  space-x-2 sm:space-x-4">
				<img className="flex-shrink-0 object-cover w-22 h-24 
                border-transparent rounded outline-none
                  "
                  src="https://i.ibb.co/XYpkSvX/DSC-0075.jpg" />
				<div className="flex flex-col justify-between w-full pb-4">
					<div className="flex justify-between w-full pb-2 space-x-2">
						<div className="space-y-1">
							<h3 className="text-[15px] font-semibold leading-snug 
                            ">Md Asif</h3>
							<p className="text-sm dark:text-gray-400">Hi I am asif</p>
						</div>
						
					</div>
					<div className="flex text-sm divide-x">
                        <Button className=''>Follow</Button>
		
					</div>
				</div>
			</div>
                <div className="flex w-52  space-x-2 sm:space-x-4">
				<img className="flex-shrink-0 object-cover w-22 h-24 
                border-transparent rounded outline-none
                  "
                  src="https://i.ibb.co/5WNyy1M/pexels-tima-miroshnichenko-5452293.jpg" />
				<div className="flex flex-col justify-between w-full pb-4">
					<div className="flex justify-between w-full pb-2 space-x-2">
						<div className="space-y-1">
							<h3 className="text-[15px] font-semibold leading-snug 
                            ">Dr. Josef</h3>
							<p className="text-sm dark:text-gray-400">As a Doctor</p>
						</div>
						
					</div>
					<div className="flex text-sm divide-x">
                        <Button className=''>Follow</Button>
		
					</div>
				</div>
			</div>
              </div>
            </div>
            <div className='mt-24'>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
	<img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<h2 className="text-xl font-semibold text-orange-400 tracking-wide">Boost your Post</h2>
	</div>
	<p className="text-black">Try Now. Low price package</p>
    <div className="flex flex-col items-center justify-center">
	<div className="flex -space-x-4">
		<img alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?1" />
		<img alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?2" />
		<img alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?3" />
		<img alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?4" />
		<span className="flex items-center justify-center w-12 h-12 
        font-semibold border rounded-full dark:bg-gray-900
         dark:text-gray-100 dark:border-gray-700">+133  </span>
	</div>
    <p className='py-3'>People Like this post</p>

</div>
</div>
            </div>
        </div>
    );
};

export default Aside;