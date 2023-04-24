import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content flex justify-between">
        <div>
          <a className="btn btn-ghost normal-case text-xl">DaisyUI</a>
        </div>
        <div className="">
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            Home
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/signup">
            SignUp
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/login">
            Login
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/about">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
