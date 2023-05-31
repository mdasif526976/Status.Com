import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Card from '../Card/Card';
import Aside from '../Aside/Aside';
import PostCard from '../PostCard/PostCard';
import { UserContext } from '../Authprovider/Authprovider';
import { useQuery } from 'react-query';

const Home = () => {
	const {logOut} = useContext(UserContext);
	const {isLoading,refetch,data:posts=[]} = useQuery({
		queryKey:['posts'],
		queryFn: async()=>{
		const res =  await fetch('https://status-bay-three.vercel.app/posts',{
				headers:{
					authorization:`bearer ${localStorage.getItem('accessToken')}`
				}
			})
			if (res.status === 401 || res.status === 403) {
				return logOut();
				
			}
			const data = res.json();
			return data; 
		}
	})
	if (isLoading) {
		return
	}
	console.log(posts)

	
    return (
        <div>
            <section className="">
               <div className='grid md:grid-cols-12 grid-cols-1 bg-[#d6e9e7] gap-9'>
                {/* sidebar  */}
				<div className='col-span-3 sticky hidden md:block'>
                <Sidebar></Sidebar>
				
				</div>
		{/* post scetion */}
				<div className='col-span-6 mx-5 md:mr-[36px] mt-6'>
					<PostCard refetch={refetch}></PostCard>
			            <div className='flex flex-col gap-8'>
							{
								// data.forEach(element => {
								// 	<Card key={element._id} data={element}></Card>
								// })
								posts &&
								posts?.map((post)=><Card refetch={refetch} data={post} key={post._id}></Card>)
							}
						</div>
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