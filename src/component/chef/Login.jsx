import React from "react";

const Login = () => {
  return (
    <div className="w-1/2 mx-auto my-10">
      <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

      <form className="mt-6" action="#" method="POST">
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required/>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" name="" id="" placeholder="Enter Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required/>
        </div>

        <div className="text-right mt-2">
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

      <p className="mt-8">Need an account? <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Create an
              account</a></p>


    </div>
  );
};

export default Login;
