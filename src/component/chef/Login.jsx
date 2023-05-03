import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {

    const {loginUser,logOut}=useContext(AuthContext);
    console.log(loginUser);

    const handleLogin=event=>{
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        // loginUser(email,password)
        // .then(result)
    }

  return (
    <div className="w-1/2 mx-auto my-10">
                <div class="text-center mb-10">
                    <h1 class="font-bold text-3xl text-gray-900">LOGIN</h1>
                    <p>Login to your Account</p>
                </div>

      <form className="mt-6" action="#" method="POST" onSubmit={handleLogin}>
      <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Email</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter your email" name="email"/>
                            </div>
                        </div>
                    </div>

                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-8">
                            <label for="" class="text-xs font-semibold px-1">Password</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter your password" name="password"/>
                            </div>
                        </div>
                    </div>

        <div className="text-center mb-6">
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
        </div>
        <div className="text-center"><button className="w-1/2">Login</button></div>
      </form>

      <hr className="my-10" />

      <button type="button" className="w-1/2 mx-auto mt-6 block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-2 border border-gray-300">
            <div className="flex items-center justify-center">
            <img className="rounded-full w-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png" alt="" />
            <span className="ml-4">
            Log in with Google</span>
            </div>
          </button>
      <button type="button" className="w-1/2 mx-auto mt-6 block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-2 border border-gray-300">
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
