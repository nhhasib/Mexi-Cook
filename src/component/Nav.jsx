import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-4/5 mx-auto mt-8">
      <div className="navbar bg-base-100 justify-between">
        <h1 className="text-orange-700 font-bold text-4xl">MaxCook</h1>
        <div className="flex-1 justify-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
          <Link to="/blog" className="btn btn-ghost normal-case text-xl">Recipes</Link>
          <Link to="/" className="btn btn-ghost normal-case text-xl">Features</Link>
          <Link className="btn btn-ghost normal-case text-xl">Shop</Link>
        </div>

        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </label>
      </div>
      
    </nav>
  );
};

export default Nav;
