import React from "react";

const Navbar = () => {
  const navLink = (
    <>
      <li>Home</li>
      <li>Shop</li>
      <li>About</li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
        <a className="btn btn-ghost text-xl">Toy Topia</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Shop</a>
          </li>
          <li>
            <a>Profile</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="">
          <a className="btn mr-3 bg-[#FFD93D] ">
            Log in
          </a>
          <a className="btn bg-[#FFD93D] ">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
