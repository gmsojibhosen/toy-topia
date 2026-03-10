import React, { Children, use } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (user && user.email) {
    return children;
  }
  if (loading) {
    return <Loading />;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
