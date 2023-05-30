import React, { useContext, useState } from 'react';
import { UserContext } from '../Authprovider/Authprovider';
import { format, formatDistanceToNow, formatRelative, subDays } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';

const PostCard = () => {
    const {user} = useContext(UserContext);
    const time = new Date ();
  
       const date = format(time,'yyyy-MM-dd')
       console.log(date) 
    const [postImage,setFile] = useState(false);
    const handleImageChange = (event) => {
       
        const file = event.target.files[0];
        setFile(file);
      }; 
     const imgbbKey = import.meta.env.VITE_IMGBB_KEY;
    const handleSubmit = (event)=>{   
        event.preventDefault();
        const form = event.target;
        const name = user.displayName;
        const userImg = user.photoURL;
        const title = form.title.value;
        if (!postImage) {
            const newPost = {name:name,email:user.email,date:date,title:title,comment:[]};
            fetch('http://localhost:4000/post',{
                    method:'POST',
                    headers:{
                         'Content-Type': 'application/json',
                    },
                    body:JSON.stringify(newPost)
                }).then(res=>res.json())
                .then(data=>{
                    if (data.acknowledged) {
                      form.reset()
                  toast.success('Post successfully !!')
                    }
                  console.log(data)
                }).catch(err=> console.log(err))
            return
            
        }
        const fromData = new FormData();
        fromData.append('image', postImage);
       const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`
       fetch(url,{
        method: 'POST',
        body: fromData
      })
      .then(res=>res.json())
      .then(imgData=> {
        if(imgData.success){
            const newPost = {name:name,userImg:userImg,email:user.email,title:title,date:date,like:0,
                postImg:imgData.data.url,comment:[]}
                fetch('http://localhost:4000/post',{
                    method:'POST',
                    headers:{
                         'Content-Type': 'application/json',
                    },
                    body:JSON.stringify(newPost)
                }).then(res=>res.json())
                .then(data=>{
                    if (data.acknowledged) {
                  toast.success('Post successfully !!')
                        
                    }
                  console.log(data)
                }).catch(err=> console.log(err))
        }})

   
    }
    return (
        <div className='rounded my-10 h-[215px] bg-white'>
            <h1 className='text-2xl mb-2 font-semibold text-center'>Write a Post</h1>
            <hr />
           <form onSubmit={handleSubmit}>
            <div className='w-[616px] px-6 my-4 '>
           <textarea className='w-full py-[20px]  rounded border px-2
            border-blue-500 bg-transparent text-sm font-normal
             bg-gray-200' name='title' placeholder='create a post' type="text" />
            </div>
            <div className='flex flex-col gap-3'>
                <input className='hidden' name='file' id='file'
                onChange={handleImageChange}  type="file" />
                <label className='w-full text-xl font-bold flex justify-center 
                items-center gap-3  text-blue-500 hover:underline  ' htmlFor="file">
                    <span>Add a image</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:underline">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

                </label>
            <button type='submit' className='w-full px-3 text-white 
            font-bold rounded py-[5px] bg-blue-500'>Post Now</button>
            </div>
           </form>

           <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
        </div>
    );
};

export default PostCard;