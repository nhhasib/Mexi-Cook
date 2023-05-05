import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";

const Register = ({ children }) => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const username = form.name.value;
    const photo = form.photo.value;

    createUser(email, password, username,photo);
  };

  return (
    <div>
      <div className="w-full md:w-1/2 py-10 px-5 md:px-10 mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
          <p>Enter your information to register</p>
        </div>
        <form onSubmit={handleRegister}>
          <div className="w-100 mb-5">
            <label className="text-xs font-semibold px-1">Name</label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
              </div>
              <input
                type="text"
                name="name"
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="w-100 mb-5">
            <label className="text-xs font-semibold px-1">Photo</label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
              </div>
              <input
                type="url"
                name="photo"
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="Enter your image link"
              />
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-xs font-semibold px-1">Email</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="email"
                  name="email"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-12">
              <label className="text-xs font-semibold px-1">Password</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="password"
                  name="password"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto text-center">
            <button className="w-1/2 btn-custom">REGISTER NOW</button>
          </div>
        </form>
        <p className="mt-8">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Login to your account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
