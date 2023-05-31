import React, { useContext, useState } from 'react';
import { UserContext } from '../../Authprovider/Authprovider';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {
    const navigate = useNavigate();
    const {user,setUser,signUpWithEmailPassword,updateUser} = useContext(UserContext);
    const [loader,setLoader] = useState(false);
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.username.value;
        const imgUrl = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 8) {
            toast.error('Password Length must be 8 character')
            return
        }
        console.log(email,name,imgUrl,password)
        setLoader(true)
        signUpWithEmailPassword(email,password)
        .then((result)=>{
            const user = result.user;
            setUser(user)
            updateUser(name,imgUrl)
            console.log(user)
            storeuser(email,imgUrl,name)
            setLoader(false)
            // navigate('/')
            toast.success('Sign up Successfully')
                
        })
        .catch((err)=> {
            console.log(err)
            setLoader(false)
        })
        const storeuser=(email,img,name)=>{
          
        }

    }
    return (
        <div className='bg-[#8ad0c9] flex justify-center items-center h-screen'>
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white">
<h1 className="text-2xl font-bold text-center">Signup Now </h1>
<form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
    <div className="space-y-1 text-sm ">
        <p className=' border border-b-1 border-gray-800 mb-4'/>
        <label htmlFor="username" className="block text-gray-700">Name</label>
        <input type="text" name="username" id="username" required
        placeholder="enter your a Username" className="w-full px-4 py-3 rounded-md
         border-gray-700 text-gray-900 border-b-1 shadow bg-gray-200 
         focus:border-violet-400" />
    </div>
    <div className="space-y-1 text-sm ">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input type="email" name="email" id="email" required
        placeholder="enter your email" className="w-full px-4 py-3 rounded-md
         border-gray-700 text-gray-900 border-b-1 shadow bg-gray-200 
         focus:border-violet-400" />
    </div>
    <div className="space-y-1 text-sm ">
        <label htmlFor="image" className="block text-gray-700">Image Url</label>
        <input type="text" name="image"  required id='image'
        placeholder="input your image url" className="w-full px-4 py-3 rounded-md
         border-gray-700 text-gray-900 border-b-1 shadow bg-gray-200 
         focus:border-violet-400" />
    </div>
    <div className="space-y-1 text-sm ">
        <label htmlFor="password" className="block text-gray-700">Password</label>
        <input type="password" name="password"  required id='password'
        placeholder="enter your password" className="w-full px-4 py-3 rounded-md
         border-gray-700 text-gray-900 border-b-1 shadow bg-gray-200 
         focus:border-violet-400" />
    </div>
    
    <button type='submit' className="block w-full p-3 text-center 
    rounded text-white font-bold   bg-blue-500">
        {loader ? <div className="w-10 h-10 border-4 border-dashed mx-auto
         rounded-full animate-spin border-violet-400"></div>
        :<span>Sign up</span>
        }
    </button>
</form>

<p className="text-xs md:text-sm text-center sm:px-6 text-gray-500">Don't have an account? 
     <Link to='/signup' className="underline text-gray-700">Login Now</Link>
</p>
</div>
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

export default SignUp;