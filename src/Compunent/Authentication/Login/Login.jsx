import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from '../../Authprovider/Authprovider';

const Login = () => {
    const navigate = useNavigate();
    const {user,setUser,signInWithEmailPassword,logOut} = useContext(UserContext);
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 8) {
            toast.error('Password Length must be 8 character')
            return
        }
        signInWithEmailPassword(email,password)
        .then((result)=>{
            const user = result.user;
            setUser(user)
            navigate('/')
        }).catch(err=>console.log(err))

    }
    return (
        <div className='bg-[#8ad0c9] flex justify-center items-center h-screen'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white">
	<h1 className="text-2xl font-bold text-center">Login Now</h1>
	<form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm ">
            <p className=' border border-b-1 border-gray-800 mb-4'/>
			<label htmlFor="username" className="block text-gray-700">Email</label>
			<input type="email" name="email" id="username" 
            placeholder="Username" className="w-full px-4 py-3 rounded-md
             border-gray-700 text-gray-900 border-b-1 shadow bg-gray-200 
             focus:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm ">
			<label htmlFor="username" className="block text-gray-700">Password</label>
			<input type="password" name="password"  
            placeholder="Username" className="w-full px-4 py-3 rounded-md
             border-gray-700 text-gray-900 border-b-1 shadow bg-gray-200 
             focus:border-violet-400" />
		</div>
		
		<button type='submit' className="block w-full p-3 text-center 
        rounded text-white font-bold   bg-blue-500">Sign in</button>
	</form>
	
	<p className="text-xs md:text-sm text-center sm:px-6 text-gray-500">Don't have an account? 
		 <Link to='/signup' className="underline text-gray-700">Sign up</Link>
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

export default Login;