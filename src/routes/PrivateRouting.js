import React from "react";
import { Navigate } from "react-router-dom"
import Dashboard from "../components/mainComponents";
import { getToken } from "../utils/LocalStorage";
const PrivateRoute = ({ children }) => {
  return getToken()? (
    <>
        {children}
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;