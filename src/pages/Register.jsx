import React, { use, } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
  const { createUser } = use(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ name, photo, email, password });

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col w-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-yellow-400">
            Create an account
          </h1>
        </div>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset w-full">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Name"
              />

              <label className="label">photoURL</label>
              <input
                name="photo"
                type="text"
                className="input w-full"
                placeholder="photoURL"
              />

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
                <p>
                  Already have an account?
                  <Link to={"/login"} className="font-bold underline">
                    Log in
                  </Link>
                </p>
              </div>

              <button type="submit" className="btn mt-4 bg-yellow-400">
                Create an account
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
