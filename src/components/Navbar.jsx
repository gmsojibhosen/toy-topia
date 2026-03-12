import React, { use } from "react";
import { FaUser, FaUserAltSlash } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };
  const navLink = (
    <>
      <li className="mr-2">
        <NavLink className="hover:bg-yellow-400" to={"/"}>
          Home
        </NavLink>
      </li>
      <li className="mr-2">
        <NavLink className="hover:bg-yellow-400" to={"toys"}>
          Toys
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:bg-yellow-400" to={"profile"}>
          My Profile
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar  max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <Link to={"/"} className=" text-xl text-yellow-400 font-bold">
            Toy Topia
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-3">
            <div
              title={user?.displayName}
              className="border-2 rounded-full p-1 w-10 h-10 overflow-hidden flex items-center justify-center"
            >
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="user"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <FaUserAltSlash />
              )}
            </div>

            {user ? (
              <button
                onClick={handleLogOut}
                className="btn px-5 mr-3 bg-yellow-400 text-gray-600"
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/login"
                className="btn px-5 mr-3 bg-yellow-400 text-gray-600"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
