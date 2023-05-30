import React from 'react';

const About = () => {
    return (
        <div className='mx-auto my-5 bg-gray-50 rounded w-10/12 '>
                        <h1 className='text-center text-2xl fonst-bold py-3 font-sans 
                        mx-2'>About Me</h1>
            <div className='flex md:flex-row flex-col gap-5  justify-around'>
           <div>
            <img className='w-80 h-full rounded' src="https://i.ibb.co/XYpkSvX/DSC-0075.jpg" alt="" />
           </div>
           <div className='grid  grid-cols-1 md:grid-cols-2 mx-auto md:mx-3 gap-5'>
             <div className='w-72 rounded h-52 bg-gray-200'>
                <h4 className='text-center font-bold text-xl'>Introduce</h4>
                <div className='m-2 text-sm font-semibold'>
                I was born in BanglaDesh. My home town is Brahmanbaria. Now I live in Khayaser in Brahmanbaria.
                </div>
             </div>
             <div className='w-72 rounded h-52 bg-gray-200'>
                <h4 className='text-center font-bold text-xl'>Education</h4>
                <div className='m-2 text-sm font-semibold'>
                   Hello i'm Asif.I complate my 10th class.Now i'm reading inter 1st Year.
                </div>
             </div>
             <div className='w-72 rounded h-52 bg-gray-200'>
                <h4 className='text-center font-bold text-xl'>Contract</h4>
                <div className='m-2 text-sm font-semibold'>
               Email:mdasif526976@gmail.com
               Linkedin:https://www.linkedin.com/in/md-asif-b841bb247/
               github:https://github.com/mdasif526976
                </div>
             </div>
             <div className='w-72 rounded h-52 bg-gray-200'>
                <h4 className='text-center font-bold text-xl'>Work Technology</h4>
                <div className='m-2 text-sm font-semibold'>
           Im a Mern Stack Developer. I have worked in both Front-End & Back-End. I have worked in technology MongoDB, Express, React js & Node js. I have good knowledge of Html, Css
& Javascript. For Frontend, I have worked with both Bootstrap & Tailwind Css.
                </div>
             </div>
             
           </div>
 </div>
        </div>
    );
};

export default About;