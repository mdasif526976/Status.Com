import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Card from '../Card/Card';
import Aside from '../Aside/Aside';
import PostCard from '../PostCard/PostCard';

const Home = () => {
    return (
        <div>
            <section className="">
               <div className='grid grid-cols-12 bg-[#d6e9e7] gap-9'>
                {/* sidebar  */}
				<div className='col-span-3'>
                <Sidebar></Sidebar>
				
				</div>
		{/* post scetion */}
				<div className='col-span-6  mr-[36px] mt-6'>
					<PostCard></PostCard>
			<Card></Card>
				</div>
		{/* aside  */}
				<div className='col-span-3 bg-white '>
				<Aside></Aside>
				</div>
			   </div>
            </section>
        </div>
    );
};

export default Home;