import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const [error, setError] = useState("")
  const { loginUser } = use(AuthContext);
  const location = useLocation();

const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state? location.state : "/"}`)
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMassage = error.massage;
        setError(errorCode);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col w-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-yellow-400">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset w-full">
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
                    <Link to={""} className="font-bold underline">
                      Forget password
                    </Link>
                  </p>
                </div>
                {error && <p className="text-red-500">{ error}</p>}
                <button type="submit" className="btn mt-4 bg-yellow-400">
                  Login
                </button>
              </fieldset>
            </form>
            <p className="text-gray-800">
              Don't have account?{" "}
              <Link to={"/register"} className="font-bold underline">
                Sign up now!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
