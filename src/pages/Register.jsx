import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Swal from "sweetalert2";

const Register = () => {
  useEffect(() => {
    document.title = "Register - ToyTopia";
  }, []);
  const { setUser, createUser, updateUser } = useContext(AuthContext);

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
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
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 6 characters and include uppercase, lowercase and number.",
      );
      return;
    }
    setPasswordError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });

            Swal.fire({
              icon: "success",
              title: "Account Created Successfully",
              timer: 2000,
              showConfirmButton: false,
            });

            navigate(location.state ? location.state : "/");
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: error.message,
              timer: 2500,
            });
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
              {nameError && <p className="text-red-500">{nameError}</p>}
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
              <div>
                {passwordError && (
                  <p className="text-red-500">{passwordError}</p>
                )}

                <p className="text-gray-800">
                  Already have an account?
                  <Link to={"/login"} className="font-bold underline">
                    Login now
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
