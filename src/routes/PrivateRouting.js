import React from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "../components/mainComponents/Dashboard";

const PrivateRoute = ({ children }) => {
  return  (
   <Dashboard></Dashboard>
  )
};

export default PrivateRoute;