import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { getAuth, signOut } from "firebase/auth";
import { getApp } from "firebase/app";
import app from "../../config_firebase";
import ActiveLink from "./activeLink/ActiveLink";

const Nav = ({children}) => {
    const {user,setLoading,setUser}=useContext(AuthContext);
    const navigate=useNavigate();
    const auth=getAuth(app);

    const handleLogout=async ()=>{
      signOut(auth)
      .then(() => {
        setUser('');
        navigate('/');
        toast.error('Successfully logout');
      })
      .catch((error) => {
        toast.error(error)
      });
      setLoading(false)
    }

  return (
    <nav className="w-4/5 mx-auto mt-8">
      <div className="navbar bg-base-100 justify-between grid md:flex">
        <h1 className="text-orange-700 font-bold text-4xl">MaxCook</h1>
        <div className="justify-center flex-col md:flex-row">
          <ActiveLink to="/" className="btn btn-ghost normal-case text-xl">Home</ActiveLink>
          <ActiveLink to="/blog" className="btn btn-ghost normal-case text-xl">Blog</ActiveLink>
        </div>

        {user ? 
          <div className="flex-col md:flex-row">
            <h1>{user.displayName}</h1>
            {
              user?.photoURL?<div className="tooltip" data-tip={user.displayName}>
              <img className="w-10 h-10 rounded-full mx-6" src={user.photoURL} />
            </div>
            :<div className="tooltip" data-tip={user.displayName}>
            <img className="w-10 h-10 rounded-full" src="https://www.kindpng.com/picc/m/171-1712282_profile-icon-png-profile-icon-vector-png-transparent.png"></img>
            </div>
            }
            <button className="btn-custom ml-4" onClick={handleLogout}>Logout</button>
          </div> : 
          <Link to="/login"><button className="btn-custom">Login</button></Link>
        }
      </div>
      
    </nav>
  );
};

export default Nav;
