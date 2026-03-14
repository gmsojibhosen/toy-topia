import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Swal from "sweetalert2";

const Login = () => {
  useEffect(() => {
    document.title = "Login - ToyTopia";
  }, []);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, createGoogleUser, forgetPassword } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: `Login Successful`,
          timer: 2000,
          showConfirmButton: false,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    createGoogleUser()
      .then((result) => {
        const user = result.user;
        Swal.fire({
          icon: "success",
          title: `Welcome ${user.displayName}`,
          timer: 1500,
          showConfirmButton: false,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: errorMessage,
          timer: 2500,
        });
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;

    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Please enter your email first",
        timer: 2000,
      });
      return;
    }

    forgetPassword(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Password reset email sent",
          timer: 2000,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.message,
          timer: 2500,
        });
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
                  ref={emailRef}
                  placeholder="Email"
                  required
                />

                <label className="label">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input w-full"
                    placeholder="Password"
                    required
                  />
                  <span
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    className="absolute  right-4 top-3 cursor-pointer text-lg text-gray-500"
                  >
                    {showPassword ? <IoEyeOff /> : <IoEye />}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleForgetPassword}
                  className="font-bold underline text-left mt-1"
                >
                  Forget password
                </button>
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit" className="btn mt-4 bg-yellow-400">
                  Login
                </button>
              </fieldset>
            </form>
            <p className="text-gray-800">
              Don't have account?{" "}
              <Link to={"/register"} className="font-bold underline">
                Register now!
              </Link>
            </p>

            {/* Google */}
            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-black border-[#e5e5e5] mt-2"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
