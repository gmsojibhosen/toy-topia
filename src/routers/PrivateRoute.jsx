import React, { use } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();


  if (loading) {
    return <Loading />;
  }


  if (user) {
    return children;
  }


  return <Navigate to="/login" state={location.pathname} replace />;
};

export default PrivateRoute;
