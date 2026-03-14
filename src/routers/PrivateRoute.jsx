import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();


  if (loading) {
    return <Loading />;
  }


  if (user) {
    return children;
  }


  return <Navigate to="/login" state={location.pathname} />;
};

export default PrivateRoute;
