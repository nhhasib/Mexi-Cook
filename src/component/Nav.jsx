import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { getAuth, signOut } from "firebase/auth";
import { getApp } from "firebase/app";
import app from "../../config_firebase";

const Nav = ({children}) => {
  // const history = useHistory()
    const {user,logOut,setLoading,setUser}=useContext(AuthContext);
    const navigate=useNavigate();
    const auth=getAuth(app);
    // console.log(user.photoURL)

    const handleLogout=async ()=>{
      signOut(auth)
      .then(() => {
        setUser('')
        console.log("signout")
        navigate('/')
        toast.error('Successfully logout');
      })
      .catch((error) => {
        console.log(error)
      });
      setLoading(false)
    }

    console.log(user)

  return (
    <nav className="w-4/5 mx-auto mt-8">
      <div className="navbar bg-base-100 justify-between md:flex">
        <h1 className="text-orange-700 font-bold text-4xl">MaxCook</h1>
        <div className="flex-1 justify-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
          <Link to="/blog" className="btn btn-ghost normal-case text-xl">Blog</Link>
        </div>

        {user ? 
          <div>
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
