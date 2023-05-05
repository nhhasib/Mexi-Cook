import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../../config_firebase";
import { toast } from "react-toastify";

const Login = ({children}) => {

    const {loginUser,logOut,googleLogin,setUser,gitLogin,user}=useContext(AuthContext);
    const navigate=useNavigate();
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [loading, setLoading] = useState()

    const handleLogin= async (event)=>{
        event.preventDefault();
        
        try{
            setLoading(true)
            const user = await loginUser(email, pass)

            setUser(user)
            navigate('/'),
                toast.success('Successfully login');

        }catch(err){
            setLoading(false)
            toast.error(err.message)

        }
  
    }
    const handleGoogleLogin=()=>{
        googleLogin()
        .then(result=>{
            const user=result.user;
            setUser(user);
            toast.success('Successfully login')
        })
        .catch(error=>{
            console.log(error)
            toast.error(error.message)
        })
    }

    const handleGithubLogin=()=>{
        gitLogin()
        .then(result=>{
            const user=result.user;
            setUser(user)
            toast.success('Successfully login')
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }

  return (
    <div className="md:w-1/2 w-4/5 mx-auto my-10 pb-10">
                <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
                    <p>Login to your Account</p>
                </div>

      <form className="mt-6" onSubmit={handleLogin}>
      <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <label  className="text-xs font-semibold px-1">Email</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter your email" value={email} onChange={e=> setEmail(e.target.value)} name="email"/>
                            </div>
                        </div>
                    </div>

                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-8">
                            <label  className="text-xs font-semibold px-1">Password</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter your password" value={pass} onChange={e=> setPass(e.target.value)} name="password"/>
                            </div>
                        </div>
                    </div>

        <div className="text-center mb-6">
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
        </div>
        <div className="text-center btn-custom w-4/5 md:w-1/2 mx-auto"><button type=' submit'>Login</button></div>
      </form>

      <hr className="my-10" />

      <button type="button" onClick={handleGoogleLogin} className="w-4/5 md:w-1/2 mx-auto btn mt-6 block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-2 border border-gray-300">
            <div className="flex items-center justify-center">
            <img className="rounded-full w-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png" alt="" />
            <span className="ml-4">
            Log in with Google</span>
            </div>
          </button>
      <button type="button" onClick={handleGithubLogin} className="w-4/5 md:w-1/2 mx-auto mt-6 block btn bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-2 border border-gray-300">
            <div className="flex items-center justify-center">
            <img className="rounded-full w-8" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
            <span className="ml-4">
            Log in with Github</span>
            </div>
          </button>

      <p className="mt-8">Need an account? <Link to="/register" className="text-blue-500 hover:text-blue-700 font-semibold">Create an
              account</Link></p>


    </div>
  );
};

export default Login;
