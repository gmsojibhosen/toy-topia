import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
  const { setUser, createUser } = use(AuthContext);

  const [nameError, setNameError] = useState();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
   if (name.trim().length < 5) {
     setNameError("Name must be at least 5 characters");
     return;
   } else {
     setNameError("");
   }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ name, photo, email, password });

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMassage = error.massage;
        alert(errorMassage, errorCode);
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
                required
              />
              {nameError && <p className="text-red-500">{nameError }</p>}
              <label className="label">photoURL</label>
              <input
                name="photo"
                type="text"
                className="input w-full"
                placeholder="photoURL"
                required
              />

              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input w-full"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input w-full"
                placeholder="Password"
                required
              />

              <div>
                <p>
                  Already have an account?
                  <Link to={"/login"} className="font-bold underline">
                    Login
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
