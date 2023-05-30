import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const CardDetal = () => {
    const [post,setData] = useState('')
    const params = useParams();
   useEffect(()=>{
    fetch(`http://localhost:4000/post/${params.id}`)
    .then(res=>res.json())
    .then(data=> setData(data))
   },[])
    let {name,title,userImg,_id,email,date,like,postImg,comment} = post;
    const time = format(new Date(),'yyyy-MM-dd');
    const [commentId,setcommentId] = useState('')
    const [liked,setlike] = useState(false);
   const [isOpen,setOpen] = useState(false);
   const [likeCount,setCount] = useState(like)
   const commentHide=()=>{
       setOpen(!isOpen)
   }
   const likeBtn=(id)=>{
       setCount(liked ? likeCount-1 : like+1)
    setlike(!liked)
    const count = {likeCount : likeCount};
    fetch(`http://localhost:4000/like/${id}`,{
       method:'PUT',
       headers:{
            'Content-Type': 'application/json',
       },
       body:JSON.stringify(count)
   }).then(res=>res.json())
   .then(data=>{
       if (data.acknowledged) {
     console.log(data)
       }
     console.log(data)
   }).catch(err=> console.log(err))
   }
   const handleComment = (event)=>{
       event.preventDefault();
        const form = event.target;
        const title = form.comment.value;
        const date = format(date)
        const commentDetail = {name:name,title:title,time:time,userImg:userImg,email:email};
        const newComment = [...comment,commentDetail];
        fetch(`http://localhost:4000/comment/${commentId}`,{
                   method:'PUT',
                   headers:{
                        'Content-Type': 'application/json',
                   },
                   body:JSON.stringify(newComment)
               }).then(res=>res.json())
               .then(data=>{
                   if (data.acknowledged) {
                 toast.success('comment successfully !!')
                 form.reset()
                   }
                 console.log(data)
               }).catch(err=> console.log(err))
   
   }
   const commentValue = (comment?.length);
    return (
        <div>
             <div className="flex flex-col h-92 p-6 space-y-6 
            overflow-hidden rounded-lg shadow-md bg-white  text-gray-900">
	<div className="flex space-x-4">
		<img alt="" src="https://source.unsplash.com/100x100/?portrait" 
        className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm font-semibold">
				{name}</a>
			<span className="text-xs text-gray-400">{date}</span>
		</div>
	</div>
	<div>
		<img src={postImg} alt="" 
        className="object-cover w-full mb-4 h-52 sm:h-96 rounded-xl bg-gray-500" />
		<p className="text-sm text-gray-400">
			{title}</p>
	</div>
	<div className="flex flex-wrap justify-between">
		<div className="space-x-2">
			<button aria-label="Share this post" type="button" className="p-2 text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
					<path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
				</svg>
			</button>
			<button aria-label="Bookmark this post" type="button" className="p-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
					<path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
				</svg>
			</button>
		</div>
		<div className={`flex  space-x-2 text-sm text-gray-400`}>
			<button onClick={commentHide} type="button" 
			className="flex items-center p-1 space-x-1.5">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
				 aria-label="Number of comments" 
				 className="w-4 h-4 fill-current text-violet-400">
					<path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
					<path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"></path>
				</svg>
				<span>{commentValue}</span>
			</button>
			<button type="button" 
			onClick={()=>likeBtn(_id)}
			className={`flex  ${liked ? 'text-blue-400'  : ''} items-center p-1 space-x-1.5`}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
				 className="w-6 h-6">
  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
</svg>
				<span>{likeCount}</span>
			</button>
		</div>
	</div>
	<div className={ 'block delay-500'}>
	<div className=' justify-between flex'>
    <h1 className='text-xl px-2'>All comments</h1>
    
	</div>
		<div >
            <form onSubmit={handleComment} className='flex justify-around gap-2 my-2'>
			<input name="comment" className='py-3 bg-gray-50 shadow w-[80%] border rounded px-5'
			placeholder='comment here' type="text" />
			<button className='bg-blue-500 text-white px-5 py-1 rounded' 
			onClick={()=> setcommentId(_id)}
			 type='submit'>Submit</button>
			</form>
			<div className='flex flex-col gap-3'>
				{ comment &&
					comment?.map((data)=> <Comment data={data} key={data._id}/>)
                }
			</div>
		</div>

	</div>
</div>
        </div>
    );
};

export default CardDetal;