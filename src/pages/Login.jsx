import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col w-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-yellow-400">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset w-full">
             
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input w-full"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn  mt-4 bg-yellow-400 ">Login</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
