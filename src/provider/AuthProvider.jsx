import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { Children, createContext, useEffect, useState } from 'react';
import app from '../../config_firebase';
import { toast } from "react-toastify";


export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {

    const auth=getAuth(app);
    const googleProvider=new GoogleAuthProvider();
    const githubProvider=new GithubAuthProvider();

    const [loading, setLoading]= useState(true);
    const [currentUser, setUserName]= useState();
    const [datas,setDatas]=useState([]);
    const [chef,setChef]=useState({})
    const [recipes,setRecipes]=useState([])
    // useEffect(()=>{
    //     const unsubscribe=onAuthStateChanged(auth,currentUser=>{
    //         setUser(currentUser);
    //         setLoading(false)
    //     });
    //     return unsubscribe;
    // },[])

    useEffect(()=>{
        fetch("https://maxi-cook-server-nhhasib.vercel.app/recipe")
        .then(res=>res.json())
        .then(data=>setDatas(data))
    },[])

    
    useEffect(()=>{
        const auth= getAuth();
        const unsubscribe= onAuthStateChanged(auth, (user)=>{
            setUserName(user);
            setLoading(false)
        })
        return unsubscribe();
    }, [])
    //signup
    async function createUser(email, password, username,photo){
        const auth=getAuth();
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {
            displayName: username,
            photoURL:photo,
        });
        const user= auth.currentUser;
        setUserName({
            ...user,
        })
        toast.success('Successfully Register')
    }
    function loginUser(email, password){
        const auth= getAuth();
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logOut(){
        // setMenuOpen(false)
        const auth = getAuth();
        return signOut(auth)
    }
    const googleLogin=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    };
    const gitLogin=()=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

 
   

    const authInfo={
        user: currentUser,
        loading,
        datas,
        recipes,
        chef,
        setChef,
        setUser: setUserName,
        setLoading,
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