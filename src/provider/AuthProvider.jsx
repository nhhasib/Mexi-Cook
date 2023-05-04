import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { Children, createContext, useEffect, useState } from 'react';
import app from '../../config_firebase';


export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {

    const auth=getAuth(app);
    const googleProvider=new GoogleAuthProvider();

    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(null);
    const [datas,setDatas]=useState([]);
    const [recipes,setRecipes]=useState([])

    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser=(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        return signOut(auth)
    };
    const googleLogin=()=>{
        return signInWithPopup(auth, googleProvider)
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
        recipes,
        setRecipes,
        createUser,
        loginUser,
        logOut,
        googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;