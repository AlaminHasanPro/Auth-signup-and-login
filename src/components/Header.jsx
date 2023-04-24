import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "./Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(userContext);
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
        <div>
          {user ? (
            <>
              {user.email}

              <button onClick={logOut} className="mx-5 btn btn-outline btn-accent">
                LogOut
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-outline btn-accent" to="/login">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
