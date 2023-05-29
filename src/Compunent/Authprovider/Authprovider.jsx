import React, { useContext,createContext } from 'react';
import {getAuth} from 'firebase/auth'
import app from '../../Firebase/Firebase.Config'
const auth = getAuth(app)
export const UserContext = React.createContext();
const Authprovider = ({children}) => {
    const authInfo ={a:1};
    return (
        
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>


    );
};

export default Authprovider;