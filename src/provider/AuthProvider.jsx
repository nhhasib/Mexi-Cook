import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { Children, createContext, useEffect, useState } from 'react';
import app from '../../config_firebase';


export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {

    const auth=getAuth(app);

    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(null);
    const [datas,setDatas]=useState([])

    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser=(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=(auth)=>{
        return signOut(auth)
    }
 
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        });
        return unsubscribe();
    },[])

    useEffect(()=>{
        fetch("/public/data.json")
        .then(res=>res.json())
        .then(datas=>setDatas(datas))
    },[])

    const authInfo={
        user,
        loading,
        datas,
        createUser,
        loginUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;