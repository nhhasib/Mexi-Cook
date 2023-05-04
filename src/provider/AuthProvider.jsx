import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { Children, createContext, useEffect, useState } from 'react';
import app from '../../config_firebase';


export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {

    const auth=getAuth(app);
    const googleProvider=new GoogleAuthProvider();
    const githubProvider=new GithubAuthProvider();

    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(null);
    const [datas,setDatas]=useState([]);
    const [chef,setChef]=useState(null)
    const [recipes,setRecipes]=useState([])

    const createUser=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser=(email,password)=>{
        setLoading(true);
       return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth)
    };
    const googleLogin=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    };
    const gitLogin=()=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
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
        chef,
        setChef,
        setUser,
        setRecipes,
        createUser,
        loginUser,
        logOut,
        googleLogin,
        gitLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;