import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Nav = ({children}) => {
    const {user,logOut}=useContext(AuthContext);
    // console.log(user.photoURL)

    const handleLogout=()=>{
      logOut()
      .then(() => {
        console.log("singout")
      })
      .catch((error) => {
        console.log(error)
      });
      
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
              user?.photoURL?<img className="w-10 rounded-full mx-6" src={user.photoURL} />:<img className="w-10 rounded-full" src="https://www.kindpng.com/picc/m/171-1712282_profile-icon-png-profile-icon-vector-png-transparent.png"></img>
            }
            <button onClick={handleLogout}>Logout</button>
          </div> : 
          <Link to="/login"><button>Login</button></Link>
        }
      </div>
      
    </nav>
  );
};

export default Nav;
