import { Button } from '@material-tailwind/react';
import React from 'react';

const PostCard = () => {
    return (
        <div className='rounded my-10 h-[215px] bg-white'>
            <h1 className='text-2xl mb-2 font-semibold text-center'>Write a Post</h1>
            <hr />
            <div className='w-[623px] px-6 my-4 '>
            <input className='w-full py-6 rounded border border-blue-500 bg-transparent text-xl font-normal
             bg-gray-200' type="text" />
            </div>
            <div className='flex flex-col gap-3'>
                <input className='hidden' id='file' type="file" />
                <label className='w-full text-xl font-bold flex justify-center items-center gap-3
                text-blue-500 hover:underline  ' htmlFor="file">
                    <span>Add a image</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:underline">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

                </label>
            <button className='w-full px-3 text-white 
            font-bold rounded py-[5px] bg-blue-500'>Post Now</button>
            </div>
        </div>
    );
};

export default PostCard;