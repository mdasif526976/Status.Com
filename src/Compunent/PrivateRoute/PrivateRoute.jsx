import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../Authprovider/Authprovider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(UserContext)
    const location = useLocation();
    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed
         rounded-full animate-spin border-blue-500"></div>
    }
    if(user.uid){
        return children;
    }
    return <Navigate to='/login' state={{form:location}} replace></Navigate>
};

export default PrivateRoute;