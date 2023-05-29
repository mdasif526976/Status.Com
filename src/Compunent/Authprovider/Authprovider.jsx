import React, { useContext,createContext, useState, useEffect } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut} from 'firebase/auth'
import app from '../../Firebase/Firebase.Config'
const auth = getAuth(app)
export const UserContext = React.createContext();
const Authprovider = ({children}) => {
    const [user,setUser] = useState('');
    const [loading,setLoading] = useState(false);

    // sign up   
    const signUpWithEmailPassword=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // sign out
    const signInWithEmailPassword= (email,password)=>{
      return signInWithEmailPassword(auth,email,password)
    }

    //logout
    const logOut=()=>{
      return signOut(auth)
    }

    // store user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=> unsubscribe ();
    },[])
    const authInfo ={user,setUser,signUpWithEmailPassword,signInWithEmailPassword,logOut};
    return (
        
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>


    );
};

export default Authprovider;