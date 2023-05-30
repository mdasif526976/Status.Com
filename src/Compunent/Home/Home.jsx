import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Card from '../Card/Card';
import Aside from '../Aside/Aside';
import PostCard from '../PostCard/PostCard';
import { UserContext } from '../Authprovider/Authprovider';

const Home = () => {
	const {a} = useContext(UserContext);
	const [refetch,setrefetch] = ('')
	const [loading,setloding] = useState(false)
	console.log(a)
	const [data,setData] = useState('');
	useEffect(()=>{
		setloding(true)
		fetch('http://localhost:4000/posts')
		.then(res=>res.json())
		.then (data=>{
			setloding(false)
			setData(data)
		})
	},[])
	if (loading) {
		return;
	}
	
	console.log(data)
    return (
        <div>
            <section className="">
               <div className='grid grid-cols-12 bg-[#d6e9e7] gap-9'>
                {/* sidebar  */}
				<div className='col-span-3 sticky'>
                <Sidebar></Sidebar>
				
				</div>
		{/* post scetion */}
				<div className='col-span-6  mr-[36px] mt-6'>
					<PostCard></PostCard>
			            <div className='flex flex-col gap-8'>
							{
								// data.forEach(element => {
								// 	<Card key={element._id} data={element}></Card>
								// })
								data &&
								data?.map((post)=><Card refetch={refetch} setrefetch={setrefetch} data={post} key={post._id}></Card>)
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